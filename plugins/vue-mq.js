import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    bp320: 320,
    bp480: 480,
    bp600: 600,
    bp768: 768,
    bp1024: 1024,
    bp1280: 1280,
    bp1440: 1440,
    bp1680: 1680,
    bp1920: 1920,
    bp2600: 2600,
  },
  defaultBreakpoint: 'bp320' // customize this for SSR
})
