<template>
  <div>
    <Header/>
    <slot />      
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("~/components/organisms/Header.vue")
  },
};
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

html, body{
  line-height: 1.45;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 20px;  
  font: inherit;
  vertical-align: baseline;
  height: 100%;
  -webkit-text-size-adjust: 100%;
}
#app {
  height: 100%;
}
</style>
