<template>
  <section class="cg-edt-content cg-spacing">
    <div class="case-content-width" :class="['-pos-' + slice.primary.position_text, '-text-pos-' + slice.primary.text_vertical]">

      <div class="col">
        <prismic-rich-text :field="slice.primary.content" />
      </div>
      <div class="col">
        <figure class="content-image" v-if="Object.keys(slice.primary.image.desktop).length > 0">
          <ImageResponsive class="featured-browser" :image="slice.primary.image" />
          <div class="content-image-text" v-if="slice.primary.image_text.length > 0 && slice.primary.image_text[0].text !== ''">
            {{slice.primary.image_text[0].text}}
          </div>
        </figure>
      </div>


    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-edt-content'
}
</script>

<style lang="scss">

.cg-edt-content {

  font-size: 18px;
  font-family: $font-apercu;
  line-height: 1.4; // (22px/30px desktop enligt spec = 1.4)
  color: $blue;
  * {
    color: $blue;
  }

  h2,h3,h4 {
    padding-bottom: 16px;
    padding-top: 0;
    margin: 0;
    font-family: $font-sangbleu;
  }

  p {
    margin-bottom: 24px;
  }

  .case-content-width {
    max-width: 800px;
    margin: 0 auto;
  }

  ul {
    padding: 16px 0 24px;
  }

  li {
    position: relative;

    font-size: 24px;
    line-height: 1.6;
    padding: 12px 0;
    padding-left: 24px;
    color: $blue;
    font-weight: bold;
    box-sizing: content-box;

    &:before {
      content: "";
      background-color: $red;
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 8px;
      position: absolute;
      top: 50%;
      left: 4px;
      transform: translateY(-60%);
    }
  }

  .-text-white &{
    li {
      color: $white;
      &:before {
        background-color: $white;
      }
    }

  }

    .-text-black &{
    li {
      color: $black;
      &:before {
        background-color: $black;
      }
    }

  }





  // Images
  .-portrait {
    img {
      max-height: 400px;
      width: auto;
      margin: 0 auto;
      display: block;
    }
  }


// 600

  @media only screen and (min-width: 600px) {

    // Images
    .-portrait {
      img {
        max-height: 500px;
      }
    }

  }



// 768

  @media only screen and (min-width: 768px) {

    h2,h3,h4 {
      padding-bottom: 20px;
      padding-top: 0;
    }

    .case-content-width {
      box-sizing: content-box;
    }

    // Images
    .-portrait {
      img {
        max-height: 600px;
      }
    }


  }


// 1024

  @media only screen and (min-width: 1024px) {






    .-pos-center {
      // Images
      .-portrait {
        img {
          max-height: 680px;
        }
      }
    }

    .-pos-left,
    .-pos-right {
      display: flex;
      max-width: none;
      justify-content: space-between;
      .col {
        width: 46%;
        display: flex;
        align-items: center;

      }

      figure {
        margin-left: auto;
        margin-right: auto;
      }

      .-portrait {
        img {
          max-height: 420px;
        }
      }

    }

    .-pos-right {
      flex-direction: row-reverse;
    }

    .-text-pos-top {
      .col {
            align-items: flex-start;
      }
    }

  }

  // 1280

  @media only screen and (min-width: 1280px) {

    font-size: 22px;

    h2,h3,h4 {
      padding-bottom: 24px;
      padding-top: 0;
    }





  }

}
</style>



