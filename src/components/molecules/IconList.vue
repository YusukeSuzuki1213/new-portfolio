<template>
  <div class="icon-list">
    <div v-for="(content, index) in contents" :key="index">
      <v-btn
        @click="sendGa(parentName, content.name, content.url)"        
        :href="content.url"
        target="_blank"
        icon
        :height="buttonSize.height"
        :width="buttonSize.width"
      >
        <font-awesome
          v-if="content.icon.useFontAwesome"
          :icon="[content.icon.prefix, content.icon.name]"
          :size="iconSize"
        />
        <v-icon v-else :size="content.size">{{ content.icon.name }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
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

<style scoped>
.icon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>>