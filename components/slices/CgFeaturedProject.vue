<template>

  <nuxt-link :to="$prismic.asLink(slice.primary.link)" class="cg-featured-project" :class="['-'+slice.primary.direction]">

      <!--
        (fix) -> Add fallback for if no link!!
      -->

      <div class="site-content-width">

        <!-- Left / Top -->
        <div class="featured-content left">

          <TextSplit
            v-waypoint="{ active: true, callback: triggerFade }"
            class="-animate-fade-in-up"
            :text="slice.primary.text_split[0].text"
            :split="slice.primary.text_split_at"
            :class="['-text-'+slice.primary.split_text_color, {'-text-right' : slice.primary.direction == 'right'}]"
          />

          <figure v-waypoint="{ active: true, callback: triggerFade }" class="-animate-fade-in-up">
            <ImageResponsive class="featured-browser" :image="slice.primary.image_browser" />
            <ImageResponsive class="featured-mobile"  :image="slice.primary.image_mobile" />
          </figure>

        </div>

        <!-- Right / Bottom -->
        <div class="featured-content right" >

          <h2
             v-waypoint="{ active: true, callback: triggerFade }"
             v-if="slice.primary.text_header.length > 0 "
             class="featured-header -animate-fade-in-up"
          >{{slice.primary.text_header[0].text}}</h2>

          <prismic-rich-text
            v-waypoint="{ active: true, callback: triggerFade }"
            v-if="slice.primary.text.length > 0 "
            class="featured-text -animate-fade-in-up"
            :field="slice.primary.text"
          />

          <div
            v-waypoint="{ active: true, callback: triggerFade }"
            class="featured-link -animate-fade-in-up"
            v-if="slice.primary.link_text.length > 0 "
          >
            {{slice.primary.link_text[0].text}}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
          </div>

        </div>

      </div>

      <div class="site-content-width bottom" v-if="slice.primary.more_projects_link_text[0]">
            <!-- Bottom -->
        <div class="featured-content bottom -animate-fade-in-up" v-waypoint="{ active: true, callback: triggerFade }" >

            <svg  class="bottom-svg " width="305" height="178" viewBox="0 0 305 178" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M234.71 113.632C228.223 111.431 222.044 108.079 216.603 103.692C222.928 100.76 229.777 98.7397 236.682 97.6599C233.532 92.1895 230.708 86.6521 228.105 80.8654C233.581 81.0991 239.057 81.3327 244.533 81.5664C245.711 76.0219 248.038 70.7851 251.54 66.3262C253.43 69.6084 255.464 72.9292 258.341 75.3965C261.219 77.8639 259.042 84.8373 268.897 77.9167C270.613 76.6801 272.722 75.7029 274.648 74.831C276.717 73.9976 282.285 71.0174 280.428 76.2257C279.938 77.4822 280.816 78.7971 280.651 79.9866C279.925 84.4185 279.094 88.668 278.368 93.0999C284.849 93.6028 291.089 95.583 296.329 98.992C290.481 103.593 284.632 108.195 278.783 112.796C282.683 116.617 285.595 121.252 287.597 126.415C280.289 127.85 272.859 128.018 265.593 126.996C263.494 133.682 260.782 140.358 257.573 146.591C253.545 139.806 249.373 132.982 245.345 126.197C237.54 127.19 229.497 127.348 221.58 126.461C224.155 121.445 228.337 117.322 233.32 114.802" fill="black"/>
              <path d="M235.317 111.944C228.724 109.561 222.832 106.286 217.21 102.003C217.227 103.087 217.062 104.277 217.079 105.361C223.547 102.468 229.889 100.62 236.794 99.5403C238.058 99.4164 238.416 97.5074 237.891 96.5957C234.741 91.1253 231.916 85.5879 229.313 79.8013C228.899 80.77 228.304 81.8441 227.89 82.8128C233.367 83.0465 238.843 83.2801 244.319 83.5138C245.219 83.6007 245.776 82.6704 246.007 81.8071C247.29 76.445 249.567 71.9661 252.744 67.5741C251.988 67.5257 251.193 67.6211 250.58 67.6112C253.1 71.9875 256.608 75.549 259.061 79.5991C260.255 81.461 260.703 82.6605 262.972 82.8058C267.366 83.058 271.674 77.8896 275.736 76.5106C279.29 75.304 278.926 75.5148 279.198 78.5178C279.659 83.1135 277.907 88.5042 276.999 93.0415C276.807 93.7609 277.254 94.9604 278.154 95.0473C284.597 95.694 290.262 97.5204 295.723 100.68C295.706 99.596 295.689 98.5119 295.489 97.5332C289.641 102.135 283.792 106.736 277.943 111.337C277.138 112.047 277.183 113.601 277.785 114.225C281.503 118.151 284.348 122.461 286.388 127.479C286.802 126.511 287.072 125.503 287.485 124.535C280.216 125.825 273.111 125.927 265.807 125.049C265.051 125.001 264.428 125.605 264.273 126.18C262.031 132.827 259.578 139.11 256.513 145.382C257.269 145.43 258.064 145.335 258.677 145.345C254.648 138.56 250.476 131.736 246.448 124.951C246.133 124.404 245.741 124.144 245.233 124.317C237.428 125.31 229.749 125.257 221.794 124.513C221.993 125.492 222.336 126.509 222.536 127.488C225.398 122.549 228.774 119.135 233.652 116.433C235.109 115.59 234.522 112.04 232.701 113.094C227.42 116.151 223.459 120.024 220.337 125.357C219.819 126.143 219.748 128.129 221.079 128.331C227.665 129.016 234.752 127.831 241.338 128.516C248.068 129.24 252.89 142.252 256.183 147.761C256.708 148.673 257.933 148.693 258.347 147.724C259.731 144.856 261.153 141.845 262.432 138.795C263.634 136.032 264.563 130.267 267.505 129.051C269.756 128.112 274.78 129.458 277.27 129.354C280.698 129.193 284.021 128.85 287.421 128.219C288.724 127.951 288.899 126.147 288.518 125.274C286.268 119.891 283.422 115.581 279.495 111.29C279.407 112.192 279.424 113.276 279.336 114.178C285.185 109.577 291.034 104.975 296.882 100.374C297.831 99.7028 297.72 97.8224 296.648 97.2269C290.795 93.8079 285.091 92.1255 278.323 91.5456C278.743 92.275 279.02 92.966 279.478 93.5515C280.204 89.1196 286.855 69.4661 276.893 72.1941C273.051 73.3238 264.306 80.696 261.285 78.1901C260.539 77.5277 260.284 75.6088 259.616 74.6586C257.257 71.4048 254.561 68.832 252.423 65.329C251.754 64.3788 250.777 64.5797 250.259 65.366C246.641 70.2566 244.314 75.4934 242.877 81.431C243.501 80.827 243.942 80.3284 244.565 79.7244C239.089 79.4907 233.613 79.2571 228.137 79.0235C226.624 78.9266 226.228 80.9794 226.714 82.035C229.356 87.6778 232.286 93.3975 235.292 98.8294C235.705 97.8607 235.975 96.8536 236.389 95.8848C229.301 97.0701 222.596 99.1286 215.984 101.983C214.604 102.539 214.821 104.602 215.854 105.341C221.476 109.623 227.368 112.899 233.961 115.282C236.037 116.147 237.001 112.55 235.317 111.944Z" fill="#FFC9CA"/>
              <path d="M219.597 105.727C187.023 117.047 142.943 105.852 120.47 79.4747C97.9977 53.0971 84.2669 5.00459 42.0321 5.87065C40.3374 5.87919 40.3825 7.43342 41.3767 8.31666C44.9614 11.5904 51.3038 20.0752 42.0247 20.8274C38.5582 21.1322 33.6882 19.2104 30.3095 18.6135C28.8354 18.3728 27.9142 19.5138 28.8313 20.6849C30.3119 22.6237 42.028 35.17 39.0931 38.0847C38.4696 38.6888 31.0887 38.099 30.1889 38.0121C26.1867 38.0192 22.3666 37.9209 18.3645 37.928C17.139 37.908 16.5049 39.1261 17.317 40.1147C23.1943 46.3159 29.0331 52.661 35.054 58.9007C35.5339 58.2582 36.0523 57.4719 36.5321 56.8294C29.029 54.9732 21.991 55.4005 14.8053 58.1015C13.7512 58.5901 14.3041 59.972 14.9447 60.4521C34.4724 73.7036 52.4169 88.8441 68.999 105.624C83.3162 119.947 99.4414 129.819 119.185 134.801C154.145 143.86 194.318 139.203 226.336 122.492C228.301 121.476 225.567 119.047 223.966 119.852C192.13 136.458 151.813 141.077 117.295 131.519C107.285 128.683 97.2964 124.618 88.6702 118.914C79.1164 112.653 71.482 103.822 63.2906 95.9214C48.9627 82.2126 33.493 69.8942 17.1406 58.573C17.235 59.3694 17.1857 60.1273 17.2801 60.9236C23.6324 58.4619 29.8755 58.13 36.4788 59.8994C37.7708 60.2455 39.0562 58.8936 37.957 57.828C32.0796 51.6268 26.2409 45.2817 20.22 39.042C19.8837 39.723 19.5088 40.5478 19.1725 41.2288C25.6256 41.2615 33.4651 42.4368 39.901 41.3855C41.8164 41.1277 43.4726 41.263 44.1944 39.1432C45.0598 37.0619 43.7506 35.6316 42.6621 33.952C39.7222 28.8463 35.1155 24.2193 31.4472 19.5352C30.9673 20.1777 30.4489 20.9641 29.969 21.6066C35.1089 22.5212 40.7738 24.3475 46.0679 24.6865C48.0497 24.7549 49.5623 24.8518 50.6763 22.9913C53.7589 17.803 46.8702 9.63441 43.3905 6.54306C43.1592 7.40636 42.9279 8.26965 42.7351 8.98906C68.2714 8.42926 84.9116 30.1599 97.0076 49.9018C106.86 65.9583 116.089 82.6188 131.724 93.7477C156.548 111.348 192.727 118.729 221.928 108.511C223.815 107.783 221.263 105.249 219.597 105.727Z" fill="#FFC9CA"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="286.676" height="106.654" fill="white" transform="translate(276.907 177.217) rotate(-165)"/>
              </clipPath>
              </defs>
            </svg>

          <div
            v-waypoint="{ active: true, callback: triggerFade }"
            class="featured-link "
            v-if="slice.primary.more_projects_link_text.length > 0 "
          >
              {{slice.primary.more_projects_link_text[0].text}}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
          </div>

        </div>
    </div>


  </nuxt-link>

