<template>
    <div class="cg-header-animated" :class="{'-ghost' : hideHeader}">

        <h1 class="the-header">
          <div class="ani-letters-one" v-if="header1" v-html="addLetterSpans(header1)" ></div>
          <div class="ani-letters-two" v-if="header2" v-html="addLetterSpans(header2)" ></div>
        </h1>

    </div>
</template>

<script type="text/javascript">
   export default {
      props: ['header1', 'header2'],
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

          this.hideHeader = false;
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

          this.animateHeaderOne()
          this.animateHeaderTwo()


      }
    };
</script>

<style lang="scss">

  .cg-header-animated {

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
      margin: 200px 0 56px;
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
        color: #FFC9CA;
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



