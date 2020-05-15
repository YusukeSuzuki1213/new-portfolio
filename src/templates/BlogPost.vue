<template>
  <Layout>
    <div>
      <header class="header">
        <g-image class="header__img" :src="$page.blogPost.src" />
      </header>
      <main class="main">
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
<style scoped lang="scss">
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
.post {
  max-width: 100%;
  padding: 20px 300px;
  &__header {
  }
  &__content {
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
  &__footer {
  }
}
</style>