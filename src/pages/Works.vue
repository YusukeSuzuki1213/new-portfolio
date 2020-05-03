<template>
  <Layout>
    <div class="works">
      <Works />
    </div>
  </Layout>
</template>

<script>
export default {
  components: {
    Works: () => import("~/components/organisms/Works")
  }
};
</script>