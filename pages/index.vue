<template>
  <div class="cg-page page-startpage">

    <div class="cg-content">

      <slices :slices="slices" />

    </div>

  </div>
</template>

<script type="text/javascript">

  import lax from 'lax.js'

  export default {
    head() {
      let meta = []
      let title, description, keywords, robots

      // Title
      if (this.doc.seo_title.length > 0 && this.doc.seo_title[0].text !== '') {
        // Local
        title = this.doc.seo_title[0].text
      } else {
        // Global
        title = this.$store.state.theSettings.seo_title[0].text
      }

      // Meta Description
      if (this.doc.seo_description.length > 0 && this.doc.seo_description[0].text !== '') {
        // Local
        description = this.doc.seo_description[0].text
      } else {
        // Global
        description = this.$store.state.theSettings.seo_description[0].text
      }

      // Meta keywords
      if (this.doc.seo_keywords.length > 0 && this.doc.seo_keywords[0].text !== '') {
        // Local
        keywords = this.doc.seo_keywords[0].text
      } else {
        // Global
        keywords = this.$store.state.theSettings.seo_keywords[0].text
      }

      // Meta Robots
      if (this.doc.seo_robots.length > 0 && this.doc.seo_robots[0].text !== '') {
        // Local
        robots = this.doc.seo_robots[0].text
      } else {
        // Global
        robots = this.$store.state.theSettings.seo_robots[0].text
      }


      meta = [
        { hid: 'description', name: 'description', content: description},
        { hid: 'keywords', name: 'keywords', content: keywords },
        { hid: 'robots', name: 'robots', content: robots },
      ]

      return {
        title: title,
        meta: meta,
      }

    },
    async asyncData({ $prismic, store, params, error }) {
      const document = await $prismic.api.getSingle('start')

      if (document) {
        if (document.data.body) {
          document.data.body.forEach( (el) => {

            if (el.slice_type === 'cg-hero'){
              let newHero = el.primary
              store.dispatch('setHero', newHero)
              // console.log('index -> ' , newHero)
            }

          })
        }

        return { doc: document.data, slices: document.data.body  }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },

    methods: {

      animeTrigger ({ el, going, direction }) {

        el.classList.toggle('active', this.$waypointMap.GOING_IN === going)
        const anime = this.$anime;

        anime({
          targets: '.epic svg path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 8000,
          direction: 'alternate',
          loop: true
        });

      },




    },
    mounted() {

      lax.init()

      // Add a driver that we use to control our animations
      lax.addDriver('scrollY', function () {
        return window.scrollY
      })

      // Add animation bindings to elements
      lax.addElements('.lax-svg', {
        scrollY: {
           translateY: [           // CSS property
              ['elInY', 'elOutY'],  // Driver value map
              [0, 60],   // Animation value map

            ],
        }
      })

      // Add animation bindings to elements
      lax.addElements('.lax-svg-2', {
        scrollY: {
           translateY: [           // CSS property
              ['elInY', 'elOutY'],  // Driver value map
              [0, -100],   // Animation value map

            ],
        }
      })

    },
  }
</script>

<style lang="scss">



</style>
