<template>
  <div>
    <g-link
      v-for="(article, index) in articles"
      :key="index"
      class="link"
      :to="article.node.path"
      :class="{ hover: isClickable }"
    >
      <article class="article-wrap">
        <figure class="article-img">
          <g-image :src="article.node.src" width="500" />
        </figure>
        <div class="article-content">
          <div class="article-text-block-main">
            <h2 class="article-title">{{ article.node.title }}</h2>
            <p class="article-date">{{ article.node.date }}</p>
            <p
              class="article-summary"
            >{{ article.node.content }} {{ article.node.content }} {{ article.node.content }} {{ article.node.content }} {{ article.node.content }}</p>
          </div>
          <div class="article-text-block-bottom">
            <IconList :contents="article.node.links" :button-size="buttonSize" />
          </div>
        </div>
      </article>
    </g-link>
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
    }
  },
  data: () => ({
    buttonSize: {
      width: "30",
      height: "30"
    }
  }),
  methods: {
    articleClicked(link) {
      if (this.isClickable) {
        window.location.href = link;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.link {
  display: block;
  text-decoration: none;
  color: black;
  max-width: 1000px;
  margin: 0 auto;
}

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
  padding: 50px 15px;
  max-width: 100%;
  margin: 0 auto;
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
        @include sp() {
          color: #0066cb;
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
        font-size: 1.2em;
      }
    }
    .article-text-block-bottom {
    }
  }
}
</style>
