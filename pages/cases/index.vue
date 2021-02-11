<template>
  <div class="cg-page page-cases">
    <div class="cg-content" style="padding-bottom: 60px;">

        <slices :slices="slices" />

    </div>
  </div>
</template>



<script>

  import lax from 'lax.js'

  export default {
    async asyncData({ $prismic, store, params, error }) {
      const document = await $prismic.api.getSingle('cases')

      if (document) {
          if (document.data.body) {
          document.data.body.forEach( (el) => {

            if (el.slice_type === 'cg-hero'){
              let newHero = el.primary
              store.dispatch('setHero', newHero)
              //console.log('hello -> ' , newHero)
            }

          })
        }
        return { document, slices: document.data.body }
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
  .page-cases {

  }
</style>
