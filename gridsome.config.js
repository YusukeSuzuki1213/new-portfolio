// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Portfolio',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './uploads/posts/**/*.md',
        resolveAbsolutePaths: true,
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'WorkPost',
        path: './uploads/works/**/*.md',
        resolveAbsolutePaths: true,
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,        
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-168079057-1'
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
  },
  chainWebpack(config) {
    config.resolve.alias.set(`@upload-images`, `@/../uploads/images`)
    config.resolve.alias.set(`@assets-images`, `@/../src/assets/images`)
  },
}
