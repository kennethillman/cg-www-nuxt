<template>
  <div class="cg-page">

    <div class="cg-content" style="position:relative">  {{document.data.
      header[0].text}} <br>





      <TextSplit text="Expertise" split="5" />
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

      <div class="section" v-waypoint="{ active: true, callback: logOne }" id="first">#first</div>

      <div style="margin: 40px auto; text-align: center">
              <div class="section view -round" v-view="viewHandlerScale">
                vue-check-view
            </div>
      </div>

      <div style="margin: 40px auto; text-align: center">

            <div class="section view -card" v-view="viewHandlerRotate">
                vue-check-view
            </div>
            <div class="section view -card-2">
                vue-check-view
            </div>
      </div>




    <div class="section epic" v-waypoint="{ active: true, callback: animeTrigger }" id="second"><svg width="810" height="806" viewBox="0 0 810 806" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M241.499 95.4475L286.191 79.2984L333.481 74.2953L381.012 78.1581L427.679 87.4939L468.983 111.953L511.066 131.351L550.824 155.836L585.42 187.14L622.341 217.336L642.987 260.338L660.838 303.409L677.058 346.918L683.863 395.861L693.87 445.887L679.723 494.523L660.916 540.622L639.022 585.704L607.778 625.234L569.605 658.468L526.363 685.1L476.615 695.421L432.98 706.822L387.698 704.104L343.164 695.846L301.968 676.502L266.271 648.696L235.761 615.618L214.672 576.035L191.197 536.606L193.059 487.768L190.53 438.843L217.702 397.88L244.683 359.104L281.397 328.397L324.669 306.222L371.347 309.439L416.019 316.398L456.498 337.778L484.51 373.855L508.626 413.501L505.74 459.605L497.985 505.654L467.264 542.424L422.947 559.249L375.36 553.363L335.959 529.85L311.578 490.664L310.983 432.291L361.299 401.628L407.39 403.741L433.467 442.376L432.836 480.595L401.575 505.57" stroke="#FFF" stroke-width="8" stroke-miterlimit="10"/>
</svg></div>


      <TextSplit text="Used by millions" split="11" position="right" />

    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
      async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getSingle('start')

    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
    methods: {
      viewHandlerScale (e) {
        //console.log(e) // 'enter', 'exit', 'progress'
        //console.log(e.percentInView) // 0..1 how much element overlap the viewport
        //console.log(e.percentTop) // 0..1 position of element at viewport 0 - above , 1 - below
        //console.log(e.percentCenter) // 0..1 position the center of element at viewport 0 - center at viewport top, 1 - center at viewport bottom
        //console.log(e.scrollPercent) // 0..1 current scroll position of page
        //console.log(e.scrollValue) // 0..1 last scroll value (change of page scroll offset)


        let sca, op

        if (e.percentInView > 1 || e.percentInView < 0) {

          sca = 1;
          op = 0;
        } else {
          op = (e.percentInView * 1.12);
          sca = (1 - e.percentTop + 1 ** 2) ;
        }


        // let rot = e.percentTop;
        // let sca = e.percentTop;

        // console.log('e.percentInView ->' + e.percentInView)
        // console.log('op ->' + op)

        e.target.element.style.transform = `scale(${sca})`;
        e.target.element.style.opacity = op;

    },

    viewHandlerRotate (e) {
        //console.log(e.target) // 'enter', 'exit', 'progress'
        //console.log(e.percentInView) // 0..1 how much element overlap the viewport
        //console.log(e.percentTop) // 0..1 position of element at viewport 0 - above , 1 - below
        //console.log(e.percentCenter) // 0..1 position the center of element at viewport 0 - center at viewport top, 1 - center at viewport bottom
        //console.log(e.scrollPercent) // 0..1 current scroll position of page
        //console.log(e.scrollValue) // 0..1 last scroll value (change of page scroll offset)


        let rot

        if (e.percentTop > 1 || e.percentTop < 0) {
          rot = 1

        } else {
          rot = 0 + (((e.percentTop + 1) ** 6));

        }


        // let rot = e.percentTop;
        // let sca = e.percentTop;
        console.log('e.percentInView -> ' + e.percentInView)
        console.log('e.percentTop -> ' + e.percentTop)
       console.log('rot -> ' + rot)


        e.target.element.style.transform = `rotate(${rot}deg)`;

    },

      logOne ({ el, going, direction }) {

        el.classList.toggle('active', this.$waypointMap.GOING_IN === going)



        //let  rect = el.getBoundingClientRect();

        //console.log(el)
        //console.log(rect.top.toFixed(0), rect.right.toFixed(0), rect.bottom.toFixed(0), rect.left.toFixed(0));


        //console.log('this.$waypointMap -> ' , this.$waypointMap);
      },


      animeTrigger ({ el, going, direction }) {

        el.classList.toggle('active', this.$waypointMap.GOING_IN === going)
        const anime = this.$anime;

        anime({
          targets: '.epic svg path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 8000,
          direction: 'alternate',
          loop: true
        });

      },




    },
    mounted() {

    },
    created () {

    },
    destroyed () {

    },
  }
</script>

<style lang="scss">
  .cg-content {
    width: 90vw;
    max-width: 1280px;
    margin: 0 auto;
  }

  .section {
    opacity: 0;
    height: 50vh;
    margin: 5vh 0;
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 1s ease-in-out;
    svg {
      height: 80%;
    }
    &.active,
    &.view-in {
      opacity: 1;
    }
    &.view {
      display: inline-block;
      width: 40%;
      opacity: 1;
      margin: 0 4%;
      position: relative;
      z-index: 2;

      &.-round {
        transition: none;
        background: #eee;
        border-radius: 900px;
        height: 60vh;
        width: 60vh;
      }
      &.-card{
        transition: none;
        background: red;
        height: 400px;
        width: 300px;
        z-index: 10;
      }
      &.-card-2{
        position: relative;
        transition: none;
        background: #ccc;
        height: 400px;
        width: 300px;
        margin: 0 0 0 -60px;
        transform: rotate(12deg);
        z-index: 2;

      }
    }
  }



  .epic {
    svg {
      max-width: 400px;
    }
  }
</style>
