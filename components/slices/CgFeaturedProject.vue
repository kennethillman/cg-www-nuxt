<template>
  <section class="cg-featured-project" :class="['-'+slice.primary.direction]">
    <div class="site-content-width">

      <div class="featured-content left">

        <TextSplit
          :text="slice.primary.text_split[0].text"
          :split="slice.primary.text_split_at"
          :class="['-text-'+slice.primary.split_text_color, {'-text-right' : slice.primary.direction == 'right'}]"
        />

        <figure>
          <ImageResponsive class="featured-browser" :image="slice.primary.image_browser" />
          <ImageResponsive class="featured-mobile"  :image="slice.primary.image_mobile" />
        </figure>

      </div>

      <div class="featured-content right">

        <h2
           v-if="slice.primary.text_header[0].text !== ''"
           class="featured-header"
        >{{slice.primary.text_header[0].text}}</h2>

        <prismic-rich-text
          v-if="slice.primary.text[0].text !== ''"
          class="featured-text"
          :field="slice.primary.text"
        />

        <prismic-link
          v-if="slice.primary.link_text[0].text !== ''"
          :field="slice.primary.link"
          class="featured-link"
        >
            {{slice.primary.link_text[0].text}}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
        </prismic-link>

      </div>


    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-test'

}
</script>

<style lang="scss">

.cg-featured-project {

  padding: 24px 0 0;
  min-width: 300px;


  .featured-content {
    padding: 0 0 24px;
    position: relative;

    &.left {
      // background: #f6f6f6;
      min-height: 288px;

      &:hover {
        .featured-mobile {
          transform: perspective(500px) translateX(0) translateY(0%)  rotate(6deg)
            rotateX(4deg) rotateY(-12deg);
        }
        .featured-browser {
          transform: perspective(40vw) translateX(-50%) translateY(-50%)
            rotate(-5deg) rotateX(4deg) rotateY(11deg);
        }
      }

    }

    &.right {
      // background: #eee;
    }

  }

  figure {
    // background: rgba(0,0,0,.04);
    margin-left: 72px;
    position: relative;
    top: -24px;
    left: -24px;

    @include aspect-ratio-picture(100,69);

  }



  // Tilted text


  // Images

  .featured-mobile,
  .featured-browser {
    position: absolute;
    transition: transform 0.4s cubic-bezier(0.45, 0, 0.55, 1);
  }

  .featured-mobile {
    height: 86%;
    width: 28%;
    transform: perspective(500px) translateX(0) translateY(0%) rotate(8deg) rotateX(6deg) rotateY(-14deg);
    right: 0;
    bottom: 0;
  }

  .featured-browser {
    height: 82%;
    width: 82%;
    top: 44%;
    left: 51%;
    transform: perspective(40vw) translateX(-50%) translateY(-50%) rotate(-7deg) rotateX(5deg) rotateY(13deg);
  }





  // Text


  .featured-header{
    font-size: 40px;
    font-family: $font-cg;
  }

  .featured-text{
    font-size: 18px;
    line-height: 1.8;
  }

  // Link

  .featured-link{
    font-family: $font-cg;
    font-size: 20px;
    line-height: 1.256;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    margin-top: 1.5em;
    position: relative;
    display: inline-block;
    padding-right: 28px;

    svg {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-60%);
      height: 20px;
      width: 20px;
    }
  }


//  right side

  &.-right {
    .featured-content {
      &.left {
        text-align: right;
      }
    }
    figure {
      margin-left: 0px;
      left: 0px;
      margin-right: 72px;
      right: -24px;
    }
  }



// 480

  @media only screen and (min-width: 480px) {
    figure {
      margin-left: 86px;
    }

    &.-right {
      figure {
        margin-left: 0px;
        margin-right: 86px;
      }
    }
  }


// 768

  @media only screen and (min-width: 768px) {

    .site-content-width {
      display: flex;
    }
    .featured-content {
      &.left {
        width: 53%;
      }
      &.right {
        padding-top: 64px;
        width: 40%;
        margin: 0 0 0 5%;
      }
    }
    figure {
      top: -38px;
      margin-left: 50px;
    }

    &.-right {
      .site-content-width {
        flex-direction: row-reverse;
      }
      .featured-content {
        &.right {

          margin: 0 5% 0 0;
        }
      }
      figure {
        margin-left: 0px;
        margin-right: 50px;
      }
    }




  }


// 1280

  @media only screen and (min-width: 1280px) {

    .featured-content {
      &.left {
        width: 71%;
      }
      &.right {
        padding-top: 144px;
        width: 30%;
        margin: 0 0 0 5%;
      }
    }
    figure {
      margin-left: 116px;
     top: -80px;
     left: -48px;
    }

    .featured-header{
      font-size: 72px;
    }

    &.-right {
      figure {
        margin-left: 0px;
        margin-right: 116px;
      }
    }

  }


}
</style>



