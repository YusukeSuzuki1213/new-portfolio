<template>
  <Layout>
    <div class="cv">
      <About />      
      <Skills />
      <Contacts />
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
        { property: "og:description", content: "CV: About/Skills/Contacts" },
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
.cv {
  font-size: 0.9em;
}
</style>