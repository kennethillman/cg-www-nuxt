<template>
  <div class="cg-page page-hello">
    <div class="cg-content">

     <TextSplit
        v-waypoint="{ active: true, callback: triggerFade }"
        text="PEOPLE"
        split="3"
        class="-text-yellow -text-right -animate-fade-in-up"
      />

      <slices :slices="slices" />

    </div>
  </div>
</template>



<script>

  export default {
    async asyncData({ $prismic, store, params, error }) {

      const document = await $prismic.api.getSingle('hello')

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
        return { doc: document.data, slices: document.data.body }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
    methods: {
      triggerFade({ el, going, direction }) {
        if (this.$waypointMap.GOING_IN === going) {
          el.classList.add('-animate')
         }
      },
    }

  }

</script>

<style lang="scss">

.page-hello {
  position: relative;
  .cg-content {
    margin-top: -160px;
    position: relative;
    width: 80vw;
  }
  .cg-text-split {
    position: absolute;
    right: 0;
    top: -56px;
    font-size: 76px;
  }
}


// 480

  @media only screen and (min-width: 480px) {
    .page-hello {

      .cg-content {
        margin-top: -200px;
      }

      .cg-text-split {
        font-size: 96px;
      }

    }
  }

  // 768

  @media only screen and (min-width: 768px) {
    .page-hello {
      .cg-text-split {
        font-size: 116px;
      }

    }
  }



  // 1024

  @media only screen and (min-width: 1024px) {
     .page-hello {

      .cg-content {
        margin-top: -320px;
      }
        .cg-text-split {
          top: 80px;
          font-size: 136px;
        }
    }
  }

  // 1280

  @media only screen and (min-width: 1280px) {
     .page-hello {

      .cg-content {
        margin-top: -400px;
      }
    }
  }


.cg-hero {
}

.cg-person {
    position: relative;
    z-index: 10;
}

</style>
