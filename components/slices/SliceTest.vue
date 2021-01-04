<template>
  <section class="slice-test">
    <div class="site-content-width">

      <prismic-rich-text :field="slice.primary.header1" />
      <prismic-rich-text :field="slice.primary.header2" />
      <prismic-rich-text :field="slice.primary.text1" />

    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-test'

}
</script>



