<template>



<prismic-link :field="slice.primary.link_to" class="cg-case cg-case-two"
              :class="[
                '-position-'+slice.primary.position,
                {
                  '-image-phone' : slice.primary.image_phone.url,
                  '-image-browser' : slice.primary.image_browser.url,
                }
              ]">
      <div
        v-waypoint="{ active: true, callback: triggerFade }"
        class="site-content-width -animate-fade-in-up">

      <!-- Image -->


        <template v-if="slice.primary.image_phone.url">
          <figure class="case-image image-phone">
            <ImageResponsive :image="slice.primary.image_phone" />
          </figure>
        </template>
        <template else-if="slice.primary.image_browser.url">
          <figure class="case-image image-browser">
            <ImageResponsive :image="slice.primary.image_browser" />
          </figure>
        </template>

      </figure>

      <div class="case-box lax-box "
          :class="['-text-'+slice.primary.box_text_color, '-bg-'+slice.primary.box_bg_color]">
          <!-- Logo -->
          <prismic-image :field="slice.primary.svg_logo" />
          <!-- Text -->
          <prismic-rich-text class="case-box-text" :field="slice.primary.box_text" />


      </div>

      <!-- Background figure-->
      <cg-case-figure :figures="slice.primary.bg_figure":class="['-fill-'+slice.primary.bg_figure_color]" />

    </div>
</prismic-link>


</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-case-two',
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

.cg-case-two {

  margin: 100px 0 120px;
  text-align: left;
  max-width: 420px;
  float: left;
  width: 100%;
  position: relative;

  .site-content-width {
    position: relative;
    @include clearfix();
  }

  // Svg figure
  .cg-case-figure {
    position: absolute;
    left: 80%;
    top: 94%;
    transform: translate(-50%,-50%);
    z-index: 0;
    width: 40%;
  }

  // Image
  .case-image {
    position: absolute;
    top: 50%;
    right:0;
    z-index: 5;
    img {
      width: 145px;
      height: auto;
    }

    &.image-phone {
      transform: perspective(240px) translateX(-16%) translateY(-54%)  rotate(6deg) rotateX(4deg) rotateY(-12deg);
    }

    &.image-browser {
      top: 30px;
      transform: translateX(4%) translateY(-54%);
      img {
        width: 200px;
      }
    }
  }

  // Box
  .case-box {
    border-radius: 8px;
    padding: 16px 16px 24px;
    padding-right: 100px;
    position: relative;
    z-index: 3;
    width: 80%;
    float: left;
    margin-right: 20%;
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
   font-family: $font-cg;
   font-size: 14px;
   line-height: 1.6;
   p {
    margin: 0;
   }
  }

  &.-image-browser {
    .case-box {
      padding: 16px 16px 24px;
    }
    &.-position-right {
      .case-box {
        padding: 16px 16px 24px;
        > img {
          margin-left: 60px;
        }
      }

    }

  }


  // - - - POSITION RIGHT

  &.-position-right {
    float: right;
    .cg-case-figure {
      right: 80%;
      left: auto;
      transform: translate(50%,-50%) rotate(180deg);
    }
    .case-image {

      right: auto;
      left: 0;

      &.image-phone {
        transform: perspective(260px) translateX(16%) translateY(-54%)  rotate(-6deg) rotateX(4deg) rotateY(12deg);

      }

    }
    .case-box{
      padding-right: 0px;
      padding-left: 100px;
       float: right;
       margin-left: 20%;
       margin-right: 0;
    }
  }


// 480

  @media only screen and (min-width: 480px) {
     max-width: 480px;
  }

// 768

  @media only screen and (min-width: 768px) {
    margin: 70px 0 80px;

    // Image
    .case-image {
      &.image-browser {
        top: 30px;
        transform: translateX(12%) translateY(-54%);
        img {
          width: 280px;
        }
      }
    }


     &.-position-right {
        .case-image {
          &.image-browser {
            transform: translateX(-12%) translateY(-54%);
          }
        }

      }

  }


// 1024

  @media only screen and (min-width: 1024px) {

     max-width: 600px;
     margin: 180px 0 120px;

      // Box
      .case-box {
        padding: 32px 32px 48px;
        padding-right: 100px;
        svg,
        img {
          height: 120px;
          margin: -32px 0 0 -32px;
        }
      }

      .case-box-text {
        font-size: 20px;
      }

      .cg-case-figure {
         width: 52%;
      }

      .case-image {
        img {
          width: 220px;
        }
        &.image-phone {
          transform: perspective(300px) translateX(-6%) translateY(-54%)  rotate(6deg) rotateX(4deg) rotateY(-12deg);
        }
        &.image-browser {
          transform: translateX(12%) translateY(-54%);
          img {
            width: 330px;
          }
        }

      }

      &.-position-right {
        .case-image {
          &.image-phone {
            transform: perspective(300px) translateX(6%) translateY(-54%)  rotate(-6deg) rotateX(4deg) rotateY(12deg);
          }
          &.image-browser {
            transform: translateX(-12%) translateY(-54%);
          }
        }
        .case-box{
          padding-right: 0px;
          padding-left: 120px;
        }
      }

  }


// 1280

  @media only screen and (min-width: 1280px) {

    max-width: 800px;

      .case-image {
        &.image-browser {
          transform: translateX(0%) translateY(-54%);
          img {
            width: 480px;
          }
        }
      }

      &.-position-right {
        .case-image {

          &.image-browser {
            transform: translateX(-24%) translateY(-54%);
          }
        }

      }


  }


}
</style>



