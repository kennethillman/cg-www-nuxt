<template>
  <section class="slice-test-name">
    <div class="site-content-width">
       <prismic-rich-text class="header" :field="slice.primary.header1"/>
    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-test-name',
}
</script>



