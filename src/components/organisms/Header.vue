<template>
  <v-app-bar class="header" app color="black" dark flat>
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
  </v-app-bar>
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
  &__title {
    margin-right: auto;
    @include sp() {
      width: 100px;
    }
    h1 {
      margin-bottom: 0px; //vuetify 上書き
      font-size: 20px;
    }
  }
  &__contents {
    margin-left: auto;
  }
}
.nav {
  &__link {
    margin: 0 10px;
    color: white;
    @include sp() {
      font-size: 15px;
      margin: 0 6px;
    }
  }
}
</style>