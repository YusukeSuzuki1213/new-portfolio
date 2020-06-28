<template>
  <section class="page">
    <div class="page__title">
      <h2 class="text-center">Works</h2>
    </div>
    <div class="page__works-list">
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
    iconSize: "2x" // size: https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons
  })
};
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 2rem;
    text-decoration: underline;
  }
  &__works-list {
    margin: 50px 0;
    font-size: 0.6em;
  }
}
</style>