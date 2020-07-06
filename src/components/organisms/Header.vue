<template>
  <div class="header">
    <div class="header__title">
      <h1>Yusuke's portfolio</h1>
    </div>
    <div class="header__contents">
      <nav class="nav">
        <g-link
          class="nav__link"
          v-for="(content, index) in contents"
          :key="index"
          :to="content.to"
        >{{ content.text }}</g-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    contents: [
      {
        text: "Top",
        to: "/"
      },
      {
        text: "CV",
        to: "/cv"
      },
      {
        text: "Works",
        to: "/works"
      },
      {
        text: "Posts",
        to: "/posts"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 56px;
  position: fixed;
  top: 0px;
  display:flex;
  justify-items: center;
  align-items: center;
  background: black;
  z-index: 9999;
  &__title {
    color: white;
    padding-left: 5px;
    h1 {
      margin-bottom: 0px; //vuetify 上書き
      font-size: 15px;
    }
  }
  &__contents {
    margin-left: auto;
  }
}
.nav {
  padding-right: 20px;
  @include sp() {
    padding-right: 8px;
  }
  &__link {
    margin: 0 10px;
    color: white;
    @include sp() {
      font-size: 15px;
      margin: 0 8px;
    }
  }
}
</style>