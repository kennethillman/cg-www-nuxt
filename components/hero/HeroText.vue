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
    line-height: 1.4;
    width: 100%;
    // margin-bottom: 60px;
    color: #fff ;
    font-family: $font-apercu;
    position: relative;
    z-index: 2;
    transition: opacity .750s ease-in-out .250s;
    max-width: 540px;
    &.-show-text {
      opacity: 1;
    }


// 768

  @media only screen and (min-width: 768px) {

    font-size: 22px;
    .cg-client {

    }

  }



// 1024

  @media only screen and (min-width: 768px) {

    max-width: 700px;


  }

// 1280

  @media only screen and (min-width: 1280px) {

    font-size: 26px;

    .cg-client {
      font-size: 26px;
    }

  }

  }

</style>



