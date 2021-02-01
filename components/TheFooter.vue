<template>

      <div class="cg-the-footer">

        <!-- Header & Text -->
        <div class="site-content-width">
          <h2
               v-if="footer.header[0].text !== ''"
               v-waypoint="{ active: true, callback: triggerFade }"
               class="footer-header -animate-fade-in-up -delay-one"
            >{{footer.header[0].text}}
          </h2>
          <prismic-rich-text
            v-if="footer.text[0].text !== ''"
            v-waypoint="{ active: true, callback: triggerFade }"
            class="footer-text -animate-fade-in-up -delay-two"
            :field="footer.text"
          />
        </div>


        <!-- Logo -->
        <nuxt-link
          v-waypoint="{ active: true, callback: triggerFade }"
          class="cg-logo -animate-fade-in-up -delay-three" :to="'/'">

          <svg width="68" class="cg-the-logo" height="40" viewBox="0 0 68 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.7557 39.9545C9.62422 39.9545 0.577759 31.0425 0.577759 20.0792C0.577759 9.1158 9.62422 0.203857 20.7557 0.203857C25.7498 0.203857 30.5084 2.00306 34.2077 5.26517C37.907 2.00306 42.6657 0.203857 47.6597 0.203857C58.7744 0.203857 67.8377 9.1158 67.8377 20.0792C67.8377 31.0425 58.7912 39.9545 47.6597 39.9545C42.6657 39.9545 37.907 38.1553 34.2077 34.8932C30.5084 38.1553 25.7498 39.9545 20.7557 39.9545ZM20.7557 1.41454C10.28 1.41454 1.77162 9.78839 1.77162 20.0792C1.77162 30.3699 10.28 38.7438 20.7389 38.7438C25.6153 38.7438 30.2562 36.9278 33.7873 33.632C34.0228 33.4134 34.3759 33.4134 34.6113 33.632L34.6785 33.6993C38.2097 36.9614 42.817 38.7606 47.6597 38.7606C58.1186 38.7606 66.627 30.3867 66.627 20.096C66.627 9.80521 58.1186 1.43135 47.6597 1.43135C42.7834 1.43135 38.1424 3.24737 34.6113 6.54311C34.3759 6.7617 34.0228 6.7617 33.7873 6.54311C30.2562 3.23055 25.6321 1.41454 20.7557 1.41454Z" fill="#004A84"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2226 27.8308C11.1039 25.7793 10.0446 23.2066 10.0446 20.1295C10.0446 17.0187 11.1039 14.446 13.2394 12.361C15.3581 10.2759 18.0149 9.2334 21.2097 9.2334C25.0771 9.2334 28.0702 10.6795 30.1889 13.5885L25.7834 16.9515C24.455 15.3204 22.908 14.5133 21.1593 14.5133C19.7132 14.5133 18.5025 15.0514 17.544 16.1107C16.5856 17.1701 16.1148 18.4816 16.1148 20.0286C16.1148 21.6765 16.5856 23.0049 17.5272 24.0642C18.4689 25.1236 19.6795 25.6616 21.1593 25.6616C22.185 25.6616 23.0593 25.443 23.7824 25.0227C24.5054 24.6023 25.2285 23.9633 25.9347 23.1394L30.3402 26.2333C29.2304 27.7299 27.9357 28.8733 26.4728 29.6972C25.0099 30.5212 23.1602 30.9415 20.9743 30.9415C17.914 30.9247 15.3413 29.899 13.2226 27.8308Z" fill="#004A84"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M40.0256 27.8812C37.8397 25.8634 36.7467 23.2739 36.7467 20.1464C36.7467 17.0356 37.8229 14.4629 39.992 12.3778C42.1611 10.2928 44.8683 9.25024 48.1304 9.25024C51.4766 9.25024 54.3352 10.2591 56.7061 12.2938L53.259 16.3798C51.6616 15.0682 49.9633 14.4124 48.1473 14.4124C46.6171 14.4124 45.3223 14.9673 44.2966 16.0771C43.2541 17.1869 42.7328 18.5321 42.7328 20.1295C42.7328 21.8783 43.2709 23.2571 44.3471 24.3501C45.4232 25.4263 46.8021 25.9811 48.4667 25.9811C49.8288 25.9811 50.9722 25.6953 51.9138 25.1236V22.5341H47.6596V18.3135H57.4459V27.7467C54.806 29.899 51.7457 30.9584 48.265 30.9584C44.9524 30.9248 42.2116 29.9159 40.0256 27.8812Z" fill="#004A84"/>
            </svg>

            <svg viewBox="0 0 200 200" class="cg-blob-pink"  xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC9CA" d="M41,-75.4C50.2,-65.8,52.6,-48.8,55.6,-35C58.6,-21.2,62.2,-10.6,60.6,-0.9C59.1,8.8,52.5,17.6,47.4,27.9C42.4,38.2,39,50,31.4,54.1C23.8,58.2,11.9,54.6,-2.3,58.6C-16.5,62.6,-33,74.1,-42,70.8C-50.9,67.5,-52.4,49.3,-58.6,35C-64.9,20.7,-75.9,10.4,-74.3,1C-72.6,-8.5,-58.3,-16.9,-52,-31.2C-45.8,-45.5,-47.6,-65.6,-40.3,-76.3C-33,-87,-16.5,-88.3,-0.3,-87.8C15.9,-87.3,31.9,-85.1,41,-75.4Z" transform="translate(100 100)"/>
            </svg>

            <svg viewBox="0 0 200 200" class="cg-blob-yellow"  xmlns="http://www.w3.org/2000/svg">
              <path fill="#E6FF00" d="M29.3,-50.1C40.4,-44.2,53.7,-41.5,65.8,-33.6C77.9,-25.8,88.7,-12.9,85.2,-2C81.6,8.8,63.7,17.6,51.4,25.1C39.2,32.6,32.6,38.9,25,46.8C17.4,54.6,8.7,64.2,-1,65.8C-10.6,67.5,-21.2,61.3,-33.2,55.9C-45.3,50.6,-58.7,46.1,-63.2,37C-67.7,27.8,-63.2,13.9,-63.4,-0.1C-63.6,-14.1,-68.5,-28.3,-66.1,-41C-63.7,-53.7,-53.9,-65.1,-41.7,-70.4C-29.4,-75.7,-14.7,-74.9,-2.8,-70C9,-65.1,18.1,-56,29.3,-50.1Z" transform="translate(100 100)"/>
            </svg>

        </nuxt-link>


        <!-- Background & Svg Wave -->
        <svg class="bg-blob " fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  viewBox="0 0 1440 537">
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


