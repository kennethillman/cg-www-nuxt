<template>

  <div class="cg-case-next-prevoius">

   <prismic-link :field="slice.primary.next_link" class="cg-case-other  -next">
      <figure v-if="slice.primary.next_image.url">
        <ImageResponsive :image="slice.primary.next_image" />
      </figure>
      <div class="text-twrapper">
        <div class="header" v-if="slice.primary.next_header.length > 0 && slice.primary.next_header[0].text !== ''"
        >{{slice.primary.next_header[0].text}}</div>
        <div class="text" v-if="slice.primary.next_text.length > 0 && slice.primary.next_text[0].text !== ''">{{slice.primary.next_text[0].text}}</div>
      </div>
   </prismic-link>

   <prismic-link :field="slice.primary.previous_link"  class="cg-case-other -previous">
      <figure v-if="slice.primary.previous_image.url">
        <ImageResponsive :image="slice.primary.previous_image" />
      </figure>
      <div class="text-twrapper">
        <div class="header" v-if="slice.primary.previous_header.length > 0 && slice.primary.previous_header[0].text !== ''"
        >{{slice.primary.previous_header[0].text}}</div>
        <div class="text" v-if="slice.primary.previous_text.length > 0 && slice.primary.previous_text[0].text !== ''">{{slice.primary.previous_text[0].text}}</div>
      </div>
   </prismic-link>

  </div>

</template>

<script>

import click from "~/mixins/click.js"
import animate from "~/mixins/animate.js"

export default {
  props: ['slice'],
  name: 'slice-case-one',
  mixins: [click, animate]
}
</script>

<style lang="scss">
  .cg-case-next-prevoius {
    // display: flex;
    // justify-content: center;
    // flex-direction: column;
  }

  .cg-case-other {
    text-decoration: none;
    border-radius: 8px;
    min-height: 160px;
    max-width: 400px;
    display: flex;
    background: $gray-200;
    align-items: center;
    justify-content: left;
    padding: 24px;
    line-height: 1;
    font-size: 32px;
    margin: 40px auto;
    position: relative;

    figure {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 124px;
    }

    &.-next {
      background: $blue;
      color: $white;
      padding-right: 140px;
      figure {
        right: 0;
      }
    }

    &.-previous {
      padding-left: 140px;
      background: $pink;
      figure {
        left: 0;
      }
    }

    .text {
      display: none;
    }

  }

  @media only screen and (min-width: 768px) {
    .cg-case-next-prevoius {
      display: flex;
      justify-content: center;
      flex-direction: row-reverse;
      .cg-case-other {
        width: 50%;
        margin: 40px 12px;
        padding: 40px 32px;
        figure {
          width: 140px;
        }
         &.-next {
          padding-right: 100px;
          figure {
            right: -48px;
          }
        }
        &.-previous {
          padding-left: 100px;
          figure {
            left: -48px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1280px) {

    .cg-case-next-prevoius {
      .cg-case-other {
        min-height: 200px;
        width: 50%;
        margin: 120px 24px;
        max-width: 520px;
        figure {
          width: 230px;
        }
        .header {
          font-size: 56px;
        }
        .text {
          padding-top: 24px;
          display: block;
          font-size: 18px;
          font-style: italic;
          line-height: 1.4;
        }

        &.-next {
          padding-right: 140px;
          figure {
            right: -96px;
          }
        }

        &.-previous {
          padding-left: 140px;
          figure {
            left: -96px;
          }
        }

      }
    }

  }

</style>



