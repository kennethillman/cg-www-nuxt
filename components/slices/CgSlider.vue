<template>
  <section class="cg-slider">
    <div class="site-content-width">

      <div class="cg-header-group">
        <h2
             v-if="slice.primary.header1[0].text !== ''"
             v-waypoint="{ active: true, callback: triggerFade }"
             class="cg-group-header -animate-fade-in-up"
          >{{slice.primary.header1[0].text}}
        </h2>
        <h3
             v-if="slice.primary.sub_header[0].text !== ''"
             v-waypoint="{ active: true, callback: triggerFade }"
             class="cg-group-sub-header  -animate-fade-in-up"
          >{{slice.primary.sub_header[0].text}}
        </h3>
      </div>


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



