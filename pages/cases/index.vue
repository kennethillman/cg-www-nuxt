<template>
  <div class="cg-page page-cases">
    <div class="cg-content -negative">
      <slices :slices="slices" />
    </div>
  </div>
</template>


<script>

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
      const document = await $prismic.api.getSingle('cases')

      if (document) {
          if (document.data.body) {
          document.data.body.forEach( (el) => {

            if (el.slice_type === 'cg-hero'){
              let newHero = el.primary
              store.dispatch('setHero', newHero)
            }

          })
        }
        return { doc: document.data, slices: document.data.body }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
    mounted() {

      if (this.$mq === 'VP768' || this.$mq === 'VP1024' || this.$mq === 'VP1280') {

        lax.init()

        // Add a driver that we use to control our animations
        lax.addDriver('scrollY', function () {
          return window.scrollY
        })

        // Add animation bindings to elements
        lax.addElements('.lax-image', {
          scrollY: {
             translateY: [           // CSS property
                ['elInY', 'elOutY'],  // Driver value map
                [0, 120],   // Animation value map

              ],
          }
        })

         // Add animation bindings to elements
        lax.addElements('.lax-box', {
          scrollY: {
             translateY: [           // CSS property
                ['elInY', 'elOutY'],  // Driver value map
                [0, 70],   // Animation value map

              ],
          }
        })

      }



    }

  }

</script>

<style lang="scss">
  .cg-page.page-cases {

    padding: 0 0 $mmx2;

    .cg-margin {
      margin: $mmCases  0;
    }

    // 768
    @media only screen and (min-width: 768px) {
      padding: 0 0 $mtx2;

      .cg-margin {
        margin: $mtCases  0;
      }

    }

    // 1280
    @media only screen and (min-width: 1280px) {
      padding: 0 0 $mdx2;

      .cg-margin {
        margin: $mdCases 0;
      }

    }

  }
</style>
