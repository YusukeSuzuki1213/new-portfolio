<template>
  <Layout>
    <div class="main">
      <div class="anim-wrap" id="wrap">
        <div class="anim-wrap__box" id="box">
          <button @click="start" id="button-start">start</button>
          <h2 class="anim-wrap__box__title" id="title">かれんビー 其ノ貳</h2>
          <div class="anim-wrap__box__sentence">上の</div>
          <div class="anim-wrap__box__sentence">阿良々木火憐</div>
          <div class="anim-wrap__box__sentence">小学生の頃から、髪型はおおむね、ポニーテーイルで通している。</div>
          <div
            class="anim-wrap__box__sentence"
          >実を言うと一度だけ、確か中学校に入学したばかりのころだったか、彼女は髪を染めたことがあるらしい--なんかのアニメのキャラみたいな、とでもひょうげんすべきなのだろうか、とにかく目もくらむようなショッキングピンクの髪色に仕上げたらしいのだ。どういうつもりだったのかは未だに不明だが、まあ当然の帰結として、母親に顔面をぶん殴られて(母の名誉のために言っておくが、温厚な母が娘に手を上げたのは、それが今のところ最初で最後である)、その日の夜には黒に戻された(しかも墨汁で)。</div>
          <div
            class="anim-wrap__box__sentence"
          >しかし、そんな度を外した中学デビューを果たそうとしたカレンが、果たしてどのような性格をしているかは、これ以上語るまでもないのだろう。</div>
          <div class="anim-wrap__box__sentence">造形は、ありていに言って可愛くない。</div>
          <div class="anim-wrap__box__sentence">むしろ格好いい。</div>
          <div class="anim-wrap__box__sentence">なまじ火憐は格闘技に手を出しているので、すごく姿勢がいいのだった。</div>
          <div class="anim-wrap__box__sentence">なまじ火sに中学デビューを果るので、のだった。</div>
          <div class="anim-wrap__box__sentence">な手彼女は髪を染めたこで、すごく姿勢がいいのだったかりのころだったか、彼女は。</div>
          <div class="anim-wrap__box__sentence">ね、ポニーテーイルでいいのだった。きなのだろうか、とにかく目もくらむようなショッキングピンクの髪色に仕上</div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@ss1ua2zt1us3uki" },
        {
          property: "og:url",
          content: "https://yusuke-suzuki.netlify.app" + this.$route.path
        },
        { property: "og:title", content: "Yusuke's portfolio" },
        { property: "og:description", content: "Topページ" },
        {
          property: "og:image",
          content:
            "https://yusuke-suzuki.netlify.app" +
            require(`!!assets-loader!@assets-images/my-icon.jpeg`).src
        }
      ]
    };
  },
  methods: {
    start() {
      this.changeColor();
      this.frameAnimation();
      this.charAnimation(this.charAnimationCore);
    },

    changeColor() {
      const element = document.getElementById("box");
      element.style.background = "#656490";
      element.style.color = "#d5d6f0";

      document.getElementById("title").style.visibility = "visible";
    },

    frameAnimation() {
      const OFFSET_SPAN = 6;
      const TRANS_PX = 5;

      const element = document.getElementById("box");
      const transList = [
        { x: "0", y: "0" },
        { x: `-${TRANS_PX}`, y: `-${TRANS_PX}` },
        { x: `${TRANS_PX}`, y: `${TRANS_PX}` },
        { x: `${TRANS_PX}`, y: `-${TRANS_PX}` },
        { x: `-${TRANS_PX}`, y: `${TRANS_PX}` },
        { x: `${TRANS_PX}`, y: `${TRANS_PX}` },
        { x: `-${TRANS_PX}`, y: `-${TRANS_PX}` }
      ];

      let animationList = [];

      for (let [index, obj] of transList.entries()) {
        animationList.push({
          offset: index / OFFSET_SPAN,
          transform: `translate(${obj.x}px, ${obj.y}px)`
        });
      }

      element.animate(animationList, {
        delay: 0,
        duration: 200,
        fill: "forwards",
        easing: "ease-in"
      });
    },

    charAnimation(animation) {
      /* 1文字ずつspanタグで囲む */
      Array.from(
        document.getElementsByClassName("anim-wrap__box__sentence")
      ).forEach(elem => {
        elem.innerHTML = Array.from(elem.textContent)
          .map(
            char =>
              '<span class="anim-wrap__box__sentence--char" style="display: inline-block">' +
              char +
              "</span>"
          )
          .join("");
      });

      setTimeout(() => {
        /* 1文字に対してアニメーションをさせる */
        const element = Array.from(
          document.getElementsByClassName("anim-wrap__box__sentence--char")
        );
        element.forEach((elem, index) => {
          animation(elem, index);
        });
      }, 400);
    },

    charAnimationCore(elem, index) {
      // 2次関数ある点のy座標を計算　y = a(x - p)^2 + q
      let quadraticFuncCoordY = (x, gradient, vertexX, vertexY) =>
        gradient * (x - vertexX) ** 2 + vertexY;
      // 2次関数の変化の割合を計算 a = (y-q)/(x-q)^2
      let calcGradient = (vertexX, vertexY, coordX, coordY) =>
        (coordY - vertexY) / (coordX - vertexX) ** 2;
      // 2次関数の頂点のY座標を計算 q = y - a(x - p)^2
      let calcVertexY = (y, gradient, x, vertexX) =>
        y - gradient * (x - vertexX) ** 2;
      // lower〜upperまでのランダムな整数を返す
      let calcRandomValueFromRange = (lower, upper) =>
        Math.floor(Math.random() * (upper - lower)) + lower;
      // ある値Xの+_N%の範囲でランダムな数字を返す。
      // e.g. X=10, N=50% -> 5〜15の間のランダムな数字を返す
      let calcRandomValueFromValueAndRate = (value, rate) =>
        Math.floor(Math.random() * value) + value * rate;

      // 画面のサイズ
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // 頂点の座標
      const vertexX = -windowWidth;
      const vertexY = 2 * windowHeight;

      // 頂点が(vertexX, vertexY)で、座標(0, 3/2*windowYFromRight)を通る2次関数の傾きを求める
      const gradient = calcGradient(vertexX, vertexY, 0, 1.5 * windowHeight);

      // アニメーションの終わりの座標
      const goalX = windowWidth * 2;

      //この文字の, 画面左からの座標取得
      const coordXFromLeftTopPx = elem.getBoundingClientRect().left;
      const coordYFromLeftTopPx = elem.getBoundingClientRect().top;

      //この文字の座標を通る2次関数の頂点のY座標
      const currentVertexY = calcVertexY(
        coordYFromLeftTopPx,
        gradient,
        coordXFromLeftTopPx,
        vertexX
      );

      // 文字のアニメーションの始動タイミングをランダムに
      const delay = Math.floor(Math.random() * 700) + 300 - index;
      // 文字の場所に応じてスピードを変える
      /* const speed =
        (coordYFromLeftTopPx ** 2 + (windowWidth - coordXFromLeftTopPx) ** 2) *
        0.0001; */

      // ある文字の移動距離
      const translateX = goalX - coordXFromLeftTopPx;
      const translateY =
        quadraticFuncCoordY(goalX, gradient, vertexX, currentVertexY) -
        coordYFromLeftTopPx;

      let degValueOld = 0;
      const SPAN_OFFSET = 8;
      let animateList = [];

      for (let i = 0; i < SPAN_OFFSET + 1; i++) {
        const rate = i / SPAN_OFFSET;
        const degValue = i == 0 ? 0 : calcRandomValueFromRange(45, 180);
        const transX = calcRandomValueFromValueAndRate(translateX * rate, 0.95);
        const transY = calcRandomValueFromValueAndRate(translateY * rate, 0.95);
        animateList.push({
          offset: rate,
          transform: `translate(${transX}px, ${transY}px) rotate(-${degValueOld +
            degValue}deg)`
        });
        degValueOld += degValue;
      }

      elem.animate(animateList, {
        delay: delay,
        duration: 2400,
        fill: "forwards",
        easing: "ease-in-out"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.anim-wrap {
  height: 100vh;
  width: 100%;
  &__box {
    position: relative;
    width: 100%;
    color: #e89eb8;
    background: #fbf5f8;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    padding: 50px 0px;
    overflow: hidden;
    &__title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
      writing-mode: horizontal-tb;
      font-size: 4rem;
      letter-spacing: 4rem;
      visibility: hidden;
    }
    &__sentence {
      font-size: 1.6rem;
      line-height: 2;
      margin-left: 20px;
    }
  }
}

#button-start {
  position: absolute;
}
</style>
