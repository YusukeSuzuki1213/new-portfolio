<template>
  <section class="hhh">
    <h1 class="text-center font-weight-bold mb-3">Works</h1>
    <div class="works-list">
      <ArticleList :articles="workPosts" :isClicable="isClicable" :iconSize="iconSize"/>
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
      default: () => ([])
    }
  },
  data: () => ({
    isClicable: false,
    iconSize: "lg", // size: https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons
  })
};
</script>

<style scoped lang="scss">
.hhh {
  font-size: 65%;
}
</style>