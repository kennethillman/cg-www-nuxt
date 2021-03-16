<template>

      <!-- @mouseenter="mouseEnter" -->
      <div class="cg-the-footer" @mousemove="moveBlob">

        <!-- Header & Text -->
        <div class="site-content-width">
          <h2
               v-if="footer.header[0].text !== ''"
               v-waypoint="{ active: true, callback: triggerFade }"
               class="footer-header -animate-fade-in-up -delay-one"
            >
              <template v-if="text !== ''">
                {{text}}
              </template>
              <template v-else>
                {{footer.header[0].text}}
              </template>

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



          <div class="cg-nav-footer" @click="toTop()" >
            <ul class="-animate-fade-in-up -delay-four" v-waypoint="{ active: true, callback: triggerFade }">
              <template v-for="(item, index) in menu">
                <li
                  @mouseenter="startBlob"
                  @mouseleave="endBlob">
                    <nuxt-link :to="$prismic.asLink(item.link)">
                      {{$prismic.asText(item.label)}}
                    </nuxt-link>
                </li>
              </template>
            </ul>

            <div class="blob" ref="blob">
              <div class="blob-inner">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path class="morph" fill="#004A84" d="M31.9,-53.9C42.9,-48.8,54.7,-43.6,63.2,-34.6C71.7,-25.6,76.9,-12.8,79.2,1.4C81.6,15.5,81.1,31,72.2,39.3C63.3,47.6,46,48.7,32.6,56.6C19.2,64.4,9.6,79,-2.6,83.5C-14.7,88,-29.5,82.3,-40.8,73.2C-52,64.1,-59.8,51.6,-61.5,38.8C-63.2,26,-58.8,13,-59.3,-0.3C-59.8,-13.6,-65.3,-27.2,-61.8,-36.9C-58.3,-46.6,-45.9,-52.3,-34.1,-57C-22.3,-61.7,-11.2,-65.4,-0.4,-64.7C10.4,-64,20.8,-59,31.9,-53.9Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>

          </div>

          <!-- Background & Svg Wave -->
          <svg class="bg-wave " preserveAspectRatio="none"  viewBox="0 0 1400 300" enable-background="new 0 0 1400 300" xml:space="preserve">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.7 54.7c163.5-94 235.5-12.2 474.4-12.2 240 0 240-30.2 478.9-30.2 238.8 0 305.1-49.2 468.6 44.9 174.8 100.3 49.1 132.2 49.1 269.4s133.7 173.5-40 273.7c-163.4 94.1-237.7 16-477.7 16s-240 1.9-479 1.9c-240 0-325.7 82.4-489.1-11.7-175-99-12.6-136.6-64-270.7-53.8-142-96-180.8 78.8-281z" fill="#2F3437
"  />
          </svg>

      </div>


</template>

