<template>
  <div class="cg-page page-page">
    <div class="cg-content">


        <section class="cg-">
          <div class="case-content-width">
            <div>
              <h1>Header 1 (tag)</h1>
              <h2>Header 2 (tag)</h2>
              <h3>Header 3 (tag)</h3>
              <h4>Header 4 (tag)</h4>
              <h5>Header 5 (tag)</h5>
              <h6>Header 6 (tag)</h6>

              <p>Lorum ipsum</p>
              Lorum

              <div class="h1">Header 1 (class)</div>
              <div class="h2">Header 2 (class)</div>
              <div class="h3">Header 3 (class)</div>
              <div class="h4">Header 4 (class)</div>
              <div class="h5">Header 5 (class)</div>
              <div class="h6">Header 6 (class)</div>

            </div>
          </div>
        </section>

        <section class="cg-edt-content">
          <div class="case-content-width">
            <div>
                <p>Machina should all be the same to save code overrides and wierd css attribute combos! </p>
                <h3 class="-machina">Machina (Normal/Normal)</h3>
                <h3 class="-machina -italic">Machina (Normal/Italic)</h3>
                <h3 class="-machina -bold">Machina (Bold/Normal)</h3>
                <h3 class="-machina -bold -italic">Machina (Bold/Italic)</h3>
                <br>
                <br>
                <p>Sang Blue Empire should chnage accordingly! </p>
                <h3 class="-sangblue">SangBlue (Normal/Normal)</h3>
                <h3 class="-sangblue -italic">SangBlue (Normal/Italic)</h3>
                <h3 class="-sangblue -bold">SangBlue (Bold/Normal)</h3>

                <h3 class="-sangblue -bold -italic">SangBlue (Bold/Italic)</h3>
                <h3 class="-sangblue -black">SangBlue (Black/Normal)</h3>
                <h3 class="-sangblue -black -italic">SangBlue (Black/Italic)</h3>

            </div>
          </div>
        </section>

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
    },
    layout: 'clean',

  }

</script>

<style lang="scss">

  .page-page {
    position: relative;
    z-index: 100;


    @media only screen and (min-width: 1280px) {
      // margin-top: -300px;
    }

  }

</style>
