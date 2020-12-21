<template>
  <div class="common-ground">

    <!-- NAV -->
    <div class="cg-nav" @click="toTop()">
     <nuxt-link :to="'/'">Home</nuxt-link><br>
   <!--   <nuxt-link :to="'/wave'">Wave</nuxt-link><br> -->

  <!--    <nuxt-link :to="'/case'">Case</nuxt-link><br> -->
     <nuxt-link :to="'/expertise'" >Expertise</nuxt-link><br>
     <nuxt-link :to="'/cases'">Cases</nuxt-link><br>
     <nuxt-link :to="'/case'">Case</nuxt-link>
    </div>

    <div class="cg-container">


    <Hero />

      <!-- Nuxt -->
      <Nuxt />

      <!-- Footer -->
      <div class="cg-footer">
          <svg class="bcg-blob" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  viewBox="0 0 1440 537">
            <g clip-path="url(#clip0)">
              <path d="M31.7 54.7c163.5-94 235.5-12.2 474.4-12.2 240 0 240-30.2 478.9-30.2 238.8 0 305.1-49.2 468.6 44.9 174.8 100.3 49.1 132.2 49.1 269.4s133.7 173.5-40 273.7c-163.4 94.1-237.7 16-477.7 16s-240 1.9-479 1.9c-240 0-325.7 82.4-489.1-11.7-175-99-12.6-136.6-64-270.7-53.8-142-96-180.8 78.8-281z" fill="#000" />
            </g>
            <defs>
              <clipPath id="clip0">
                <path fill="#fff" transform="translate(-94)" d="M0 0h1647v652H0z" />
              </clipPath>
            </defs>
          </svg>
      </div>

    </div>

  </div>
</template>

<script>

  export default {
    methods: {
      toTop() {

        const anime = this.$anime
        const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;

        anime({
          targets: scrollElement,
          scrollTop: 0,
          duration: 375,
          easing: 'easeInOutQuad'
        });
      }
    }
  }



</script>

<style lang="scss">
  html,
  body {
    min-height: 100vh;
    margin: 0;
  }

  figure {
    padding: 0;
    margin: 0;
  }

  .cg-container {
    display: flex;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .cg-page {
    background: #fff;
    flex: 1;
    padding: 0 0 128px;
  }

  .cg-nav {
    text-align: right;
    padding: 8px;
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 10;
    a {
      display: inline-block;
      text-decoration: none;
      text-align: right;
      padding: 4px 4px 4px 16px;
      margin: 4px;
      background: yellow;
    }

  }

  .cg-footer {
    height: 400px;
    position: relative;
    .bcg-blob {
      position: absolute;
      bottom: 0;
      z-index: -1;
      height: 400px;
      width: 100vw;
    }
  }







</style>