<script>

  export default {
    props:{
      text: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
          blob: 1,
          menu: '',
          footer: '',
          morph: null,
          rotate: null,
          paths: [
                    {
                        value:
                            "M32.9,-54.7C44.1,-50.5,55.7,-44.7,65.7,-35.3C75.7,-25.9,84,-13,82.7,-0.7C81.5,11.6,70.8,23.1,62.6,35.6C54.5,48.1,48.9,61.6,38.9,65.2C28.9,68.7,14.5,62.3,-0.6,63.4C-15.7,64.5,-31.5,73.1,-43.1,70.5C-54.8,68,-62.4,54.2,-68.3,40.6C-74.2,27,-78.4,13.5,-77.8,0.3C-77.3,-12.8,-71.9,-25.6,-62.4,-33.1C-53,-40.5,-39.4,-42.7,-28.3,-46.9C-17.2,-51.1,-8.6,-57.3,1.1,-59.3C10.8,-61.2,21.7,-58.8,32.9,-54.7Z"
                    },
                    {
                        value:
                            "M29.1,-48.9C38.3,-45,46.8,-38.5,52.3,-29.9C57.9,-21.3,60.5,-10.6,59.3,-0.7C58.2,9.3,53.3,18.6,47.2,26.3C41.1,34,33.9,40.1,25.8,44.4C17.8,48.7,8.9,51.2,-2.7,55.8C-14.2,60.5,-28.5,67.2,-38,63.8C-47.6,60.3,-52.4,46.7,-60.7,34.4C-69,22.1,-80.6,11,-78.5,1.2C-76.3,-8.5,-60.3,-17.1,-53.2,-31.3C-46,-45.6,-47.7,-65.6,-40.3,-70.4C-32.9,-75.3,-16.5,-65.1,-3.3,-59.4C9.9,-53.8,19.9,-52.7,29.1,-48.9Z"
                    },
                    {
                        value:
                            "M31.3,-46.5C45.5,-45.9,65.5,-47.6,69.7,-40.3C73.8,-32.9,62.2,-16.4,56.1,-3.5C50,9.4,49.4,18.8,46.4,28.2C43.4,37.7,38.1,47.2,30,52.8C21.8,58.4,10.9,60,-1.4,62.3C-13.7,64.7,-27.3,67.9,-40.5,65.2C-53.6,62.5,-66.2,54,-75.4,42.2C-84.6,30.4,-90.3,15.2,-84.7,3.2C-79.2,-8.8,-62.4,-17.5,-53,-29C-43.6,-40.4,-41.6,-54.5,-34,-59C-26.4,-63.4,-13.2,-58.2,-2.3,-54.1C8.5,-50.1,17,-47.2,31.3,-46.5Z"
                    },
                    {
                        value:
                            "M31.9,-53.9C42.9,-48.8,54.7,-43.6,63.2,-34.6C71.7,-25.6,76.9,-12.8,79.2,1.4C81.6,15.5,81.1,31,72.2,39.3C63.3,47.6,46,48.7,32.6,56.6C19.2,64.4,9.6,79,-2.6,83.5C-14.7,88,-29.5,82.3,-40.8,73.2C-52,64.1,-59.8,51.6,-61.5,38.8C-63.2,26,-58.8,13,-59.3,-0.3C-59.8,-13.6,-65.3,-27.2,-61.8,-36.9C-58.3,-46.6,-45.9,-52.3,-34.1,-57C-22.3,-61.7,-11.2,-65.4,-0.4,-64.7C10.4,-64,20.8,-59,31.9,-53.9Z"
                    },
                    {
                        value:
                            "M40.3,-63.9C54,-61.9,68,-54.7,77,-43.1C85.9,-31.6,89.7,-15.8,87,-1.6C84.3,12.7,75.1,25.3,67.1,38.5C59.1,51.8,52.5,65.5,41.5,68.1C30.5,70.7,15.3,62,-0.2,62.3C-15.6,62.7,-31.3,71.9,-40.4,68.3C-49.5,64.7,-52.1,48.1,-60.7,34.6C-69.3,21.1,-83.8,10.5,-88.5,-2.7C-93.3,-16,-88.2,-32,-76.9,-40.7C-65.5,-49.4,-47.9,-50.9,-34,-52.8C-20.1,-54.6,-10.1,-56.9,1.6,-59.7C13.3,-62.5,26.6,-65.9,40.3,-63.9Z"
                    },
                    {
                        value:
                            "M35.5,-65.3C46,-55.4,54.5,-45.9,61.3,-35.1C68.1,-24.3,73.2,-12.1,73.3,0.1C73.5,12.3,68.8,24.7,62.7,36.8C56.7,48.8,49.3,60.7,38.6,65.2C27.9,69.7,14,66.8,2.7,62.2C-8.7,57.6,-17.3,51.3,-31.5,48.9C-45.8,46.4,-65.5,47.8,-72.3,40.3C-79,32.8,-72.7,16.4,-69.3,2C-65.9,-12.5,-65.4,-25,-59.6,-34.1C-53.8,-43.3,-42.8,-49.1,-31.9,-58.8C-21.1,-68.6,-10.6,-82.3,1,-83.9C12.5,-85.6,24.9,-75.2,35.5,-65.3Z"
                    },
                    {
                        value:
                            "M36.2,-68.3C44.8,-57.6,48.4,-43.8,54.3,-31.9C60.1,-20,68.2,-10,69.8,0.9C71.3,11.8,66.2,23.5,58.3,31.8C50.3,40.1,39.6,45,29.4,54.6C19.2,64.3,9.6,78.7,-3.3,84.4C-16.2,90.2,-32.5,87.3,-44.1,78.5C-55.8,69.7,-62.8,55,-63.5,40.9C-64.3,26.9,-58.8,13.4,-61.5,-1.6C-64.3,-16.6,-75.3,-33.2,-71.2,-41.4C-67,-49.6,-47.7,-49.4,-33.3,-56.8C-19,-64.2,-9.5,-79.1,2.1,-82.8C13.7,-86.5,27.5,-79,36.2,-68.3Z"
                    },
                    {
                        value:
                            "M31.9,-53.9C42.9,-48.8,54.7,-43.6,63.2,-34.6C71.7,-25.6,76.9,-12.8,79.2,1.4C81.6,15.5,81.1,31,72.2,39.3C63.3,47.6,46,48.7,32.6,56.6C19.2,64.4,9.6,79,-2.6,83.5C-14.7,88,-29.5,82.3,-40.8,73.2C-52,64.1,-59.8,51.6,-61.5,38.8C-63.2,26,-58.8,13,-59.3,-0.3C-59.8,-13.6,-65.3,-27.2,-61.8,-36.9C-58.3,-46.6,-45.9,-52.3,-34.1,-57C-22.3,-61.7,-11.2,-65.4,-0.4,-64.7C10.4,-64,20.8,-59,31.9,-53.9Z"
                    }
                ]
      }
    },
    async fetch() {
      const footer = await this.$prismic.api.getSingle('footer')
      this.footer = footer.data;

       // Getting the footer menu from Prismic.io
      const menuFooter = await this.$prismic.api.getSingle('menu_footer')
      this.menu = menuFooter.data.menu_links;
    },
    methods: {
      moveBlob(event) {
        this.$refs.blob.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      },
      startBlob(event) {
        if (this.$mq === 'VP320' || this.$mq === 'VP600') {
          return
        }
        this.$refs.blob.classList.add('is-active')
        this.morph.restart();
        this.morph.play();
        this.rotate.restart();
        this.rotate.play();
      },
      endBlob(event) {
        if (this.$mq === 'VP320' || this.$mq === 'VP600') {
          return
        }
        this.$refs.blob.classList.remove('is-active')
        this.morph.pause();
        this.rotate.pause();
      },
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
    mounted (){

      if (this.$mq === 'VP320' || this.$mq === 'VP600') {
        return
      }

      this.morph = this.$anime({
        targets: ".morph",
        d: this.paths,
        easing: "easeInOutSine",
        duration: 4000,
        loop: true,
        autoplay: false
      });

      this.rotate = this.$anime({
        targets: ".blob svg",
        easing: "linear",
        duration: 14000,
        rotate: [0, 360],
        scale: 2,
        loop: true,
        direction: "alternate",
        autoplay: false
      });

    }
  }



