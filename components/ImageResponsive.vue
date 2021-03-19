<template>
  <picture class="cg-image-respnsive" :class="[ratio]">

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
        :srcSet="image.tablet.url"
        media="(min-width: 768px)"
      />
      <source
        v-if="image.desktop"
        :srcSet="image.desktop.url"
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
    data (){
      return {
        ratio: this.image.dimensions.width > this.image.dimensions.height ? '-landscape' : '-portrait',
      }
    }
  }
</script>

<style lang="scss">

  .cg-image-respnsive {


    @media only screen and (min-width: 1024px) {

    }

  }

</style>
