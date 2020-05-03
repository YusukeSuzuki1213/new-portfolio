<template>
  <section class="hhh">
    <h1 class="text-center font-weight-bold mb-3">Posts</h1>
    <div class="works-list">
      <ArticleList :articles="posts" isClickable="true"/>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    ArticleList: () => import("~/components/molecules/ArticleList.vue")
  },
  data: () => ({
    posts: [
      {
        title: "今考えること",
        subtitle: "サブタイトルいらねぇな",
        src: require("../../assets/images/posts/post-1.jpg"),
        date: "20XX.2.2",
        summary:
          "今何を思うか。そう。それこそが、自分をしる第一歩である。自分の感情というものは、俯瞰してみないと冷静に判断できないことがある。例えば、相手に罵詈雑言を浴びせているときなどは、...",
        links: [],
        sections: []
      },
      {
        title: "今考えること",
        subtitle: "サブタイトルいらねぇな",
        src: require("../../assets/images/posts/post-2.png"),
        date: "20XX.2.2",
        summary:
          "今何を思うか。そう。それこそが、自分をしる第一歩である。自分の感情というものは、俯瞰してみないと冷静に判断できないことがある。例えば、相手に罵詈雑言を浴びせているときなどは、...",
        links: [],
        sections: []
      },
      {
        title: "今考えること",
        subtitle: "サブタイトルいらねぇな",
        src: require("../../assets/images/posts/post-3.jpg"),
        date: "20XX.2.2",
        summary:
          "今何を思うか。そう。それこそが、自分をしる第一歩である。自分の感情というものは、俯瞰してみないと冷静に判断できないことがある。例えば、相手に罵詈雑言を浴びせているときなどは、...",
        links: [],
        sections: []
      },
      {
        title: "今考えること",
        subtitle: "サブタイトルいらねぇな",
        src: require("../../assets/images/posts/post-4.jpg"),
        date: "20XX.2.2",
        summary:
          "今何を思うか。そう。それこそが、自分をしる第一歩である。自分の感情というものは、俯瞰してみないと冷静に判断できないことがある。例えば、相手に罵詈雑言を浴びせているときなどは、...",
        links: [],
        sections: []
      }
    ]
  })
};
</script>

<style scoped lang="scss">
.hhh {
  font-size: 65%;
}
</style>