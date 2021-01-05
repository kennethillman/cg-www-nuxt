<template>
  <div class="cg-page">
    <div class="cg-content" style="height: 200vh">

        <prismic-rich-text :field="document.data.header" />

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

        return { document }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    }

  }

</script>
