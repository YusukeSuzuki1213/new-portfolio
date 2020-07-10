<template>
  <section class="component">
    <div class="component__title">
      <h2 class="text-center font-weight-bold mb-3">Contacts</h2>
    </div>
    <IconList class="component__icons" :contents="contents" :buttonSize="buttonSize" :iconSize="iconSize" :parentName="'Contacts'"/>
  </section>
</template>

<script>
export default {
  components: {
    IconList: () => import("~/components/molecules/IconList.vue")
  },
  data: () => ({
    contents: [
      {
        name: "Github",
        icon: {
          useFontAwesome: true,
          prefix: "fab",
          name: "github"
        },
        size: "40",
        url: "https://github.com/YusukeSuzuki1213"
      },
      {
        name: "Facebook",
        icon: {
          useFontAwesome: true,
          prefix: "fab",
          name: "facebook-f"
        },
        size: "40",
        url: "https://www.facebook.com/rzug84rke"
      },
      {
        name: "Youtube",
        icon: {
          useFontAwesome: true,
          prefix: "fab",
          name: "youtube"
        },
        size: "40",
        url: "https://www.youtube.com/channel/UC0hsoreL2qqXlnhDqvU7Q4A"
      },
      /* {
        name: "Qiita",
        icon: {
          useFontAwesome: false,
          prefix: "",
          name: "Qiita"
        },
        size: "55",
        url: "https://qiita.com/YusukeSuzuki1213"
      }, */
      /* {
        name: "Twitter",
        icon: {
          useFontAwesome: true,
          prefix: "fab",
          name: "twitter"
        },
        size: "40",
        url: "https://twitter.com/ss1ua2zt1us3uki"
      }, */
      /* {
        name: "Instagram",
        icon: {
          useFontAwesome: true,
          prefix: "fab",
          name: "instagram"
        },
        size: "40",
        url: "https://www.instagram.com/yusuke.suzuki.a/"
      } */
    ],
    buttonSize: {
      height: "80",
      width: "80"
    },
    iconSize: "3x"
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
    text-decoration: underline
  }
  &__icons {
    margin-top: 20px;
  }
}
</style>