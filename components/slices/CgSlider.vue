<template>
  <section class="cg-slider">
    <div class="site-content-width">

      <h2
           v-if="slice.primary.header1[0].text !== ''"
           v-waypoint="{ active: true, callback: triggerFade }"
           class="slider-header -animate-fade-in-up"
        >{{slice.primary.header1[0].text}}
      </h2>

      <prismic-rich-text
        v-if="slice.primary.sub_header[0].text !== ''"
        v-waypoint="{ active: true, callback: triggerFade }"
        class="slider-text -animate-fade-in-up"
        :field="slice.primary.sub_header"
      />


      {{slice}}

    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-slider',
  methods: {
    triggerFade ({ el, going, direction }) {

    if (this.$waypointMap.GOING_IN === going) {

      el.classList.add('-animate')
     }

    },
  }

}
</script>

<style lang="scss">

.cg-slider {

  padding: 50px 0 0;
  text-align: center;


  .slider-header {
    margin: 0 0 32px;
    font-size: 40px;
    font-family: $font-cg-2;
    line-height: 1.1;
    color: $red;
  }

  .slider-text {
    max-width: 620px;
    margin: 0 auto 32px;
    font-size: 18px;
    line-height: 1.8;
    font-family: $font-cg;
  }


// 480

  @media only screen and (min-width: 480px) {

  }


// 768

  @media only screen and (min-width: 768px) {


      padding: 100px 0 50px;




  }


// 1280

  @media only screen and (min-width: 1280px) {




  }


}
</style>



