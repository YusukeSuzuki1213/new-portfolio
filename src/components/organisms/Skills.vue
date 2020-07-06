<template>
  <section class="component">
    <div class="component__title">
      <h2 class="text-center font-weight-bold mb-3">Skills</h2>
    </div>

    <table class="component__table">
      <tbody>
        <tr v-for="(skills, index_c) in contents" :key="index_c">
          <td v-for="(skill, index_s) in skills" :key="index_s">{{ skill.name }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      contents: [
        [
          { name: "C" },          
          { name: "Java" },
          { name: "PHP" },
          { name: "Ruby" },
        ],
        [          
          { name: "Python" },
          { name: "HTML/CSS" },
          { name: "JavaScript" },
          { name: "Kotlin" },
        ],
        [          
          { name: "PyTorch" },
          { name: "Kivy" },
          { name: "Vue.js" },
          { name: "React"},
        ],
        [
          { name: "Rails" },
          { name: "Git" },
          { name: "Docker" },          
          { name: "Firebase" }, 
        ],
        [{ name: "Android" }]
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.component {
  display: flex;  
  flex-direction: column;
  align-items: center;    
  &__title {
    font-size: 2rem;
    text-decoration: underline;
  }
  &__table {
    margin-top: 20px;
    text-align: left;
    td {
      padding-left: 120px;      
      padding-top: 3px;
      @include sp() {
        padding-left:11px;
        padding-top: 8px;
      }
    }
  }
}
</style>
