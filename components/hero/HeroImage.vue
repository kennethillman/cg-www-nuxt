<template>

  <div class="cg-hero-image">
    <template v-if="screen.ratio === 'landscape'">
        <div
          v-if="hero.background_image"

          :style="{ backgroundImage: `url(${hero.background_image.url})` }">
        </div>
    </template>
      <template v-if="screen.ratio === 'portrait'">
        <div
          v-if="hero.background_image_vertical"
          class="cg-hero-image"
          :style="{ backgroundImage: `url(${hero.background_image_vertical.url})` }">
        </div>
    </template>
  </div>

</template>

<script type="text/javascript">

  export default {
      props: ['hero'],
      data() {
        return {
          screen: {
            ratio: 0
          }
        }
      },
      mounted() {
        this.screen.ratio = window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait'
        window.addEventListener('resize', () => {
          this.screen.ratio = window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait'
        })
      },
      beforeDestroy() {
        window.removeEventListener('resize');
      },
  };

</script>

<style lang="scss">
  .cg-hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    > div {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
    }
  }
</style>



