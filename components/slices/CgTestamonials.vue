<template>
  <section class="cg-testamonials cg-spacing">
    <div class="site-content-width">

      <div class="cg-header-group">
        <h2
             v-if="slice.primary.header1[0].text !== ''"
             v-waypoint="{ active: true, callback: animateTriggerFade }"
             class="cg-group-header -animate-fade-in-up"
          >{{slice.primary.header1[0].text}}
        </h2>
        <h3
             v-if="slice.primary.sub_header[0].text !== ''"
             v-waypoint="{ active: true, callback: animateTriggerFade }"
             class="cg-group-sub-header  -animate-fade-in-up"
          >{{slice.primary.sub_header[0].text}}
        </h3>
      </div>

      <hooper ref="sliderTestamonials" :settings="hooperSettings" :wheelControl="false" :infiniteScroll="true"  :transition="1000"  @afterSlide="evAfter" @slide="evSlide"
          :class="[{'is-sliding' : this.sliding}]" >

        <slide class="cg-testamonial" v-for="(item, index) in slice.items" :key="index+'item'" :class="['-fill-'+item.color, '-text-'+item.color]">

          <div class="testamonial-body" @click.stop="slideNext">
            <svg class="testamonial-svg" width="120" height="56" viewBox="0 0 120 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M3.10003 10.1998C9.50002 6.59975 18.3 1.69975 25.4 6.59975C30.7 10.1998 30.8 16.5998 32.9 21.9998C34.4 25.8998 37.4 27.6998 41.5 26.1998C44 25.2998 46.5 23.6998 48.8 22.2998C51.5 20.6998 54.9 17.1998 57.9 16.0998C61.7 14.7998 62.5 19.5998 63.8 22.2998C65 24.6998 66.3 26.9998 67.9 29.1998C70.7 33.2998 74.3 36.7998 78.8 39.0998C84.3 41.9998 90.6 41.9998 96.6 43.3998C104.1 45.0998 111 48.9998 116.5 54.3998C118.8 56.6998 120.8 52.9998 119 51.0998C114.4 46.4998 109.2 42.8998 103.2 40.4998C96.2 37.7998 88.5 38.2998 81.6 35.3998C74.8 32.4998 70.3 26.4998 67.1 20.0998C65.3 17.0998 63.8 9.59975 59 9.99975C56.4 10.1998 53.8 13.1998 51.8 14.4998C48.8 16.5998 45.7 18.4998 42.5 20.1998C40.2 21.3998 37.9 22.6998 36.1 19.7998C35.4 18.5998 35.3 16.4998 34.9 15.0998C34.1 12.3998 33 9.69975 31.5 7.29975C24 -4.40025 10.8 0.199752 0.900025 5.79975C-1.19997 6.99975 0.800025 11.4998 3.10003 10.1998Z" />
              <path d="M14.8 38.1998C15.5 40.7998 17.8 42.4998 20.6 41.7998C23.4 41.0998 25.3 37.8998 26.8 35.6998C28.4 33.4998 29.2 30.1998 29.1 27.4998C29 24.9998 27.8 21.0998 24.9 20.8998C21.3 20.6998 17.7 23.6998 15.3 26.0998C13.3 28.0998 10.3 30.9998 10.8 34.0998C11.1 35.9998 12.2 39.5998 14.6 39.2998C15.6 39.1998 16.6 38.3998 17 37.5998C18.5 34.8998 17.1 31.8998 21.1 30.4998C20.7 30.2998 20.2 30.0998 19.8 29.9998C20.1 30.7998 20.3 31.6998 20.3 32.5998C20.9 34.5998 20 34.5998 17.7 32.3998C17.6 31.9998 18.3 31.4998 18.2 31.0998C18.1 30.6998 17.9 30.2998 17.8 29.8998C17 23.1998 20.4 27.8998 20.2 29.5998C20.1 30.0998 20.5 30.3998 21 30.4998C22.1 30.6998 23.2 30.1998 24.3 30.2998C25.6 30.3998 24.4 29.0998 25.6 30.8998C26.2 31.3998 26.3 31.9998 25.9 32.6998C25.8 33.9998 24.9 34.5998 23.2 34.3998C22.8 32.9998 20.6 33.9998 21 35.0998C22.5 38.9998 26.4 36.9998 27.8 34.0998C28.6 32.4998 29.3 29.6998 27.9 28.2998C26.3 26.6998 23.8 28.5998 22 28.2998C22.3 28.5998 22.5 28.8998 22.8 29.1998C23.3 25.3998 21.3 22.4998 17.4 24.7998C16.2 25.5998 14.7 26.6998 14.5 28.2998C14.3 30.2998 15.7 30.4998 15.2 32.6998C14.7 35.2998 14.9 38.3998 18.6 38.1998C23.3 37.8998 23.1 32.4998 22.2 29.1998C22 28.5998 21.4 28.4998 20.9 28.6998C18.4 29.5998 16.3 31.2998 15.6 33.8998C15.5 34.3998 15.4 36.6998 14.6 36.7998C14.5 36.7998 13.6 34.2998 13.5 34.0998C12.9 31.1998 15.8 28.3998 17.8 26.5998C19.3 25.1998 22.9 21.9998 25.2 23.5998C27.3 25.0998 26.9 29.1998 26.5 31.2998C26.1 33.3998 25.5 34.0998 24.3 35.8998C23.8 36.4998 23.4 37.1998 23 37.8998C21.5 39.9998 18.3 40.6998 17.3 37.4998C16.7 36.0998 14.4 37.0998 14.8 38.1998Z" />
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="119.4" height="55.2" fill="white" transform="translate(0 -0.000244141)"/>
              </clipPath>
              </defs>
            </svg>

          <figure>
            <ImageResponsive class="featured-browser" :image="item.image" />
          </figure>

          <div class="testamonial-text">
            <div class="testamonial">
              "{{item.testamonial[0].text}}"
            </div>
            <div class="name">
              {{item.name[0].text}}
            </div>
            <div class="title">
              {{item.title[0].text}}
            </div>

          </div>
          </div>


        </slide>

      </hooper>

    </div>
  </section>
