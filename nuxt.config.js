export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DEV | Common Ground - UX Design Studio',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv':'X-UA-Compatible', content:'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Common Ground is a UX design studio based in Stockholm, Sweden.  The Common Ground toolbox holds research, strategy, design, user testing, prototyping and visual design.' },
      { hid: 'keywords', name: 'keywords', content: 'Common Ground, UX, Design studio' },
      { hid: 'robots', name: 'robots', content: 'index, follow '}
    ],
    link: [
      { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

   // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/global/index.scss',
    'hooper/dist/hooper.css'
  ],


  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-mq',
    '~/plugins/hopper',
    { src: "~/plugins/lax.js", mode: 'client'},
    { src: "~/plugins/vue-waypoint.client.js", mode: 'client'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // '@nuxtjs/google-analytics',
    '@nuxtjs/prismic',
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
    'nuxt-animejs'
  ],

  // googleAnalytics: {
  //   id: 'UA-74774637-1'
  // },

  prismic: {
    endpoint: 'https://lab-cg-www-nuxt.cdn.prismic.io/api/v2',
    preview: '/preview/' // because we use nuxt generate
  },

  styleResources: {
    scss: [
      '~/assets/scss/component-imports/*.scss'
    ]
  },

  robots: {
    UserAgent: '*',
    Disallow: ['/playground', 'prismic-all-dynamic-routes'],
  },

  // Anime - Add global page transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    // --- ENTER ---
    beforeEnter(el) {
       //console.log('before-enter')
      this.$anime.set(el, {
        opacity: 0
      })
      this.$store.dispatch('setClassAnimation', '-tran-before-enter -tran-enter')
    },

    enter(el, done) {
      //console.log('enter')
      this.$store.dispatch('setClassAnimation', '-tran-enter')
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    },

    afterEnter(el, done) {
      //console.log('after-enter')
      this.$store.dispatch('setClassAnimation', '-tran-after-enter -tran-enter')
    },

    // --- LEAVE ---
    beforeLeave(el, done) {
      //console.log('before-leave')
      this.$store.dispatch('setClassAnimation', '-tran-before-leave -tran-leave')
    },

    leave(el, done) {

      // console.log('leave')
      this.$store.dispatch('setClassAnimation', '-tran-leave')

      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    },
    afterLeave(el, done) {
      // console.log('after-leave')
      this.$store.dispatch('setClassAnimation', '')
    },
  },

  // Modules (htts://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

    // Makes an external css file
    // extractCSS:  true, \

    extend(config, ctx) {
      config.node = {
        fs: 'empty',
        path: 'empty',
      }
      config.resolve.alias['vue'] = 'vue/dist/vue.common';
    }

  },
  generate: {
    fallback: true, // Netlify reads a 404.html, Nuxt will load as an SPA
  }
}
