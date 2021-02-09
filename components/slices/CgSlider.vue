<template>
  <section class="cg-slider">
    <div class="site-content-width">

      <div class="cg-header-group">
        <h2
             v-if="slice.primary.header1[0].text !== ''"
             v-waypoint="{ active: true, callback: triggerFade }"
             class="cg-group-header -animate-fade-in-up"
          >{{slice.primary.header1[0].text}}
        </h2>
        <h3
             v-if="slice.primary.sub_header[0].text !== ''"
             v-waypoint="{ active: true, callback: triggerFade }"
             class="cg-group-sub-header  -animate-fade-in-up"
          >{{slice.primary.sub_header[0].text}}
        </h3>
      </div>



      <hooper ref="carousel" :transition="375" :shortDrag="false" :wheelControl="false" :settings="hooperSettings" class="-animate-fade-in-up" v-waypoint="{ active: true, callback: triggerFade }">
        <slide class="cg-slide"  v-for="(item, index) in slice.items" :key="index+'item'">

            <!-- LINK -->
            <template v-if="item.link.uid || item.link.url">
              <div class="slide-body">
                <figure @click.stop="slideNext">

                  <template v-if="item.image">
                    <ImageResponsive class="featured-browser" :image="item.image" />
                  </template>

                  <template v-if="item.header1.length > 0 && item.header1[0].text !== ''  || item.text.length > 0 && item.text[0].text !== '' ">
                    <prismic-link :field="item.link"  class="slide-box" :class="['-bg-'+ item.color_background]">
                      <h4 class="box-header" v-if="item.header1.length > 0 && item.header1[0].text !== ''" :class="['-text-'+ item.color_header]">
                        {{item.header1[0].text}}
                      </h4>
                      <p v-if="item.text.length > 0 && item.text[0].text !== '' ">
                        {{item.text[0].text}}
                      </p>
                    </prismic-link>
                  </template>
                </figure>
              </div>
            </template>

            <!-- NO LINK -->
            <template v-else>
              <div class="slide-body" @click="slideNext">
                <figure>

                  <template v-if="item.image">
                    <ImageResponsive class="featured-browser" :image="item.image" />
                  </template>

                  <template v-if="item.header1.length > 0 && item.header1[0].text !== ''  || item.text.length > 0 && item.text[0].text !== '' ">
                    <div class="slide-box" :class="['-bg-'+ item.color_background]">
                      <h4 class="box-header" v-if="item.header1.length > 0 && item.header1[0].text !== ''" :class="['-text-'+ item.color_header]">
                        {{item.header1[0].text}}
                      </h4>
                      <p v-if="item.text.length > 0 && item.text[0].text !== '' ">
                        {{item.text[0].text}}
                      </p>
                    </div>
                  </template>
                </figure>
              </div>
            </template>

        </slide>
        <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->

      </hooper>


    </div>

        <!-- Background Blob -->

        <svg class="bg-blob" preserveAspectRatio="none" width="1440" height="948" viewBox="0 0 1440 948" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-29.7239 59.5796C146.147 -41.8132 223.629 46.3894 480.672 46.3894C738.945 46.3894 738.945 13.8534 995.988 13.8534C1253.03 13.8534 1324.36 -39.1624 1500.23 62.2304C1688.4 170.25 1553.12 204.71 1553.12 352.492C1553.12 500.274 1697.01 780.709 1510.07 888.728C1334.2 990.121 1225.24 937.403 995.988 905.958C742.094 871.133 737.715 907.947 480.672 907.947C222.399 907.947 130.159 996.748 -45.7122 895.355C-233.882 788.661 -59.2408 506.901 -114.585 362.432C-172.389 209.349 -217.894 167.599 -29.7239 59.5796Z" fill="#FFC9CA"/>
        </svg>



  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-slider',
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        breakpoints: {
          768: {
            itemsToShow: 3
          }
        }
      }
    };
  },
  methods: {
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    triggerFade ({ el, going, direction }) {

    if (this.$waypointMap.GOING_IN === going) {

      el.classList.add('-animate')
     }

    },
  }

}
</script>

<style lang="scss">

.cg-slider {
  position: relative;
  padding: 50px 0 0;
  margin: 100px 0 100px;

  img {
    display: block;
    * &:focus {
        outline: none!important;
      }
  }

  .hooper {
    height: auto;
        &:focus {
        outline: none;
        border: none;
      }
  }

  .hooper-list {
    overflow: visible;
    &:focus {
        outline: none;
        border: none;
      }
  }

  .hooper-track {
      &:focus {
        outline: none;
        border: none;
      }
  }


  .cg-slide {
    padding:10px;
  }

  .slide-body {
    text-decoration: none;
  }

  .slide-box {
    padding: 24px;
    width: 100%;
    color: $white;
    font-size: 18px;
    display: block;
    text-decoration: none;
    .box-header {
      font-size: 40px;
    }
  }

  figure {
    position: relative;
  }

  .bg-blob {
    width: 100vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50vw, -46%);
    z-index: 0;
    height: 120%;
  }



// 480

  @media only screen and (min-width: 480px) {

  }


// 768

  @media only screen and (min-width: 768px) {


      padding: 100px 0 50px;




  }


// 1280

  @media only screen and (min-width: 1280px) {




  }


}
</style>



