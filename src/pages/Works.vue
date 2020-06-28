<template>
  <Layout>
    <div class="wrap">
      <Works class="wrap__works" :workPosts="$page.works.edges"/>
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
        { property: "og:description", content: "作品ページ" },
        {
          property: "og:image",
          content:  "https://yusuke-suzuki.netlify.app" + require(`!!assets-loader!@assets-images/my-icon.jpeg`).src
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.wrap {
  &__works {
    margin: 50px 5px 0px 5px;
  }
}
</style>