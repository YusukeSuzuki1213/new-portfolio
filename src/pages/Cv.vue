<template>
  <Layout>
    <div class="cv">
      <About />
      <Contacts />
      <Skills />
    </div>
  </Layout>
</template>

<script>
export default {
  components: {
    About: () => import("~/components/organisms/About"),
    Skills: () => import("~/components/organisms/Contacts"),
    Contacts: () => import("~/components/organisms/Skills")
  }
};
</script>

<style scoped>

</style>