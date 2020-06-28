<template>
  <div class="icon-list">
    <div v-for="(content, index) in contents" :key="index">
      <button
        class="icon-list__button"
        @click="openPage(content.url), sendGa(parentName, content.name, content.url)"
        :style="{width: `${buttonSize.width}px`, height: `${buttonSize.height}px`}"        
      >
        <font-awesome  
          v-if="content.icon.useFontAwesome"          
          :icon="[content.icon.prefix, content.icon.name]"
          :size="iconSize"
        />
        <IconGoogleColab v-else-if="content.icon.name === 'GoogleColab'"/>
        <!-- TODO: アイコンの大きさ調整する必要<IconQiita v-else-if="content.icon.name === 'Qiita'" :size="content.size" />         -->
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
     IconGoogleColab: () => import('~/components/molecules/icons/IconGoogleColab'),
     IconQiita: () => import('~/components/molecules/icons/IconQiita'),
  },
  props: {
    contents: {
      type: Array,
      default: () => []
    },
    buttonSize: {
      type: Object,
      default: () => ({
        height: "80",
        width: "80"
      })
    },
    iconSize: {
      type: String,
      default: "lg"
    },
    parentName: {
      type: String,
      default: ""
    }
  },
  methods: {
    async openPage(url) {
        window.open(url, '_blank');
    },
    async sendGa(category, action, label = "none") {
      this.$ga.event({
        eventCategory: category, // work or contact
        eventAction: action, // どのworkか
        eventLabel: label // どのサイトか
      });
    }
  }
};
</script>

<style scoped lang="scss">
.icon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &__button {    
    border-radius: 50%;
    margin-right: 10px;
    border: none;
    outline: none;
    opacity: 0.6;
    background: rgba(255, 255, 255, 0);
    &:hover {
      cursor: pointer;
      background: whitesmoke;
    }
  }
}
</style>>