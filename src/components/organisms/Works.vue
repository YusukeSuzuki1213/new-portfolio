<template>
  <section class="hhh">
    <h1 class="text-center font-weight-bold mb-3">Works</h1>
    <div class="works-list">
      <ArticleList :articles="works" isClicable="false" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Works",
  components: {
    ArticleList: () => import("~/components/molecules/ArticleList.vue")
  },
  data: () => ({
    works: [
      {
        title: "Smart bath",
        subtitle: "お風呂の全自動化システム",
        src: require("../../assets/images/works/work-1.png"),
        date: "20XX.2.2",
        summary:
          "お風呂設置されたマイクに話しかけると、自動でシャワーを出す、自動でシャンプーを出す、音楽を再生することができます。さらに、お風呂での水の使用料を計測しており、1日の水の使用料をLINEで通知してくれます。",
        links: [
          {
            name: "Youtube",
            icon: "fab fa-youtube",
            size: "20",
            url: "https://www.youtube.com/watch?v=9wnW4UtuwUI"
          },
          {
            name: "Site",
            icon: "fas fa-globe",
            size: "20",
            url: "https://www.inf.shizuoka.ac.jp/news/detail.html?CN=154175"
          }
        ],
        sections: [
          {
            title: "使用技術",
            list: ["Python", "Rasberry Pi 3", "IFTTT"]
          },
          {
            title: "受賞等",
            list: [
              "みんなのラズパイコンテスト2017 ラズベリーパイ財団賞",
              "2018年後期 静岡大学 学長表彰"
            ]
          }
        ]
      },
      {
        title: "Cool Snapper",
        subtitle: "カッコ良くページをめくる",
        src: require("../../assets/images/works/work-2.png"),
        date: "2018.2.2",
        summary: "",
        links: [
          {
            name: "Google Play",
            icon: "fab fa-android",
            size: "20",
            url:
              "https://play.google.com/store/apps/details?id=com.clipsoft.coolsnapper&hl=ja&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          }
        ],
        sections: [
          {
            title: "使用技術",
            list: ["Android", "Kotlin"]
          },
          {
            title: "説明等",
            list: [
              "Google Playでリリースしています",
              "アルバイトとして、有限会社クリップソフトにて設計から開発まで、1人で担当させていただきました"
            ]
          }
        ]
      },
      {
        title: "Fashion MNIST",
        subtitle: "衣服画像の分類",
        src: require("../../assets/images/works/work-3.png"),
        date: "2018.2.2",
        summary: "",
        links: [
          {
            name: "Github",
            icon: "fab fa-github",
            size: "20",
            url:
              "https://github.com/YusukeSuzuki1213/fashion-MNIST/tree/d15f6c292e5d79ce8ff03aec0b41d3b916233d61"
          },
          {
            name: "Google Colaboratory",
            icon: "$vuetify.icons.iconGoogleColab",
            size: "22",
            url:
              "https://colab.research.google.com/github/YusukeSuzuki1213/fashion-MNIST/blob/master/Fashion-MNIST.ipynb"
          }
        ],
        sections: [
          {
            title: "使用技術",
            list: ["Python", "Keras", "Jupyter notebook"]
          },
          {
            title: "説明等",
            list: ["機械学習勉強会の資料として公開しました"]
          }
        ]
      },
      {
        title: "Portfolio Site",
        subtitle: "ポートフォリオサイト",
        src: require("../../assets/images/works/work-4.png"),
        date: "2018.2.2",
        summary: "",
        links: [
          {
            name: "Github",
            icon: "fab fa-github",
            size: "20",
            url: "https://github.com/YusukeSuzuki1213/portfolio"
          },
          {
            name: "Site",
            icon: "fas fa-globe",
            size: "20",
            url: "https://yusukesuzuki1213.github.io/portfolio/"
          }
        ],
        sections: [
          {
            title: "使用技術",
            list: ["Vue.js", "HTML/CSS"]
          },
          {
            title: "説明等",
            list: ["このポートフォリオサイトです"]
          }
        ]
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