</script>



<style lang="scss">

.cg-the-footer {

  position: relative;
  color: $white;
  padding: 80px 0;
  overflow: hidden;
  background-color: #FCF4FF;

  .site-content-width {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding: 48px 24px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2F3437;
  }

  .cg-nav-footer {
    position: relative;
    z-index: 3;
    padding: 0;

    .blob {
      position: fixed;
      pointer-events: none;
      top: -25px;
      left: -25px;
      z-index: -1;
      .blob-inner {
        transition: 150ms;
        transform-origin: center center;
        transform: scale(0);

      }
      &.is-active {
        .blob-inner{
          transform: scale(1);
        }
      }
      svg {
        width: 50px;
        height: 50px;
      }
    }

    ul{
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      max-width: 1280px;
      margin: 0 auto;
    }

    li {
      padding: 15px 5px;
      margin: 0 15px;
    }

    a {
      color: $white;
      font-family: $font-apercu;
      font-size: 16px;
      text-decoration: none;
      &:hover,
      &:active {
        color: $yellow;
      }
    }
  }

  .site-content-width {
    position: relative;
    z-index: 2;
    padding-bottom: 0;
  }


  .bg-wave {
    position: absolute;
    top: 0;
    z-index: 1;
    height: 400px;
    width: 100vw;
  }

  .footer-header {
    margin: 0 0 32px;
    font-size: 32px;
    font-family: $font-machina;
    line-height: 1.1;
    color: $white;
  }

  .footer-text {
    max-width: 620px;
    margin: 0 0 48px;
    padding: 0;
    font-size: 18px;
    line-height: 1.8;
    text-align: left;
    font-family: $font-apercu;
    p {
      margin-bottom: 0;
    }
    a {
      white-space: nowrap;
      &:hover,
      &:active {
        color: $yellow;
      }
    }
  }


  // Logo

  .cg-logo {
    display: none;
    width: 90px;
    margin: 22px auto 0;
    position: relative;
    z-index: 3;

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


// 768

  @media only screen and (min-width: 768px) {
    padding: 120px 0;

    .cg-nav-footer {

    }

    .footer-header {
      font-size: 40px;
    }

  }

}


</style>



