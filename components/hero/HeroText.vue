<template>
  <div class="cg-hero-text" :class=" {'-show-text' : showText}"
    :style="[hero.text_color ? {'color': hero.text_color} : {'color': '#fff'}]"
  >

    <prismic-rich-text :field="hero.text1" />
  </div>
</template>

<script type="text/javascript">
   export default {
      props: ['hero'],
      data() {
        return {
          showText: false
        }
      },
      mounted() {
        setTimeout(() => {
          this.showText = true
         }, 250)

      }
    };
</script>

<style lang="scss">

  .cg-hero-text {
    opacity: 0;
    font-size: 18px;
    line-height: 32px;
    width: 100%;
    margin-bottom: 60px;
    color: #fff ;
    font-family: 'Prata', serif;
    position: relative;
    z-index: 2;
    transition: opacity .750s ease-in-out .250s;
    &.-show-text {
      opacity: 1;
    }
  }

</style>



