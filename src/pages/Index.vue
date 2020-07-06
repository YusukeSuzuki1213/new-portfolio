<template>
  <Layout>
    <div class="main-wrap">
      <div class="anim-wrap" id="wrap">
        <div class="anim-wrap__box" id="box">
          <div class="anim-wrap__box__title" id="title">かれんビー 其ノ貳</div>
          <div class="anim-wrap__box__sentence">　桜の花が咲くと人々は酒をぶらさげたり団子だんごをたべて花の下を歩いて絶景だの春ランマンだのと浮かれて陽気になりますが、これは嘘です。なぜ嘘かと申しますと、桜の花の下へ人がより集って酔っ払ってゲロを吐いて喧嘩けんかして、これは江戸時代からの話で、大昔は桜の花の下は怖しいと思っても、絶景だなどとは誰も思いませんでした。近頃は桜の花の下といえば人間がより集って酒をのんで喧嘩していますから陽気でにぎやかだと思いこんでいますが、桜の花の下から人間を取り去ると怖ろしい景色になりますので、能にも、さる母親が愛児を人さらいにさらわれて子供を探して発狂して桜の花の満開の林の下へ来かかり見渡す花びらの陰に子供の幻を描いて狂い死して花びらに埋まってしまう（このところ小生の蛇足だそく）という話もあり、桜の林の花の下に人の姿がなければ怖しいばかりです。</div>
          <div class="anim-wrap__box__sentence">　昔、鈴鹿峠にも旅人が桜の森の花の下を通らなければならないような道になっていました。花の咲かない頃はよろしいのですが、花の季節になると、旅人はみんな森の花の下で気が変になりました。できるだけ早く花の下から逃げようと思って、青い木や枯れ木のある方へ一目散に走りだしたものです。一人だとまだよいので、なぜかというと、花の下を一目散に逃げて、あたりまえの木の下へくるとホッとしてヤレヤレと思って、すむからですが、二人連は都合が悪い。なぜなら人間の足の早さは各人各様で、一人が遅れますから、オイ待ってくれ、後から必死に叫んでも、みんな気違いで、友達をすてて走ります。それで鈴鹿峠の桜の森の花の下を通過したとたんに今迄仲のよかった旅人が仲が悪くなり、相手の友情を信用しなくなります。そんなことから旅人も自然に桜の森の下を通らないで、わざわざ遠まわりの別の山道を歩くようになり、やがて桜の森は街道を外はずれて人の子一人通らない山の静寂へとり残されてしまいました。</div>
          <div class="anim-wrap__box__sentence">　そうなって何年かあとに、この山に一人の山賊が住みはじめましたが、この山賊はずいぶんむごたらしい男で、街道へでて情容赦なく着物をはぎ人の命も断ちましたが、こんな男でも桜の森の花の下へくるとやっぱり怖しくなって気が変になりました。そこで山賊はそれ以来花がきらいで、花というものは怖しいものだな、なんだか厭なものだ、そういう風に腹の中では呟つぶやいていました。花の下では風がないのにゴウゴウ風が鳴っているような気がしました。そのくせ風がちっともなく、一つも物音がありません。自分の姿と跫音あしおとばかりで、それがひっそり冷めたいそして動かない風の中につつまれていました。花びらがぽそぽそ散るように魂が散っていのちがだんだん衰えて行くように思われます。それで目をつぶって何か叫んで逃げたくなりますが、目をつぶると桜の木にぶつかるので目をつぶるわけにも行きませんから、一そう気違いになるのでした。</div>
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
  async mounted() {
    this.removeSentence();

    await this.$delay(1500);

    this.changeColor();
    this.frameAnimation();
    this.charAnimation(this.charAnimationCore);
  },
  methods: {
    /*
      box外からはみ出ているsentenceは削除
    */
    removeSentence() {
      const boxElement = document.getElementById("box");

      Array.from(
        document.getElementsByClassName("anim-wrap__box__sentence")
      ).forEach(elem => {
        if (
          boxElement.getBoundingClientRect().left >
          elem.getBoundingClientRect().left + 4
        ) {
          elem.remove();
        }
      });
    },

    changeColor() {
      const wrapElement = document.getElementById("wrap");
      wrapElement.style.background = "#656490";

      const boxElement = document.getElementById("box");
      boxElement.style.color = "#d5d6f0";

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
              `<span class="anim-wrap__box__sentence--char" style="display: inline-block">${char}</span>`
          )
          .join("");
      });

      setTimeout(() => {
        /* 1文字に対してアニメーションをさせる */
        const charElement = Array.from(
          document.getElementsByClassName("anim-wrap__box__sentence--char")
        );

        charElement.forEach((elem, index) => {
          animation(elem, index);
        });
      }, 300);
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
        duration: 2200,
        fill: "forwards",
        easing: "ease-in-out"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.main-wrap {
  position: relative;
  top: 56px;
  height: calc(100% - 56px);
  background: #fbf5f8;
  overflow: hidden;
}
.anim-wrap {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  &__box {
    font-family: 'Noto Serif JP', serif;
    position: relative;
    width: 85%;
    height: 85%;
    color: #e89eb8;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    clip-path: inset(-100vw -100vw -100vw 0);
    @include sp() {
      width: 90%;
      height: 90%;
    }
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
      font-size: 3rem;
      letter-spacing: 3rem;
      visibility: hidden;
      font-weight: 600;
      @include tablet() {
        font-size: 2.2rem;
        letter-spacing: 2rem;
      }
      @include sp() {
        font-size: 1.1rem;
        letter-spacing: 0.8rem;
      }
    }
    &__sentence {
      font-weight: 200;
      font-size: 1.5rem;
      line-height: 2;
      margin-left: 1rem;
      @include sp() {
        font-size: 0.9rem;
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
