<template>
  <section class="cg-edt-content-image cg-spacing" :class="['-width-'+slice.primary.width]">
    <div class="case-content-width">

      <figure class="content-image" v-if="Object.keys(slice.primary.image.desktop).length > 0">
        <ImageResponsiveCase class="featured-browser" :image="slice.primary.image" :imageMobile="slice.primary.image_mobile" />
        <div class="content-image-text" v-if="slice.primary.image_text.length > 0 && slice.primary.image_text[0].text !== ''">
          {{slice.primary.image_text[0].text}}
        </div>
      </figure>

    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-edt-content-image'
}
</script>

<style lang="scss">

.cg-edt-content-image {

  // padding: 0 0 32px;

  .content-image {
    width: 100%;
  }

  &.-width-content {
    .content-image {
      filter: drop-shadow(10px 10px 56px rgba(0, 0, 0, 0.2));
    }
  }

  &.-width-screen {
    .content-image {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 100vw;
    }
  }

  .case-content-width {
    max-width: none;
  }




// 768

  @media only screen and (min-width: 768px) {

    .content-image {
      // width: 120%;
      //transform: translateX(-4%);
    }

    &.-width-screen {
      .content-image {
        // margin-left: 40px;
      }
    }

  }


// 1024

  @media only screen and (min-width: 1024px) {

    .content-image {
      // width: 160%;
     // transform: translateX(-14%);
    }

    &.-width-screen {
      .content-image {
       // margin-left: 70px;
      }
    }

  }


// 1280

  @media only screen and (min-width: 1280px) {

    font-size: 20px;

    &.-width-screen {
      .content-image {
        max-width: 1920px;
       // margin-left: 120px;
      }
    }

  }

}
</style>



