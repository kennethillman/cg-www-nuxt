<template>
  <div class="cg-hero"
    v-if="compHero"
    :class="[{'-curtain' : compHero.curtain === 'yes', '-play' : compHero.background_color === '#000000'}]"
    :style="[compHero.background_color ? {'background': compHero.background_color} : {'background': '#004A84'}]"
  >

      <div class="body">

        <!-- HEADERS -->
        <HeroHeader :text="compHero" :key="rerender" />

        <!-- TEXT -->
        <HeroText :hero="compHero" :key="rerender + 1" />

        <!-- CURVE -->
        <HeroCurveBottom />

        <!-- ZEBRA -->
        <HeroZebra :hero="compHero"/>

        <!-- SVG -->
        <HeroSvg v-if="compHero.svg_graphic !== 'none' "/>

        <!-- IMAGE -->
        <HeroImage v-if="compHero.background_image.url"/>

      </div>

  </div>
</template>

<script type="text/javascript">
   export default {

      data() {
        return {
          hero: this.$store.getters.getHero,
          rerender: 1
        }
      },

      computed: {
        compHero () {
          this.rerender ++
          return this.$store.getters.getHero
        }
      },
      methods: {

      },
      mounted() {

      }
    };
</script>

<style lang="scss">
  .cg-hero {
    display: flex;
    background: $blue;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;
    overflow: hidden;

    .body {
      padding-bottom: 308px;
      width: 90vw;
      max-width: 1080px;
    }

    &.-curtain {
      figure {
        transform: translateY(0);
      }
    }

    // &.-play {
    //   figure {
    //     &:after {
    //       background: #000;
    //     }
    //     svg {
    //       fill: #000;
    //     }
    //   }
    // }

    figure {
      position: absolute;
      bottom: 308px;
      left: 0;
      width: 100vw;
      transition: all .5s ease;
      height: 100%;
      transform: translateY(100%);

        &:after {
          content: '';
          top: 308px;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #fff;
          position: absolute;
          z-index: 1;
          transition: all 1s ease;
        }

        svg {
          transition: fill 1s ease;
          fill: #fff;
          width: 110vw;
          transform: translate(-5vw , 40%);
        }
      }





  }
</style>



