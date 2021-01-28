<template>
  <picture class="cg-image-respnsive">

      <img
        :srcSet="image.desktop.url"
        :alt="image.alt"
      />
      <source
        :srcSet="image.mobile.url"
        media="(min-width: 300px)"
      />
      <source
        :srcSet="image.tablet"
        media="(min-width: 768px)"
      />
      <source
        :srcSet="image.desktop"
        media="(min-width: 1280px)"
      />

  </picture>
</template>

<script type="text/javascript">
  export default {
    props:{
      image: {
        type: String
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
