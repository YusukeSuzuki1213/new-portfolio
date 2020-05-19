<template>
  <section class="page">
    <div class="page__title">
      <h2 class="text-center font-weight-bold mb-3">Posts</h2>
    </div>
    <div class="works-list">
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
  &__title {
    margin: 70px 0;
    text-decoration: underline
  }
}
.works-list {
  font-size: 0.65em;
}
</style>