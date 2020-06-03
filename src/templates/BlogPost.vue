<template>
  <Layout>
    <article class="article-wrap">
      <header class="header">
        <g-image class="header__img" :src="$page.blogPost.thumbnail" />
      </header>
      <main class="main">
        <div class="post-title">
          <h1 class="post-title__text">{{ $page.blogPost.title }}</h1>
        </div>
        <div class="post">
          <div class="post__header"></div>
          <div class="post__content" v-html="$page.blogPost.content"></div>
          <div class="post__footer"></div>
        </div>
      </main>
    </article>
  </Layout>
</template>

<page-query>
query BlogPost ($id: ID!) {
  blogPost(id: $id) {
    title
    thumbnail
    date
    categories
    tags
    summary
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        { name: 'twitter:card', content: "summary" },
        { name: "twitter:site", content: "@ss1ua2zt1us3uki" },
        {
          property: "og:url",
          content: "https://yusuke-suzuki.netlify.app" + this.$route.path
        },
        { property: "og:title", content:this.$page.blogPost.title },
        { property: "og:description", content: this.$page.blogPost.summary },
        {
          property: "og:image",
          content: this.$page.metadata.siteUrl +
              require(`!!assets-loader!@images/${this.$page.blogPost.thumbnail}`).src
        }
      ]
    };
  }
};
</script>


<style lang="scss">
.article-wrap {
  font-size: 0.8em;
}
.post-title {
  margin-top: 60px;
  margin-bottom: 0px;
  text-align: center;
  &__text {
    border-bottom: 0px;
  }
  @include sp() {
    padding: 20px;
  }
}
.header {
  position: relative;
  width: 100%;
  background-color: #ccd7dd;
  height: 500px;
  overflow: hidden;
  @include tablet() {
    height: 0px;
  }
  &__img {
    position: absolute;
    width: 100%;
    opacity: 0.8;
    top: 50%;
    transform: translateY(-50%);
    background-size: cover;
    @include tablet() {
      display: none;
    }
  }
}
.main {
  .post {
    h1 {
      margin-top: 60px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 0.3em;
    }
    h2 {
      border-bottom: 1px solid #ddd;
    }
    p {
      line-height: 2;
    }
    ul,
    ol {
      padding-left: 34px;
      margin-bottom: 1.25em;
    }
    blockquote {
      margin-left: 8px;
      border-left: 4px solid var(--border-color);
      padding-left: calc(var(--space) / 2);
      color: #777;
    }
    pre {
      code:before {
        content: "";
        letter-spacing: 0px;
      }
    }
    img {
      display: block;
      width: 70%;
      margin: 15px auto 30px auto;
      @include sp() {
        width: 95%;
      }
    }
  }
}

.post {
  max-width: 900px;
  margin: 0 auto;
  padding: 15px;
  &__header {
  }
  &__content {
    img {
      margin-top: 1.25rem;
      width: 100%;
    }
  }
  &__footer {
  }
}
</style>