</template>

<script>

import animate from "~/mixins/animate.js"

export default {
  props: ['slice'],
  name: 'slice-testamonials',
  mixins: [animate],
  data() {
    return {
      sliding: false,
      hooperSettings: {
        itemsToShow: 1,
        initialSlide: 0,
        breakpoints: {
          600: {
            vertical: false,
            itemsToShow: 1,
          }
        }
      },
    }

  },

  methods: {
    slideNext() {
      this.$refs.sliderTestamonials.slidePrev();
    },
    evSlide(){
      this.sliding = true;
    },
    evAfter(){
      this.sliding = false;
    },
  }

}
</script>

<style lang="scss">

.cg-testamonials {

  // padding: 50px 0 0;
  text-align: left;


// - - - - VERTICAL

// 600

  @media only screen and (max-width: 599px) {

    .hooper {
      height: 280px!important;
    }

    .hooper-slide {
      height: 140px!important;
    }

    figure {
      height: 100px;
      width: 120px;
      border-radius: 100px;
      overflow: hidden;
      transform: translateX(0);
        clip-path: polygon(44% 0%, 90% 26%, 100% 80%, 75% 100%, 25% 100%, 0% 60%, 8% 20%);
    }

    .testamonial-body {
      position: relative;
      // transform: translateX(0px);
      // display: flex;
      // justify-content: flex-end;
        // figure {
        //   transform: translateX(0);
        //   clip-path: polygon(44% 0%, 90% 26%, 100% 80%, 75% 100%, 25% 100%, 0% 60%, 8% 20%);
        // }
    }

    .testamonial-svg {
      position: absolute;
      height: 56px;
      width: 120px;
      top: 0;
      left: 100px;
      z-index: 2;
      opacity: 1;
      display: none;
    }

    .testamonial-text {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 0 0 100px;
    }

    .testamonial {
      opacity: 0;
    }

    // CURRENT SLIDE

      .cg-testamonial{
          text-align: right;
        .name {
          color: $blue;
        }
        .title {
          color: $red;
        }
        .testamonial {
          opacity: 1;
          color: $black;
          height: auto;
          padding-bottom: 4px;
          font-size: 16px;
        }
        .testamonial-svg {
          opacity: 0;
        }
        .testamonial-text {
          bottom: auto;
          top: 0;
          padding: 0 100px 0 0;
          display: flex;
          // left: auto;
          // padding-right: 140px;
          align-items: flex-end;
        }
        .testamonial-body {
          display: flex;
          justify-content: flex-end;
        }
      }


  }


// - - -  - - - - - - - - - - - - -  - - - - -  - - - - - - -  - - - - - - - - -  -
// - - - - HORSIZONTAL

// 600

  @media only screen and (min-width: 600px) {

    .hooper-list {
      overflow: visible;
    }


  figure {
    height: 140px;
    width: 170px;
    border-radius: 100px;
    overflow: hidden;
  }

  .hooper {
    min-width: 280px;
  }

  .cg-testamonial {
    font-family: $font-sangbleu;
    font-size: 18px;
    position: relative;
    // margin: 0 0 24px;
    // height: 200px!important;
  }

  .testamonial-body {
    position: relative;
    transform: translateX(0px);
    display: flex;
    justify-content: flex-end;
      figure {
        transform: translateX(0);
        clip-path: polygon(44% 0%, 90% 26%, 100% 80%, 75% 100%, 25% 100%, 0% 60%, 8% 20%);
      }
  }

  .testamonial-svg {
    position: absolute;
    height: 56px;
    width: 140px;
    top: 0;
    left: 100%;
    z-index: 2;
    transform: translate(0px, 34px);
    opacity: 1;
  }

  .testamonial-text {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0px, 68px);
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    left: 100%;
    width: 75%;
    text-align: right;
  }

  .testamonial {
    opacity: 0;
    height: 1.8em;
  }

  .name {
    font-family: $font-machina;
    font-size: 20px;
    font-weight: bold;
  }

  .title {
    font-size: 12px;
  }



  // CURRENT SLIDE

  .cg-testamonial.is-current {
    .name {
      color: $blue;
    }
    .title {
      color: $red;
    }
    .testamonial {

      opacity: 1;
      color: $black;
      height: auto;
    }
    .testamonial-svg {
      opacity: 0;
    }
    .testamonial-text {
      left: auto;
      padding-right: 140px;
      align-items: flex-end;
    }
    .testamonial-body {
      justify-content: flex-end;
    }
  }

  }


// 768

  @media only screen and (min-width: 768px) {






  }


// 1280

  @media only screen and (min-width: 1280px) {

    // padding: 100px 0 50px;


  }


}
</style>



