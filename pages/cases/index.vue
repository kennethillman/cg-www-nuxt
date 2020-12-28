<template>
  <div class="cg-page">
    <div class="cg-content" style="height: 200vh">

        <prismic-rich-text :field="cases.data.header" />

    </div>
  </div>
</template>



<script>

  export default {
    async asyncData({ $prismic, params, error }) {
      const cases = await $prismic.api.getSingle('cases')

      if (cases) {
        return { cases }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    }

  }

</script>
