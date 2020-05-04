<template>
  <section class="hhh">
    <h1 class="text-center font-weight-bold mb-3">Posts</h1>
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
      default: () => ([])
    }
  }
};
</script>

<style scoped lang="scss">
.hhh {
  font-size: 65%;
}
</style>