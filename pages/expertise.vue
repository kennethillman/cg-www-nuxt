<template>
  <div class="cg-page">
    <div class="cg-content">

        <slices :slices="slices" />

    </div>
  </div>
</template>



<script>

  export default {
    async asyncData({ $prismic, store, params, error }) {

      const document = await $prismic.api.getSingle('expertise')

      if (document) {

        if (document.data.body) {
          document.data.body.forEach( (el) => {

            if (el.slice_type === 'cg-hero'){
              let newHero = el.primary
              store.dispatch('setHero', newHero)
              // console.log('Ex -> ' , newHero)
            }

          })
        }

        return { doc: document.data, slices: document.data.body }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    }

  }

</script>
