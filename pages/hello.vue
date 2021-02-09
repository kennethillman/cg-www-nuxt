<template>
  <div class="cg-page page-hello">
    <div class="cg-content">

      <TextSplit
            v-waypoint="{ active: true, callback: triggerFade }"
            text="PEO"
            split="PLE"
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

  }

</script>

<style lang="scss">

.page-hello {
  position: relative;
}

.cg-content {
  position: relative;
}

.cg-hero {
    margin-bottom: -128px;
}

.cg-person {
    position: relative;
    z-index: 10;
}

</style>
