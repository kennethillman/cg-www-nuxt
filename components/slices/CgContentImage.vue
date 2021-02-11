<template>
  <section class="cg-edt-content-image" :class="['-width-'+slice.primary.width]">
    <div class="case-content-width">

      <figure class="content-image" v-if="Object.keys(slice.primary.image.desktop).length > 0">
        <ImageResponsive class="featured-browser" :image="slice.primary.image" />
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

  padding: 0 0 32px;

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




// 768

  @media only screen and (min-width: 768px) {

    .content-image {
      width: 120%;
      transform: translateX(-4%);
    }

    &.-width-screen {
      .content-image {
        margin-left: 40px;
      }
    }

  }


// 1024

  @media only screen and (min-width: 1024px) {

    .content-image {
      width: 160%;
      transform: translateX(-14%);
    }

    &.-width-screen {
      .content-image {
        margin-left: 70px;
      }
    }

  }


// 1280

  @media only screen and (min-width: 1280px) {

    font-size: 20px;

    &.-width-screen {
      .content-image {
        max-width: 1440px;
        margin-left: 120px;
      }
    }

  }

}
</style>



