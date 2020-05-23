<template>
  <section class="component">
    <div class="component__title">
      <h2 class="text-center font-weight-bold mb-3">Skills</h2>
    </div>
    <v-container>
      <ul>
        <li v-for="(skill, index) in skills" :key="index">{{ skill.name }}</li>
      </ul>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        { name: "C" },
        { name: "Emacs Lisp" },
        { name: "Java" },
        { name: "PHP" },
        { name: "Ruby" },
        { name: "Python" },
        { name: "HTML/CSS" },
        { name: "JavaScript" },
        { name: "Kotlin" },
        { name: "PyTorch" },
        { name: "Kivy" },
        { name: "Vue.js" },
        { name: "Ruby on Rails" },
        { name: "Git" },
        { name: "Docker" },
        { name: "Github Actions" },
        { name: "Firebase" },
        { name: "Android" }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
.component {
  &__title {
    margin: 70px 0;
    text-decoration: underline;
  }
}
ul {
  margin: 0 auto;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
