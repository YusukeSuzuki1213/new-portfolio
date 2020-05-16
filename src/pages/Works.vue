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
          subtitle
          summary
          src
          date
          links {
            name
            icon {
              useFontAwesome
              prefix
              name
            }
            size
            url
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
  }
};
</script>

<style scoped>

</style>