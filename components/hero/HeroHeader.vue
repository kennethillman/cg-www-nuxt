<template>
    <div class="cg-hero-header" :class="{'-ghost' : hideHeader}" >

        <h1 class="the-header">

          <div class="ani-letters-one"
            v-if="text.header1[0].text"
            v-html="addLetterSpans(text.header1[0].text)"
            :style="[text.header_1_color ? {'color': text.header_1_color} : {'color': '#fff'}]">
          </div>

          <div class="ani-letters-two"
            v-if="text.header2[0].text"
            v-html="addLetterSpans(text.header2[0].text)"
            :style="[text.header_2_color ? {'color': text.header_2_color} : {'color': '#fff'}]">
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
              translateY: ["1.2em", 0],
              translateZ: 0,
              duration: 750,
              delay: (el, i) => 50 * i
            })

        }
      },
      mounted() {

        setTimeout(() => {
          this.hideHeader = false
          this.animateHeaderOne()
          this.animateHeaderTwo()
         }, 30)




      }
    };
</script>

<style lang="scss">

  .cg-hero-header {

    &.-ghost {
      opacity: 0;
    }

    opacity: 1;

    .the-header {
      visibility: visible;
      opacity: 1;
      transition: all .5s ease;
      color: #fff;
      font-size: 56px;
      line-height: 67px;
      margin: 56px 0 56px;
      position: relative;
      z-index: 2;

      @include VP1280 {
        font-size: 80px;
        line-height: 96px;
      }

      .ani-letters-two,
      .ani-letters-one  {
        position: relative;
        display: block;
        padding-top: 0.2em;
        padding-right: 0.05em;
        padding-bottom: 0.1em;
        overflow: hidden;
      }

      .ani-letters-two span {
        display: inline-block;
        font-family: 'Prata', serif;
        line-height: 1em;
      }

      .ani-letters-one span {
        display: inline-block;
        line-height: 1em;
      }

    }

  }

</style>



