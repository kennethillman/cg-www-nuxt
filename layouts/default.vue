<template>
  <div class="common-ground" :class="[this.$store.getters.getClassAnimation]">

    <TheHeader />

    <div class="cg-container">

      <Hero />

      <Nuxt />

      <TheFooter />

    </div>

  </div>
</template>

<script type="text/javascript">
   export default {

      data() {
        return {
          hero: this.$store.getters.getHero,
          r: this.$route.fullPath,
          hideHeader: false,
          hero: this.$store.getters.getHero,
        }
      },
      watch: {
        classAnimation (){
        },
        $route() {

        },
      },
      computed: {

      },
      methods: {

      },
      mounted() {
        if (!this.$store.getters.getClassAnimation) {
          setTimeout(() => {
            this.$store.dispatch('setClassAnimation', '-tran-enter')
          }, 250)
        }
      }
    };
</script>

<style lang="scss">


  .cg-container {
    display: flex;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .cg-page {
    background: $gradient;
    flex: 1;
    padding: 0 0 $mm;
    position: relative;
    z-index: 10;

    // 768
    @media only screen and (min-width: 768px) {
      padding: 0 0 $mt;

    }

    // 1280
    @media only screen and (min-width: 1280px) {
      padding: 0 0 $md;
    }

    .container {
      > section {
        @include clearfix();
      }
    }

  }



</style>
