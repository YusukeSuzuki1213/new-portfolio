<template>
  <header class="header">
    <h1 class="header__title">Yusuke's Portfolio</h1>
    <div class="header__body">
      <nav class="nav">
        <ul>
          <li class="nav__item" v-for="(link, index) in links" :key="index">
            <g-link class="nav__link" :to="link.to">{{ link.text }}</g-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    links: [
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
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  margin: 0 auto;
  transition: height 0s ease 0s, opacity 0.4s ease 0s;
  z-index: 200;
  overflow: hidden;
  &__title {
    display: block;
    position: absolute;
    top: 22px;
    left: 36px;
    line-height: 0;
    color: #FFFF;
  }
  &__body {
    position: relative;
    width: 100%;
  }
}

.nav {
  position: absolute;
  top: 28px;
  right: 340px;
  line-height: 0;
  &__link {
    margin-left: 20px;
    //color: white;
  }
  &__item {
    display: inline-block;
    line-height: 1.2;
    letter-spacing: 0.04em;
  }
}
</style>
