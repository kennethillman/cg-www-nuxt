<template>
  <section class="cg-edt-content-image-image"

      :class="['-images-'+slice.items.length]"
    >
    <!-- :style="[slice.primary.background_slice ? {'background': slice.primary.background_slice} : {'background': 'transperent'}]" -->


      <div class="col" v-for="(item, index) in slice.items" :key="'item-' + index"

      >
      <!--  :style="[item.background_image ? {'background': item.background_image} : {'background': 'transperent'}]" -->

        <figure >
          <ImageResponsive class="image" :image="item.image" />
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

.cg-edt-content-image-image {


    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    max-width: 1920px;

    .image {
      display: block;
      padding: 24px;
    }



    img {
      max-height: 640px;
      max-width: 100%;
      height: auto;
      width: auto;
      margin-left: auto;
      margin-right: auto;
      display: block;
  }


  @media only screen and (min-width: 600px) {

    display: flex;
    flex-flow: wrap;
    padding: 0 24px;

    .image {
      display: block;
      padding: 0 24px 24px;
    }

    .col {
      width: 50%;
    }

  }

  @media only screen and (min-width: 768px) {

    display: flex;
    flex-flow: wrap;



    .image {
      display: block;
      padding: 32px;
    }

    .col {
      width: 50%;
    }

    &.-images-2 {
      .col {
        width: 50%;
      }
    }
    &.-images-3 {
      .col {
        width: 33.333%;
      }
    }
    &.-images-4 {
      .col {
        width: 25%;
      }
    }
    &.-images-5 {
      .col {
        width: 20%;
      }
    }
  }

    @media only screen and (min-width: 1280px) {




    .image {
      //padding: 0 32px 64px;
    }

  }


}
</style>



