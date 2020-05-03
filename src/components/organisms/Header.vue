<template>
  <v-app-bar class="header" app color="black" dark flat>
    <div class="header__title">
      <h1>Yusuke's portfolio</h1>
    </div>
    <div class="header__contents">
      <v-btn :to="content.to" v-for="(content, index) in contents" :key="index" text>
        <span class="mr-2">{{ content.text }}</span>
      </v-btn>
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
    h1 {
      font-size: 20px;
    }
  }
  &__contents {
    margin-left: auto;
  }
}
</style>