</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-featured-project',
  methods: {
    triggerFade ({ el, going, direction }) {
      if (this.$waypointMap.GOING_IN === going) {
        el.classList.add('-animate')
      }
    },
  }

}
</script>

<style lang="scss">

.cg-featured-project {

  padding: 50px 0 0;
  min-width: 300px;
  cursor: pointer;
  text-decoration: none;

  .site-content-width {
     &.bottom {
      justify-content: center;
    }
  }


  .featured-content {
    padding: 0 0 24px;
    position: relative;

    &.left {
      // background: #f6f6f6;
      min-height: 288px;

      &:hover {
        .featured-mobile {
          transform: perspective(500px) translateX(0) translateY(0%)  rotate(6deg)
            rotateX(4deg) rotateY(-12deg);
        }
        .featured-browser {
          transform: perspective(40vw) translateX(-50%) translateY(-50%)
            rotate(-5deg) rotateX(4deg) rotateY(11deg);
        }
      }

    }

    &.right {
      // background: #eee;
    }

    &.bottom {
      padding: 50px 0 ;
      a {
        // margin-left: 32px;
        font-size: 20px;
      }
      .bottom-svg {
        display: none;
        // width: 150px;
        // position: absolute;
        // left: -32px;
        // top: 22px;
        // transform: rotate(144deg);
      }
    }

  }

  figure {
    // background: rgba(0,0,0,.04);
    margin-left: 72px;
    position: relative;
    top: -24px;
    left: -24px;

    @include aspect-ratio-picture(100,69);

  }



  // Tilted text


  // Images

  .featured-mobile,
  .featured-browser {
    position: absolute;
    transition: transform 0.4s cubic-bezier(0.45, 0, 0.55, 1);
  }

  .featured-mobile {
    height: 86%;
    width: 28%;
    transform: perspective(500px) translateX(0) translateY(0%) rotate(8deg) rotateX(6deg) rotateY(-14deg);
    right: 0;
    bottom: 0;
  }

  .featured-browser {
    height: 82%;
    width: 82%;
    top: 44%;
    left: 51%;
    transform: perspective(40vw) translateX(-50%) translateY(-50%) rotate(-7deg) rotateX(5deg) rotateY(13deg);
  }





  // Text


  .featured-header{
    font-size: 40px;
    font-family: $font-cg;
    text-decoration: none;
  }

  .featured-text{
    font-size: 18px;
    line-height: 1.8;
    text-decoration: none;
  }

  // Link

  .featured-link{
    font-family: $font-cg;
    font-size: 20px;
    line-height: 1.256;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    margin-top: 1.5em;
    position: relative;
    display: inline-block;
    padding-right: 28px;

    svg {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-60%);
      height: 20px;
      width: 20px;
    }
  }


