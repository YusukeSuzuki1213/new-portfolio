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
        { property: "og:description", content: "Works" },
        {
          property: "og:image",
          content:  "https://yusuke-suzuki.netlify.app" + require(`!!assets-loader!@assets-images/my-icon.jpeg`)
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>