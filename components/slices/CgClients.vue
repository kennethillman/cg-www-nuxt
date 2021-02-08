<template>
  <section class="cg-clients">
    <div class="site-content-width">

      <div class="cg-header-group">
        <h2
             v-if="slice.primary.header1[0].text !== ''"
             v-waypoint="{ active: true, callback: triggerFadeText }"
             class="cg-group-header -animate-fade-in-up"
          >{{slice.primary.header1[0].text}}
        </h2>

        <h3
             v-if="slice.primary.header1[0].text !== ''"
             v-waypoint="{ active: true, callback: triggerFadeText }"
             class="cg.cg-group-sub-header -animate-fade-in-up"
          >{{slice.primary.sub_header[0].text}}
        </h3>
      </div>

    </div>
    <div class="site-content-width -logos">

      <div
        class="cg-client -animate-fade-in-up"
        v-for="(item,index) in slice.items"
        :key="'item'+index"
        v-waypoint="{ active: true, callback: fadeTrigger }"
      >

         <template v-if="item.link.url">
            <prismic-link class="cg-client-logo" :field="item.link">
              <prismic-image :field="item.image" />
            </prismic-link>
         </template>

          <template v-else>
            <figure class="cg-client-logo">
              <prismic-image :field="item.image" />
            </figure>
         </template>

        </div>

        <!-- Circle animation -->
        <div
          v-if="this.$mq === 'VP1024' || this.$mq === 'VP1280'"
          class="cg-client-circle"
          v-waypoint="{ active: true, callback: animeTriggerCircle }">
          <svg width="810" height="806" viewBox="0 0 810 806" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M241.499 95.4475L286.191 79.2984L333.481 74.2953L381.012 78.1581L427.679 87.4939L468.983 111.953L511.066 131.351L550.824 155.836L585.42 187.14L622.341 217.336L642.987 260.338L660.838 303.409L677.058 346.918L683.863 395.861L693.87 445.887L679.723 494.523L660.916 540.622L639.022 585.704L607.778 625.234L569.605 658.468L526.363 685.1L476.615 695.421L432.98 706.822L387.698 704.104L343.164 695.846L301.968 676.502L266.271 648.696L235.761 615.618L214.672 576.035L191.197 536.606L193.059 487.768L190.53 438.843L217.702 397.88L244.683 359.104L281.397 328.397L324.669 306.222L371.347 309.439L416.019 316.398L456.498 337.778L484.51 373.855L508.626 413.501L505.74 459.605L497.985 505.654L467.264 542.424L422.947 559.249L375.36 553.363L335.959 529.85L311.578 490.664L310.983 432.291L361.299 401.628L407.39 403.741L433.467 442.376L432.836 480.595L401.575 505.57" stroke="#E6FF00" stroke-width="8" stroke-miterlimit="10"/>
          </svg>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-clients',
  methods: {
    animeTriggerCircle ({ el, going, direction }) {
      if (this.$mq === 'VP1024' || this.$mq === 'VP1280') {
        el.classList.toggle('active', this.$waypointMap.GOING_IN === going)
        const anime = this.$anime;
        anime({
          targets: '.cg-client-circle svg path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 9000,
          direction: 'alternate',
          loop: true
        });
      }
    },
    fadeTrigger ({ el, going, direction }) {

    if (this.$waypointMap.GOING_IN === going) {

      const _delays = ['one', 'two', 'three', 'four', 'five','six','seven'];
      const delayRandom = Math.floor ( Math.random() * _delays.length)
      const delayName = '-delay-'+_delays[delayRandom]

      el.classList.add('-animate',delayName)
     }

    },
    triggerFadeText ({ el, going, direction }) {

    if (this.$waypointMap.GOING_IN === going) {

      el.classList.add('-animate')
     }

    },
  }

}
</script>

<style lang="scss">

.cg-clients {
  padding: 56px 0 32px;
  text-align: center;


  .site-content-width {
    &.-logos{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
    }
  }

  .cg-client-circle {
    width: 50%;
    max-height: 640px;
    max-width: 640px;
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
  }

  .cg-client {
    width: 33%;
    margin: 4px 0;
  }

  .cg-client-logo {
    img {
       height: 86px;
    }
  }

  a {
    transition: all .375s ease-in-out;
    display: block;
    &:hover,
    &:active {
      transform: scale(1.06);
    }

  }




// 1024

  @media only screen and (min-width: 1024px) {

    .cg-client {
      width: 20%;
      margin: 24px 0;
    }

  }

}
</style>



