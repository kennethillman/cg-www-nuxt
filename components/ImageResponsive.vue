<template>
  <picture class="cg-image-respnsive">

      <img
        :srcSet="image.desktop.url"
        :alt="image.alt"
      />
      <source
        v-if="image.mobile"
        :srcSet="image.mobile.url"
        media="(min-width: 300px)"
      />
      <source
        v-if="image.tablet"
        :srcSet="image.tablet"
        media="(min-width: 768px)"
      />
      <source
        v-if="image.desktop"
        :srcSet="image.desktop"
        media="(min-width: 1280px)"
      />

  </picture>
</template>

<script type="text/javascript">
  export default {
    props:{
      image: {
        type: Object
      }
    },
  }
</script>

<style lang="scss">

  .cg-image-respnsive {


    @media only screen and (min-width: 1024px) {

    }

  }

</style>
