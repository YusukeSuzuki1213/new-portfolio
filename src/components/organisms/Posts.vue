<template>
  <section class="page">
    <div class="page__title">
      <h2 class="text-center">Posts</h2>
    </div>
    <div class="page__posts-list">
      <ArticleList :articles="posts" :isClickable="true" />
    </div>
  </section>
</template>

<script>
export default {
  components: {
    ArticleList: () => import("~/components/molecules/ArticleList.vue")
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 2rem;
    text-decoration: underline
  }
  &__posts-list {
    margin: 50px 0;
    font-size: 0.6em;  
  }
}
</style>