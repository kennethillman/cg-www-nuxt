<template>

<div class="cg-expertise">
      <div
        v-waypoint="{ active: true, callback: animateTriggerFade }"
        class="site-content-width -animate-fade-in-up" >

      <!-- Image -->
  <!--     <figure class="case-image ">
        <cg-figure class="expertise-svg"  :figures="slice.primary.bg_figure" :class="['lax-svg -fill-'+slice.primary.bg_figure_color]" />
      </figure>
 -->
     <!--  <div class="case-box"
          :class="['-text-'+slice.primary.box_text_color, '-bg-'+slice.primary.box_bg_color]">
          <prismic-rich-text class="case-box-text" :field="slice.primary.box_text" />
      </div> -->

    </div>
</div>

</template>

<script>

import click from "~/mixins/click.js"
import animate from "~/mixins/animate.js"

export default {
  props: ['slice'],
  name: 'slice-exeprtise',
  mixins: [animate]
}
</script>

<style lang="scss">

.cg-expertise {

  padding: 0 0 0;
  text-align: left;
  max-width: 420px;
  float: left;

  .site-content-width {
    position: relative;
    @include clearfix();
  }

  // Svg figure
  .cg-figure {
    position: absolute;
    right: -5%;
    top: 50%;
    transform: translateY(-40%);
    z-index: -1;
    width: 35%;
  }

  // Image
  .case-image {
    position: relative;
    z-index: 2;
    width: 100%;
    img {
      width: 80%;
    }
  }

  // Box
  .case-box {
    top: -60px;
    border-radius: 8px;
    padding: 16px 16px 24px;
    position: relative;
    z-index: 3;
    transform: translate3d(0, 0, 2px);
    width: 80%;
    float: right;
    svg,
    img {
      height: 80px;
      width: auto;
      margin: -16px 0 0 -16px
    }

    &.-text-white {
      img {
        filter: invert(100%);
      }
    }
  }

  .case-box-text {
   font-family: $font-sangbleu;
   font-size: 14px;
   line-height: 1.6;
   p {
    margin: 0;
   }
  }


  // - - - VERSION - B

  &.-version-b {
    padding-bottom: 50px;
    .case-image {
      img {
        margin-left: 10%;
        margin-right: 10%;
      }
    }

    .cg-figure {
        left: auto;
        right: -5%;
        top: 100%;
        transform: translateY(-60%);
        width: 50%;
    }

    .case-box {
      float: left;
    }

  }



  // - - - POSITION RIGHT

  &.-position-right {
    float: right;
    .cg-figure {
      right: auto;
      left: -5%;
      transform: translateY(-40%) rotate(180deg);
    }
    .case-image {
      img {
        margin-left: 20%;
      }
    }
    .case-box{
       margin-right: 20%;
    }


   &.-version-b {
      .case-image {
        img {
          margin-left: 10%;
          margin-right: 10%;
        }
      }
      .cg-figure {
        right: auto;
        left: -5%;
        top: 100%;
        transform: translateY(-50%) rotate(180deg);

      }
      .case-box {
        float: right;
        margin-left: 20%;
        margin-right: 0;
      }
    }

  }


// 480

  @media only screen and (min-width: 480px) {

  }

// 768

  @media only screen and (min-width: 768px) {

  }


// 1024

  @media only screen and (min-width: 1024px) {


  }


// 1280

  @media only screen and (min-width: 1280px) {



  }


}
</style>



