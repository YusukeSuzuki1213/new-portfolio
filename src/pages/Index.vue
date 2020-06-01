<template>
  <Layout>
    <div class="main">
      <h1 class="main__title">
        <span class="main__title--1 fade-1">Hello, </span>
        <span class="main__title--2 fade-2">World!</span>
      </h1>
    </div>
  </Layout>
</template>

<script>
</script>

<style scoped lang="scss">
.main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__title {    
    &--1 {
      opacity: 0;
    }
    &--2 {
      opacity: 0;
    }
  }
}

.fade-1{
  animation: fadeIn 7s ease 0s 1 forwards;
}
.fade-2{
  animation: fadeIn 7s ease 2s 1 forwards;
}

@keyframes fadeIn {
  0% {opacity: 0} 
  100% {opacity: 1}
}
</style>
