<template>
  <section class="page">
    <div class="page__title">
      <h2 class="text-center font-weight-bold mb-3">Works</h2>
    </div>
    <div class="works-list">
      <ArticleList :articles="workPosts" :isClicable="isClicable" :iconSize="iconSize" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Works",
  components: {
    ArticleList: () => import("~/components/molecules/ArticleList.vue")
  },
  props: {
    workPosts: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    isClicable: false,
    iconSize: "lg", // size: https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons  
  })
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
  font-size: 0.6em;
}
</style>