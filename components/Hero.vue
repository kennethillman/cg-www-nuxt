<template>
    <div class="cg-hero" :class="[]">

      <div  class="body">

        <UiHeaderAnimated :header1="compHero.h1" :header2="compHero.h2" :key="rerender" />

        <p class="hero-text">
          The hero text <br><br>{{hero.txt}}
        </p>

        <figure>
          <svg class="curv"  viewBox="0 0 1400 300" enable-background="new 0 0 1400 300" xml:space="preserve">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39
s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z" />
          </svg>
        </figure>

      </div>



    </div>
</template>

<script type="text/javascript">
   export default {

      data() {
        return {
          hero: this.$store.getters.getHero,
          curvCount: 1,
          rerender: 1
        }
      },
      watch: {
        $route() {
          if (this.curvCount === 3) {
            this.curvCount = 1;
          } else {
            this.curvCount ++
          }
          this.animateCurve();
        },
      },
      computed: {
        compHero () {
          this.rerender ++
          return this.$store.getters.getHero
        }
      },
      methods: {

        animateCurve() {
          const anime = this.$anime

          const
          curv1 = "M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39 s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z",
          curv2 = "M-13,68c82-12,87,20,124,20s17-37,192-49s103,11,233,9 s234-18,322-17s215,37,298,38s228-58,254,25s-10,206-10,206H0L-13,68z",
          curv3 = "M-13,68c82-12,145,26,182,26s30-66,205-78s94,83,224,81s193-83,281-82s145,69,228,70s281-114,307-31s-14,246-14,246H0L-13,68z",
          curv4 = "M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39 s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z";



          if (this.curvCount === 1) {
            anime({
              targets: '.curv > path',
              easing: 'easeOutQuint',
              duration: 3000,
              loop: false,
              d: [
                { value: curv2 }
              ],
            })
          } else if (this.curvCount === 2)  {
            anime({
              targets: '.curv > path',
              easing: 'easeOutQuint',
              duration: 3000,
              loop: false,
              d: [
                { value: curv3 }
              ],
            })
          } else  {
            anime({
              targets: '.curv > path',
              easing: 'easeOutQuint',
              duration: 3000,
              loop: false,
              d: [
                { value: curv1 }
              ],
            })
          }



        }
      },
      mounted() {
        this.animateCurve()
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

    p {
      font-size: 18px;
      line-height: 32px;
      width: 42%;
      margin-bottom: 60px;
      color: #fff ;
      font-family: 'Prata', serif;
      position: relative;
          z-index: 2;
    }

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
        }

        svg {
          fill: #fff;
          width: 110vw;
          transform: translate(-5vw , 40%);
        }
      }
  }
</style>



