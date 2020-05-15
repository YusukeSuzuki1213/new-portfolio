// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Portfolio',
  
  plugins: [
    /* {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // 必須。GrahQL上で扱う型定義
        baseDir: './contents/posts', // 記事となるmarkdownファイルを置くディレクトリ
        pathPrefix: '/posts', // URLになるパス。必須ではない。
        template: './src/templates/BlogPost.vue', // 記事ページのVueコンポーネントファイルの指定
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          anchorClassName: 'icon icon-link',
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Work',
        baseDir: './contents/works',
        pathPrefix: '/works',
        template: './src/templates/WorkPost.vue'
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin'
      }
    } */    
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/posts/**/*.md',
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'WorkPost',
        path: './content/works/**/*.md',
        //baseDir: './contents/works',
        //pathPrefix: '/works',
        //template: './src/templates/WorkPost.vue'
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  outputDir: "dist",
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/index.scss";'
      }
    }
  }
}
