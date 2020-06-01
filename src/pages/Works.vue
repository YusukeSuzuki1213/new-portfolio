<template>
  <Layout>
    <div class="works">
      <Works :workPosts="$page.works.edges"/>
    </div>
  </Layout>
</template>

<page-query>
query WorkPost {
    works: allWorkPost {
      edges {
        node {
          id
          path
          content
          title          
          summary
          thumbnail
          date
          links {            
            icon {
              useFontAwesome
              prefix
              name
            }
            size
            url
            name
          }
          categories
          tags
        }
      }
    }
  }
</page-query>

<script>
export default {
  components: {
    Works: () => import("~/components/organisms/Works")
  },
  mounted() {   
    this.$ga.page('/works');
  }
};
</script>

<style scoped>

</style>