</template>

<script>

  export default {
    data() {
      return {
          blob: 1,
          menu: this.$store.getters.getTheMenu,
          footer: this.$store.getters.getTheFooter
      }
    },
    watch: {
      $route() {
        if (this.blob === 3) {
          this.blob = 1;
        } else {
          this.blob ++
        }
        this.animateLogoBlobs();
      },
    },
    methods: {
      triggerFade ({ el, going, direction }) {
        if (this.$waypointMap.GOING_IN === going) {
          el.classList.add('-animate')
        }
      },
      toTop() {
        const anime = this.$anime
        const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;

        anime({
          targets: scrollElement,
          scrollTop: 0,
          duration: 375,
          easing: 'easeInOutQuad'
        });
      },

    },
    mounted() {

    }
  }



</script>



<style lang="scss">

  .cg-the-footer {
    height: 400px;
    position: relative;
    color: $white;
    padding: 80px 0 0;


    .bg-blob {
      position: absolute;
      bottom: 0;
      z-index: -1;
      height: 400px;
      width: 100vw;
    }

    .footer-header {
      margin: 0 0 32px;
      font-size: 40px;
      font-family: $font-cg-2;
      line-height: 1.1;
      color: $white;
      text-align: center;
    }

    .footer-text {
      max-width: 620px;
      margin: 0 auto 32px;
      font-size: 18px;
      line-height: 1.8;
      text-align: center;
      font-family: $font-cg;
      p {
        margin-bottom: 0;
      }
      a {
        white-space: nowrap;
      }
    }


    // Logo

    .cg-logo {
      display: block;
      width: 90px;
      margin: 22px auto 0;
      position: relative;

    }
    .cg-the-logo {
      width: 100%;
      position: relative;
      z-index: 3;
    }

    .cg-blob-yellow,
    .cg-blob-pink {
      width: 100%;
      position: absolute;
      top: 54%;
      transform: translateY(-54%);
    }
    .cg-blob-yellow {

      z-index: 2;
      left: 26%;

    }
    .cg-blob-pink {
      z-index: 1;
      right: 26%;
    }


  }



  .cg-footer {


    .footer-body {
      max-width: 1280px;
      margin: 0 auto;
    }
     .cg-logo {
      display: block;
      width: 90px;
      margin: 22px auto 0;
      position: relative;

    }
    .cg-the-logo {
      width: 100%;
      position: relative;
      z-index: 3;
    }

    .cg-blob-yellow,
    .cg-blob-pink {
      width: 100%;
      position: absolute;
      top: 54%;
      transform: translateY(-54%);
    }
    .cg-blob-yellow {

      z-index: 2;
      left: 26%;

    }
    .cg-blob-pink {
      z-index: 1;
      right: 26%;
    }


    @include VP1024 {

      .cg-logo {
        width: 125px;
        margin: 40px 48px 0;
      }
    }

  }
</style>



