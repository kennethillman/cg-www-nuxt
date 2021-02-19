<template>

<div class="cg-expertise cg-spacing">
  <div
    v-waypoint="{ active: true, callback: animateTriggerFade }"
    class="case-content-width -animate-fade-in-up" :class="['-text-'+slice.primary.content_text_color]" >

    <!-- Image -->
    <figure class="case-image ">
      <cg-figures class="expertise-svg"  :figures="slice.primary.svg_figure" :class="['-fill-'+slice.primary.svg_figure_color]" />
    </figure>

    <div class="cg-expertise-group-header">
      <prismic-rich-text
        v-if="slice.primary.header1.length > 0 && slice.primary.header1[0].text !== ''"
        class="expertise-header" :field="slice.primary.header1" :class="['-text-'+slice.primary.header_color]" />
      <prismic-rich-text
        v-if="slice.primary.sub_header.length > 0 && slice.primary.sub_header[0].text !== ''"
        class="expertise-sub-header" :field="slice.primary.sub_header" :class="['-text-'+slice.primary.sub_header_color]" />
    </div>

    <div class="cg-edt-content">
          <prismic-rich-text
        v-if="slice.primary.sub_header.length > 0 && slice.primary.sub_header[0].text !== ''"
        :field="slice.primary.content" />
    </div>

  </div>

  <!-- BACKGROUND BLOB -->
  <svg v-if="slice.primary.bg_color !== 'white'" class="bg-blob" preserveAspectRatio="none" width="1440" height="948" viewBox="0 0 1440 948" fill="none" xmlns="http://www.w3.org/2000/svg" :class="[' -fill-'+slice.primary.bg_color]">
    <path d="M-29.7239 59.5796C146.147 -41.8132 223.629 46.3894 480.672 46.3894C738.945 46.3894 738.945 13.8534 995.988 13.8534C1253.03 13.8534 1324.36 -39.1624 1500.23 62.2304C1688.4 170.25 1553.12 204.71 1553.12 352.492C1553.12 500.274 1697.01 780.709 1510.07 888.728C1334.2 990.121 1225.24 937.403 995.988 905.958C742.094 871.133 737.715 907.947 480.672 907.947C222.399 907.947 130.159 996.748 -45.7122 895.355C-233.882 788.661 -59.2408 506.901 -114.585 362.432C-172.389 209.349 -217.894 167.599 -29.7239 59.5796Z" />
  </svg>

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
  position: relative;
  z-index: 2;

  // padding: 120px 0 40px;
  margin:  0 0 80px;

  .case-content-width {
    position: relative;
    z-index: 1;
  }

  // Svg figure
  .cg-figure {
    position: absolute;
    left: -80px;
    top: -20px;
    z-index: -1;
    width: 160px;
  }

  .cg-expertise-group-header {
    margin-bottom: 40px;
  }

  .expertise-header {
    padding-bottom: 0.1em;
    > * {
      font-family: $font-machina;
      font-weight: 800;
       line-height: 1em;
       font-size: 67px;
       margin: 0;
    }
  }

  .expertise-sub-header {
    > * {
      font-family: $font-sangbleu;
      line-height: 1em;
      font-size: 56px;
      margin: 0;
    }
  }

  .bg-blob {
    width: 100vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50vw, -54%);
    z-index: 0;
    height: 108%;
  }


// 480

  @media only screen and (min-width: 480px) {

  }

// 600

  @media only screen and (min-width: 600px) {

    // Svg figure
    .cg-figure {
      left: -140px;
      top: -50px;
      width: 240px;
    }

  }


// 1024

  @media only screen and (min-width: 1024px) {


  }


// 1280

  @media only screen and (min-width: 1280px) {



  }


}
</style>



