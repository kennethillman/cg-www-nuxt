<template>
    <div class="cg-hero-header" :class="{'-ghost' : hideHeader}" >

        <h1 class="the-header">


          <div class="ani-letters-one"
            v-if="text.header1[0].text"
            :class="['-text-'+text.header_1_palette_color]"
            :style="[text.header_1_color ? {'color': text.header_1_color} : {'color': '#fff'}]">
            {{text.header1[0].text}}
          </div>

          <div class="ani-letters-two"
            v-if="text.header2[0].text"
            :class="['-text-'+text.header_2_palette_color]"
            :style="[text.header_2_color ? {'color': text.header_2_color} : {'color': '#fff'}]">
            {{text.header2[0].text}}
          </div>

        </h1>
    </div>
</template>

<script type="text/javascript">
   export default {
      props: ['text'],
      data() {
        return {
          hideHeader: true,
        }
      },
      methods: {
        addLetterSpans(text) {
          let txt
          if (this.$mq === 'VP320' || this.$mq === 'VP600') {
            txt = text;
          } else {
            txt = text.replace(/\S/g, '<span class="letter">$&</span>');
          }

          return txt
        },
        animateHeaderOne(){

          const anime = this.$anime

          anime.timeline()
            .add({
              targets: '.ani-letters-one .letter',
              // translateY: ["1.2em", 0],
              opacity: [0, 1],
              //translateZ: 0,
              duration: 750,
              delay: (el, i) => 50 * i
            })

            this.animateHeaderTwo()

        },
        animateHeaderTwo(){

          const anime = this.$anime

          anime.timeline()
            .add({
              targets: '.ani-letters-two .letter',
              translateY: ["1.4em", 0],
              translateZ: 0,
              duration: 750,
              delay: (el, i) => 50 * i
            })

        }
      },
      mounted() {

        setTimeout(() => {
          this.hideHeader = false
          // this.animateHeaderOne()
          // this.animateHeaderTwo()
         }, 30)




      }
    };
</script>

<style lang="scss">

  .cg-hero-header {

    &.-ghost {
      opacity: 0;
    }
    position: relative;
    z-index: 2;

    opacity: 1;
    transition: opacity .750s ease-in-out .250s;

    .the-header {
      // visibility: visible;
      opacity: 1;

      color: #fff;
      font-size: 40px;
      line-height: 1.16;
      margin: 32px 0 24px;
      position: relative;
      z-index: 2;


      @include VP768 {
        font-size: 60px;
      }

      @include VP1280 {
        font-size: 80px;
      }

      .ani-letters-two,
      .ani-letters-one  {
        position: relative;
        display: block;
        padding-top: 0;
        padding-right: 0.05em;
        padding-bottom: 0.1em;
        overflow: hidden;
      }

      .ani-letters-two,
      .ani-letters-two span {
        display: inline-block;
        font-family: $font-sangbleu;
        line-height: 1em;
      }

      .ani-letters-one {
        font-family: $font-machina;
        span {
          display: inline-block;
          font-family: $font-machina;
          font-weight: 800;
          line-height: 1em;
        }
      }

    }

  }

</style>



