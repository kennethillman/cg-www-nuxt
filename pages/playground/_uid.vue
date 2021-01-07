<template>
  <div class="cg-page">
    <div class="cg-content" style="height: 200vh">


       <prismic-rich-text :field="document.data.header" />


    </div>
  </div>
</template>



<script>

  export default {
    async asyncData({ $prismic, params, error }) {
      const document = await $prismic.api.getByUID('play', params.uid)

      if (document) {
        return { document }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    }

  }

</script>
