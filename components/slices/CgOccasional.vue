<template>
  <section class="cg-occasional">
    <div class="site-content-width">

      <div class="cg-header-group">
        <h2
             v-if="slice.primary.header1[0].text !== ''"
             v-waypoint="{ active: true, callback: animateTriggerFade  }"
             class="cg-group-header -animate-fade-in-up"
          >{{slice.primary.header1[0].text}}
        </h2>

        <prismic-rich-text
          v-if="slice.primary.text[0].text !== ''"
          v-waypoint="{ active: true, callback: animateTriggerFade  }"
          class="cg-group-sub-header -animate-fade-in-up"
          :field="slice.primary.text"
        />
      </div>


      <div class="form" >
        <input
         v-waypoint="{ active: true, callback: animateTriggerFade  }"
         class="input -animate-fade-in-up" type="text" name="" :placeholder="slice.primary.input_text[0].text">
        <button
          v-waypoint="{ active: true, callback: animateTriggerFade  }"
          class="cg-btn -animate-fade-in-up">{{slice.primary.button_text[0].text}}</button>
      </div>

    </div>
  </section>
</template>

<script>

import animate from "~/mixins/animate.js"

export default {
  props: ['slice'],
  name: 'slice-occasional',
  mixins: [animate]
}

</script>

<style lang="scss">

.cg-occasional {


  padding: 50px 0 0;
  text-align: center;


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



