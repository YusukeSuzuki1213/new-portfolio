<template>
  <Layout>
    <div class="posts">
      <Posts :posts="$page.posts.edges"/>
    </div>
  </Layout>
</template>

<page-query>
query BlogPost {
    posts: allBlogPost {
      edges {
        node {
          id
          path
          content
          title          
          summary
          thumbnail
          date
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
    Posts: () => import("~/components/organisms/Posts"),
  },
  mounted() {   
    this.$ga.page('/posts');
  }
};
</script>
<style scoped>

</style>