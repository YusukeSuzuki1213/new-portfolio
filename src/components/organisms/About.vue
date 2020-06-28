<template>
  <section class="component">
    <div class="component__title">
      <h2 class="text-center font-weight-bold mb-3">About</h2>
    </div>

    <figure class="component__avatar">
      <g-image src="~/assets/images/my-icon.jpeg" />
    </figure>

    <table class="component__table">
      <tbody>
        <tr v-for="(content, index) in contents" :key="index">
          <td>{{ content.key }}</td>
          <td>{{ content.value }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "About",

  data: () => ({
    contents: [
      {
        key: "Name:",
        value: "Yusuke Suzuki"
      },
      {
        key: "Barthday:",
        value: "December 12th, 1997"
      },
      {
        key: "Company:",
        value: "ZOZO Technologies, Inc."
      },
      {
        key: "Education:",
        value: "Shizuoka University, Japan Bachelor of Informatics"
      }
    ]
  })
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
  &__avatar {
    margin-top: 20px;
    img {
      width: 225px;
      border-radius: 50%;
    }
  }
  &__table {
    margin-top: 20px;
    text-align: left;
    td {
      padding-left: 30px;
      padding-top: 8px;
    }
  }
}
</style>
