<template>
  <div>
    <article
      v-for="(article, index) in articles"
      :key="index"
      class="article-wrap"
      :class="{ 'hover': isClickable }" 
      @click="postClicked(article.node.path, isClickable)"
    >
      <figure class="article-img">
        <g-image :src="require(`!!assets-loader!@upload-images/${ article.node.thumbnail }`)" width="500" />
      </figure>
      <div class="article-content">
        <div class="article-text-block-main">
          <h2
            class="article-title"
            :class="{ 'article-title--blue': isClickable }"
          >{{ article.node.title }}</h2>
          <p class="article-date">{{ article.node.date }}</p>
          <p class="article-summary">{{ article.node.summary }}</p>
        </div>
        <div class="article-text-block-bottom">          
          <IconList :contents="article.node.links" :buttonSize="buttonSize" :iconSize="iconSize" :parentName="'works'"/> <!-- TODO: parentNameがよくない。このコンポーネントはworks以外からも使われるので。 -->
        </div>
      </div>      
    </article>
  </div>
</template>

<script>
export default {
  components: {
    IconList: () => import("~/components/molecules/IconList.vue")
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    },
    isClickable: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
      default: "lg"
    }
  },
  data: () => ({
    buttonSize: {
      width: "30",
      height: "30"
    }
  }),
  methods: {
    postClicked(path, isClickable) {
      if (isClickable) this.$router.push({ path: path });
    }
  }
};
</script>

<style scoped lang="scss">
.hover {
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    opacity: 0.6;
  }
}

.article-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px 100px 15px;
  max-width: 1000px;
  margin: 0 auto;
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
  .article-img {
    width: 55%;
    @include sp() {
      width: 100%;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .article-content {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    width: 40%;
    @include sp() {
      width: 100%;
    }
    .article-text-block-main {
      width: 100%;
      .article-title {
        font-size: 2.0em;
        margin: 10px 0;
        &--blue {
          @include sp() {
            color: #0066cb;
          }
        }
      }
      .article-date {
        margin-top: 6px;
        color: #171717;
      }
      .article-summary {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        margin-top: 6px;
        color: #808085;
        font-size: 1.35em;
      }
    }
    .article-text-block-bottom {
      pointer-events: auto;
    }
  }
}
</style>
