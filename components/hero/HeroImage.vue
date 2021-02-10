<template>
  <div class="cg-hero-image"
      :style="{ backgroundImage: `url(${hero.background_image.url})` }">
  </div>

</template>

<script type="text/javascript">

  export default {
      props: ['hero']
    };

</script>

<style lang="scss">

  .cg-hero-image {
    position: absolute;
    background: red;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }

</style>



