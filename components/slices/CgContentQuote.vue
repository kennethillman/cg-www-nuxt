<template>
  <section class="cg-edt-content-quote" >
    <div class="case-content-width">

      <div class="quote-the">
        <figure class="quote-mark">”</figure>
        <div class="quote-text" v-if="slice.primary.quote.length > 0 !== ''">
          {{slice.primary.quote[0].text}}
          <span class="quote-who" v-if="slice.primary.who.length > 0">
            {{slice.primary.who[0].text}}
          </span>
        </div>

      </div>

      <figure class="content-image" v-if="Object.keys(slice.primary.image.desktop).length > 0">
        <ImageResponsive class="featured-browser" :image="slice.primary.image" />
      </figure>

    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-edt-content-quote'
}
</script>

<style lang="scss">

.cg-edt-content-quote {

  padding: 56px 0 32px;
  font-family: $font-cg;
  font-weight: bold;


  .case-content-width {
      position: relative;
  }

  .quote-the {
    position: relative;
    z-index: 1;
    padding: 16px 24px 32px;
  }

  .quote-text {
    font-size: 24px;
    line-height: 1.5;
    color: $blue;
  }

  .quote-mark {
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 80px;
    line-height:1;
    color: $yellow;
    z-index: -1;
  }

  .content-image {
    filter: drop-shadow(10px 10px 56px rgba(0, 0, 0, 0.2));
  }


// 768

  @media only screen and (min-width: 768px) {

    .content-image {
      width: 120%;
      transform: translateX(-4%);
    }

  }


// 1024

  @media only screen and (min-width: 1024px) {

    .content-image {
      width: 120%;
      transform: translateX(-7%);
    }

  }

  // 1280

  @media only screen and (min-width: 1280px) {

    .content-image {
      width: 120%;
    }

    .quote-text {
      font-size: 40px;
    }

    &.-image-right {
      .quote-the {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        width: 90%;
        padding-right: 160px;
        box-sizing: border-box;
      }
      .content-image {
        transform: translateX(98%);
      }
    }

    &.-image-left {

      .content-image {
        transform: translateX(-32%);
      }
    }

    &.-no-image {
      .quote-the {
        position: relative;
        transform: translateY(0);
        padding-right: 0px;
        width: 160%;
        transform: translateX(-14%);
      }
    }



  }

}
</style>



