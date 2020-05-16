<template>
  <Layout>
    <div>
      <header class="header">
        <g-image class="header__img" :src="$page.blogPost.src" />
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
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<page-query>
query BlogPost ($id: ID!) {
  blogPost(id: $id) {
    title
    subtitle
    src
    date
    categories
    tags
    content
  }
}
</page-query>
<script>
export default {
  components: {
    AppBar: () => import("~/components/organisms/Header.vue")
  }
};
</script>
<style lang="scss">
.post-title {
  padding: 80px 0;
  text-align: center;
}

.header {
  position: relative;
  width: 100%;
  background-color: #ccd7dd;
  height: 500px;
  overflow: hidden;
  &__img {
    position: absolute;
    width: 100%;
    opacity: 0.8;
    top: 50%;
    transform: translateY(-50%);
    background-size: cover;
  }
}
.main {
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