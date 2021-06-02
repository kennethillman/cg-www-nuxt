<template>
  <figure class="cg-image-respnsive" >

    <template v-if="imageMobile.dimensions">

      <mq-layout :mq="['VP320', 'VP600', 'VP768']">
        <img
          :srcSet="imageMobile.url"
          :alt="image.alt"
          class="img-mobile"
        />
      </mq-layout>
      <mq-layout :mq="['VP1024', 'VP1280']">
        <img
          :srcSet="image.desktop.url"
          :alt="image.alt"
        />
      </mq-layout>

    </template>

    <template v-else>
      <img
        :srcSet="image.desktop.url"
        :alt="image.alt"
      />
    </template>

  </figure>
</template>

<script type="text/javascript">
  export default {
    props:['image', 'imageMobile'],
  }
</script>

<style lang="scss">

  .cg-image-respnsive {
    text-align: center;
    .img-mobile {
      max-height: 640px;
      max-width: 100%;
      height: auto;
      width: auto;
      margin-left: auto;
      margin-right: auto;
    }
  }

</style>
