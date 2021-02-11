<template>
  <section class="cg-edt-content-video" :class="['-width-'+slice.primary.width]">
    <div class="case-content-width">

      <prismic-embed v-if="Object.keys(slice.primary.video_embed_url).length > 0" class="content-video" :field="slice.primary.video_embed_url" />

    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-edt-content-video'
}
</script>

<style lang="scss">

.cg-edt-content-video {

  padding: 0 0 32px;

  .content-video {
    @include aspect-ratio-iframe(4,3);
  }

// 768

  @media only screen and (min-width: 768px) {

    .content-video {
      width: 120%;
      transform: translateX(-4%);
    }

  }


// 1024

  @media only screen and (min-width: 1024px) {

    .content-video {
      width: 160%;
      transform: translateX(-14%);
    }

  }

}
</style>



