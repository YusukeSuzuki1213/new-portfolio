<template>
  <Layout>
    <div class="posts">
      <Posts />
    </div>
  </Layout>
</template>

<script>

export default {
  components: {
    Posts: () => import("~/components/organisms/Posts"),
  }
};
</script>