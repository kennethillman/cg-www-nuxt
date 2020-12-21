<template>
  <div class="cg-page">

    <div class="cg-content" style="height: 200vh; position:relative">  {{document.data.header[0].text}} <br>

      <TextSplit text="Expertise" split="5" />
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <TextSplit text="Used by millions" split="11" position="right" />

    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
      async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getSingle('start')

    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
    methods: {

    },
    mounted() {

    },
  }
</script>

<style lang="scss">
  .cg-content {
    width: 90vw;
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
