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

            if (el.slice_type === 'test'){

              let newHero = {
                h1: el.primary.header1[0].text,
                h2: el.primary.header2[0].text,
                txt: el.primary.text1[0].text,
                color: null,
                image: null,
                svg: null,
                pattern: null
              }

              store.dispatch('setHero', newHero)

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
