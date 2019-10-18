module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-pro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient },cxt) {
      const sassResourcesLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: ['assets/style/theme.less', 'assets/style/mixins.less']
        }
      }
      config.module.rules.forEach(rule => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.less.push(sassResourcesLoader)
        }
        if (rule.test.toString() === '/\\.less$/') {
          rule.use.push(sassResourcesLoader)
        }
      })
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor:['element-ui']
  },
  
  plugins: [{
    src: '~plugins/element-ui',
    ssr: true,
  }],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'static/css/component.css',
    'static/boostrap/css/bootstrap.min.css'
  ],
  js:[]
}

