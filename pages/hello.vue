<template>
  <div class="cg-page">
    <div class="cg-content" style="height: 200vh">

        <prismic-rich-text :field="doc.header" />

        <slices :slices="slices" />

    </div>
  </div>
</template>



<script>

  export default {
    async asyncData({ $prismic, params, error }) {
      const document = await $prismic.api.getSingle('hello')

      if (document) {
        return { doc: document.data, slices: document.data.body }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
    transition: "default",

  }

</script>
