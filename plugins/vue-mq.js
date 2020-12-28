import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    VP320: 320,
    VP600: 600,
    VP1280: 1280,

  },
  defaultBreakpoint: 'VP320' // customize this for SSR
})
