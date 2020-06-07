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
  metaInfo() {
    return {
      meta: [
        { name: 'twitter:card', content: "summary" },
        { name: "twitter:site", content: "@ss1ua2zt1us3uki" },
        {
          property: "og:url",
          content: "https://yusuke-suzuki.netlify.app" + this.$route.path
        },
        { property: "og:title", content:"Yusuke's portfolio" },
        { property: "og:description", content: "投稿一覧ページ" },
        {
          property: "og:image",
          content:  "https://yusuke-suzuki.netlify.app" + require(`!!assets-loader!@assets-images/my-icon.jpeg`).src
        }
      ]
    };
  }
};
</script>
<style scoped>

</style>