<template>

<prismic-link :field="slice.primary.link_to" class="cg-case cg-case-one"  :class="['-version-'+slice.primary.version, '-position-'+slice.primary.position]">
      <div
        v-waypoint="{ active: true, callback: triggerFade }"
        class="site-content-width -animate-fade-in-up">

      <!-- Image -->
      <figure class="case-image lax-image">


          <ImageResponsive :image="slice.primary.image" />


        <!-- Background figure-->
        <cg-case-figure  :figures="slice.primary.bg_figure" :class="['lax-svg -fill-'+slice.primary.bg_figure_color]" />

      </figure>



      <div class="case-box"
          :class="['-text-'+slice.primary.box_text_color, '-bg-'+slice.primary.box_bg_color]">
          <!-- Logo -->
          <prismic-image  :field="slice.primary.logo_svg" />

          <prismic-rich-text class="case-box-text" :field="slice.primary.box_text" />
      </div>

    </div>
</prismic-link>

</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-case-one',
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

.cg-case-one {

  padding: 0 0 0;
  text-align: left;
  max-width: 420px;
  float: left;

  .site-content-width {
    position: relative;
    @include clearfix();
  }

  // Svg figure
  .cg-case-figure {
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

    .cg-case-figure {
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
    .cg-case-figure {
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
      .cg-case-figure {
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
     max-width: 480px;
  }

// 768

  @media only screen and (min-width: 768px) {

      // Box
      .case-box {
        top: -80px;
      }

      // - - - VERSION - B
      &.-version-b {
        .cg-case-figure {
            left: auto;
            right: -12%;
            top: 100%;
            transform: translateY(-50%);
            width: 68%;
        }
        &.-position-right{
          .cg-case-figure {
            left: -12%;
            right: auto;
            top: 100%;

          }
        }
      }

  }


// 1024

  @media only screen and (min-width: 1024px) {

     max-width: 600px;

      // Box
      .case-box {
        top: -120px;
        padding: 32px 32px 48px;
            svg,
            img {
              height: 120px;
              margin: -32px 0 0 -32px
            }
      }

      .case-box-text {
        font-size: 20px;
      }

  }


// 1280

  @media only screen and (min-width: 1280px) {

    max-width: 800px;

    // padding: 100px 0 50px;


  }


}
</style>



