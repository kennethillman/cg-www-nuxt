<template>
  <div class="cg-hero" ref="thehero"
    v-if="compHero"
    :class="[{
              '-curtain' : compHero.curtain === 'yes',
              '-play' : compHero.background_color === '#000000',
            }]"
    :style="[compHero.background_color ? {'background': compHero.background_color} : {'background': '#004A84'}]"
  >

      <div class="hero-body" ref="herobody">

        <!-- HEADERS -->
        <HeroHeader :text="compHero" :key="rerender" />

        <!-- TEXT -->
        <HeroText :hero="compHero" :key="rerender + 1" />

        <!-- SVG -->
        <HeroSvg :graphic="compHero.svg_graphic"  v-if="compHero.svg_graphic !== 'none' "/>


      </div>

      <!-- IMAGE -->
      <HeroImage v-if="compHero.background_image.url" :hero="compHero"/>

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
          rerender: 1,
          heightOld: false,
          heightNew: false
        }
      },
      computed: {
        compHero () {
          this.rerender ++
          return this.$store.getters.getHero
        }
      },
      methods: {
        animateHeight(){

        const anime = this.$anime;

        anime({
          targets: '.cg-hero',
          height: [this.heightOld, this.heightNew],
          easing: 'easeInOutSine',
          duration: 500,
          loop: false
        });
        }
      },
      mounted() {

        let hero = new ResizeObserver(entries => {
          for (let entry of entries) {

            const cr = entry.contentRect;

            let tp = 90
            let bp = 90

            if (this.$mq === 'VP600') {
              tp = 90
              bp = 160
            } else if (this.$mq === 'VP1024') {
              tp = 160
              bp = 280
            } else if (this.$mq === 'VP1280') {
              tp = 210
              bp = 360
            }

            this.heightOld = document.querySelector('.cg-hero').clientHeight
            this.heightNew = cr.height + tp + bp

            this.animateHeight()
          }
        });

        hero.observe(this.$refs.herobody);


        if (this.compHero.menu_color === 'light') {
            this.$store.dispatch('setTheMenuColor', 'light');
        } else {
          this.$store.dispatch('setTheMenuColor', 'dark');
        }

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

    max-height: 1040px;

    .hero-body {
      position: relative;
      margin: 90px 0 140px;
      width: 90vw;
      max-width: 1040px;
    }

    &.-curtain {
      figure {
        transform: translateY(0);
      }
    }


    // 600
    @media only screen and (min-width: 600px) {
      .hero-body {
        margin: 90px 0 160px;
      }
    }


    // 1024
    @media only screen and (min-width: 1024px) {
      .hero-body {
        margin: 160px 0 280px;
      }
    }

    // 1280
    @media only screen and (min-width: 1280px) {
      .hero-body {
        margin: 210px 0 360px;
      }
    }




  }
</style>



