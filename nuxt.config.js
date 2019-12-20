export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
   head: {
     title: 'Appeal Digital | Blog',
     meta: [
       { charset: 'utf-8' },
       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
       { hid: 'description', name: 'description', content: 'This is a sample blog with some responsivity, built in NuxtJS.' },
       { hid: 'title', name: 'title', content: 'Rio Karim | Web Developer' },
       { name: 'theme-color', content:'' },
       { name: 'msapplication-TileColor', content:'' },
       { name: 'msapplication-TileImage', content:'/ms-icon-144x144.png' }
     ],
     link: [
       { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favico/favicon-16x16.png' },
       { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favico/favicon-32x32.png' },
       { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favico/favicon-96x96.png' },
       { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favico/android-icon-192x192.png' },
       { rel: 'apple-touch-icon', type: 'image/png', sizes: '57x57', href: '/favico/apple-icon-57x57.png' },
       { rel: 'apple-touch-icon', type: 'image/png', sizes: '60x60', href: '/favico/apple-icon-60x60.png' },
       { rel: 'apple-touch-icon', type: 'image/png', sizes: '72x72', href: '/favico/apple-icon-72x72.png' },
       { rel: 'apple-touch-icon', type: 'image/png', sizes: '76x76', href: '/favico/apple-icon-76x76.png' },
       { rel: 'apple-touch-icon', type: 'image/png', sizes: '114x114', href: '/favico/apple-icon-114x114.png' },
       { rel: 'apple-touch-icon', type: 'image/png', sizes: '120x120', href: '/favico/apple-icon-120x120.png' },
       { rel: 'apple-touch-icon', type: 'image/png', sizes: '144x144', href: '/favico/apple-icon-144x144.png' },
       { rel: 'apple-touch-icon', type: 'image/png', sizes: '152x152', href: '/favico/apple-icon-152x152.png' },
       { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/favico/apple-icon-180x180.png' },
       { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'},
       { rel: 'manifest', href: '/favico/manifest.json' }
     ],
     script: []
   },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
     scss: ['@/layouts/variables.scss'],
     less: [],
     stylus: []
    },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
     extend(config, ctx) {
       // Run ESLint on save
       if (ctx.isDev && ctx.isClient) {
         config.module.rules.push({
           enforce: 'pre',
           test: /\.(js|vue)$/,
           loader: 'eslint-loader',
           exclude: /(node_modules)/,
           options: {
             fix: true
           }
         })
       }
     }
  }
}
