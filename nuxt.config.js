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
    { src: "~/plugins/vue-waypoint.client.js", mode: 'client'},
    { src: "~/plugins/vue-check-view.client.js", mode: 'client'}
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
    endpoint: 'https://lab-cg-www-nuxt.cdn.prismic.io/api/v2'
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

    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
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
