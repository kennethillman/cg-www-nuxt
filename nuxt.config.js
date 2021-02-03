export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cg-www-nuxt',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv':'X-UA-Compatible', content:'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Prata&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@800;900&display=swap'
      }
    ]
  },

   // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/global/index.scss'
  ],


  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-mq',
    { src: "~/plugins/lax.js", mode: 'client'},
    { src: "~/plugins/vue-waypoint.client.js", mode: 'client'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/prismic',
    '@nuxtjs/style-resources',
    'nuxt-animejs'
  ],

  prismic: {
    endpoint: 'https://lab-cg-www-nuxt.cdn.prismic.io/api/v2',
    preview: '/preview/' // because we use nuxt generate
  },

  styleResources: {
    scss: [
      '~/assets/scss/component-imports/*.scss'
    ]
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

    extend(config, ctx) {
      config.node = {
        fs: 'empty',
        path: 'empty',
      }
      config.resolve.alias['vue'] = 'vue/dist/vue.common';
    }

  },
  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }
}