//  right side

  &.-right {
    .featured-content {
      &.left {
        text-align: right;
      }
    }
    figure {
      margin-left: 0px;
      left: 0px;
      margin-right: 72px;
      right: -24px;
    }
  }



// 480

  @media only screen and (min-width: 480px) {
    figure {
      margin-left: 86px;
    }

    &.-right {
      figure {
        margin-left: 0px;
        margin-right: 86px;
      }
    }
  }


// 768

  @media only screen and (min-width: 768px) {

     padding: 100px 0 0;

    .site-content-width {
      display: flex;
    }
    .featured-content {
      &.left {
        width: 53%;
      }
      &.right {
        padding-top: 40px;
        width: 40%;
        margin: 0 0 0 7%;
      }
      &.bottom {
        padding: 50px 0 ;
        a {
          margin-left: 200px;
        }
        .bottom-svg {
          display: block;
          width: 250px;
          position: absolute;
          left: -60px;
          top: 6px;
          transform: rotate(0deg);
        }
      }
    }
    figure {
      top: -38px;
      margin-left: 50px;
    }

    &.-right {
      .site-content-width {
        flex-direction: row-reverse;
      }
      .featured-content {
        &.right {

          margin: 0 5% 0 0;
        }
      }
      figure {
        margin-left: 0px;
        margin-right: 50px;
      }
    }

  }

// 1024

  @media only screen and (min-width: 1024px) {
    .site-content-width {
       &.bottom {
        justify-content: flex-end;
        .featured-content {
          width: 40%;
        }
        a {
          margin: 0;
        }
        .bottom-svg {
          left: auto;
          right: 102%;
          top: -22px;
        }
      }
    }
  }

// 1280

  @media only screen and (min-width: 1280px) {

    .site-content-width {
       &.bottom {
        .featured-content {
          margin-top: -50px;
          margin-bottom: 50px;
          width: 30%;
        }
      }
    }

    .featured-content {
      &.left {
        width: 71%;
      }
      &.right {
        padding-top: 144px;
        width: 30%;
        margin: 0 0 0 5%;
      }
    }
    figure {
      margin-left: 116px;
     top: -80px;
     left: -48px;
    }

    .featured-header{
      font-size: 72px;
    }

    &.-right {
      figure {
        margin-left: 0px;
        margin-right: 116px;
      }
    }

  }


}
</style>



