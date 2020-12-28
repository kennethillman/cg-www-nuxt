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
  name: 'slice-test',
  methods : {
    setHero() {
      let newHero = {
        header1: this.slice.primary.header1[0].text,
        header2: this.slice.primary.header2[0].text,
        text: this.slice.primary.text1[0].text
      }
      console.log(newHero)

      this.$store.dispatch('setHero', newHero)
    }
  },
  mounted () {
    this.setHero()
  }

}
</script>



