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
  }
};
</script>

<style scoped>
.cv {
  font-size: 0.9em;
}
</style>