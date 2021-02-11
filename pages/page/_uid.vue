<template>
  <div class="cg-page page-page">
    <div class="cg-content">
       <slices :slices="slices" />
    </div>
  </div>
</template>

<script>

  export default {
    async asyncData({ $prismic, store, params, error }) {
      const document = await $prismic.api.getByUID('page', params.uid)

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
    }

  }

</script>

<style lang="scss">

  .page-page {
    position: relative;
    z-index: 100;


    @media only screen and (min-width: 1280px) {
      margin-top: -300px;
    }

  }

</style>
