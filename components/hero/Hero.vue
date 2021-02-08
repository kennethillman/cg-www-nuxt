<template>
  <div class="cg-hero"
    v-if="compHero"
    :class="[{
              '-curtain' : compHero.curtain === 'yes',
              '-play' : compHero.background_color === '#000000'
            }]"
    :style="[compHero.background_color ? {'background': compHero.background_color} : {'background': '#004A84'}]"
  >

      <div class="hero-body">

        <!-- HEADERS -->
        <HeroHeader :text="compHero" :key="rerender" />

        <!-- TEXT -->
        <HeroText :hero="compHero" :key="rerender + 1" />

        <!-- SVG -->
        <HeroSvg :graphic="compHero.svg_graphic"  v-if="compHero.svg_graphic !== 'none' "/>



      </div>

      <!-- IMAGE -->
      <HeroImage v-if="compHero.background_image.url"/>

      <!-- ZEBRA -->
      <HeroZebra :hero="compHero"/>

      <!-- CURVE -->
      <HeroCurveBottom />

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
    min-height: 80vh;
    max-height: 1040px;

    .hero-body {
      position: relative;
      padding: 90px 0;
      width: 90vw;
      max-width: 1040px;
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



    // 600
    @media only screen and (min-width: 600px) {
      .hero-body {
        padding: 90px 0 160px;
      }
    }


    // 1024
    @media only screen and (min-width: 1024px) {
      .hero-body {
        padding: 160px 0 220px;
      }
    }

    // 1280
    @media only screen and (min-width: 1280px) {
      .hero-body {
        padding: 210px 0 360px;
      }
    }




  }
</style>



