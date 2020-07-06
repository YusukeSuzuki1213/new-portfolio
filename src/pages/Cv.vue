<template>
  <Layout>
    <div class="cv">
      <About class="cv__about"/>
      <Skills class="cv__skills"/>
      <Contacts class="cv__contacts"/>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "cv",
  components: {
    About: () => import("~/components/organisms/About"),
    Skills: () => import("~/components/organisms/Skills"),
    Contacts: () => import("~/components/organisms/Contacts")
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
        { property: "og:description", content: "自己紹介ページ" },
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
.cv {
  position: relative;
  top: 50px;
  font-size: 1rem;
  &__about {
    margin: 50px 10px;    
  }
  &__skills {
    margin: 50px 10px;    
  }
  &__contacts {
    margin: 50px 10px;    
  }
}
</style>