<template>

<prismic-link :field="slice.primary" class="cg-case cg-case-one"  :class="['-version-'+slice.primary.version, '-position-'+slice.primary.position]">
      <div class="site-content-width">

      <!-- Image -->
      <figure class="case-image">
        <ImageResponsive :image="slice.primary.image" />

        <!-- Background figure-->
        <cg-case-figure :figures="slice.primary.bg_figure":class="['-fill-'+slice.primary.bg_figure_color]" />

      </figure>



      <div class="case-box"
          :class="['-text-'+slice.primary.box_text_color, '-bg-'+slice.primary.box_bg_color]">
          <!-- Logo -->
          <prismic-image :field="slice.primary.logo_svg" />
          <!-- Text -->
          <prismic-rich-text class="case-box-text" :field="slice.primary.box_text" />
      </div>

    </div>
</prismic-link>
<!--   <section class="cg-case cg-case-one"  :class="['-version-'+slice.primary.version, '-position-'+slice.primary.position]">

  </section> -->
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-case-one'

}
</script>

<style lang="scss">

.cg-case-one {

  padding: 50px 0 0;
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
    right: 0;
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
  }

  .case-box-text {
   font-family: $font-cg;
   font-size: 14px;
   line-height: 1.6;
   p {
    margin: 0;
   }
  }


  // - - - VERSION - B

  &.-version-b {
    .case-image {
      img {
        margin-left: 10%;
        margin-right: 10%;
      }
    }
    .cg-case-figure {
      right: auto;
      left: 0;
      top: 100%;
      transform: translateY(-50%) rotate(180deg);
    }
  }



  // - - - POSITION RIGHT

  &.-position-right {
    float: right;
    .cg-case-figure {
      right: auto;
      left: 0;
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
        left: auto;
        right: 0;
        transform: translateY(-50%);
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

    padding: 100px 0 50px;


  }


}
</style>



