import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    VP320: 320,
    VP600: 600,
    VP768: 768,
    VP1024: 1024,
    VP1280: Infinity,
  },
  defaultBreakpoint: 'VP320' // customize this for SSR
})
