<template>
  <Layout>
    <div class="posts">
      <Posts :posts="$page.posts.edges"/>
      <H1>{{ $page.posts.edges[0].node.path }}</H1>
    </div>
  </Layout>
</template>

<page-query>
query BlogPost {
    posts: allPost {
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