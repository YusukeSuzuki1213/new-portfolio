<template>
  <Layout>
    <div class="posts">
      <Posts :postss="$page.posts.edges"/>
    </div>
  </Layout>
</template>

<page-query>
query Post {
    posts: allPost {
      edges {
        node {
          id
          path
          content
          title
          subtitle
          src
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
  }
};
</script>