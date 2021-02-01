<template>
  <section class="cg-occasional">
    <div class="site-content-width">

      <h2
           v-if="slice.primary.header1[0].text !== ''"
           v-waypoint="{ active: true, callback: triggerFade }"
           class="occasional-header -animate-fade-in-up"
        >{{slice.primary.header1[0].text}}
      </h2>

      <prismic-rich-text
        v-if="slice.primary.text[0].text !== ''"
        v-waypoint="{ active: true, callback: triggerFade }"
        class="occasional-text -animate-fade-in-up"
        :field="slice.primary.text"
      />

      <div class="form" >
        <input
         v-waypoint="{ active: true, callback: triggerFade }"
         class="input -animate-fade-in-up" type="text" name="" :placeholder="slice.primary.input_text[0].text">
        <button
          v-waypoint="{ active: true, callback: triggerFade }"
          class="cg-btn -animate-fade-in-up">{{slice.primary.button_text[0].text}}</button>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-occasional',
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

.cg-occasional {


  padding: 50px 0 0;
  text-align: center;

  .occasional-header {
    margin: 0 0 32px;
    font-size: 40px;
    font-family: $font-cg-2;
    line-height: 1.1;
    color: $red;
  }

  .occasional-text {
    max-width: 620px;
    margin: 0 auto 32px;
    font-size: 18px;
    line-height: 1.8;
    font-family: $font-cg;
  }

  .input {
    font-size: 18px;
    padding: 16px 22px;
    max-width: 490px;
    width: 100%;
    border: 4px solid #000;
  }

  .cg-btn {
    margin: 40px 24px 50px;
  }



// 768

  @media only screen and (min-width: 768px) {
  padding: 180px 0 130px;

  .occasional-header {
    font-size: 64px;
  }

  .input {
    font-size: 24px;
    padding: 20px 30px;
  }



  }


// 1280

  @media only screen and (min-width: 1280px) {




  }


}
</style>



