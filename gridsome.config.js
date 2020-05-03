// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Portfolio',
  
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // 必須。GraphQL上で扱う型定義
        baseDir: './contents/posts', // 記事となるmarkdownファイルを置くディレクトリ
        pathPrefix: '/posts', // URLになるパス。必須ではない。
        template: './src/templates/Post.vue' // 記事ページのVueコンポーネントファイルの指定
      },
    }
  ],
  outputDir: "dist",
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/main.scss";'
      }
    }
  }
}
