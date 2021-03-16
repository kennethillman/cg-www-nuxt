<template>
  <section class="common-ground cg-page page-error">

<!--     <TheHeader /> -->

    <div class="cg-the-header">
      <div class="header-body">

        <!-- LOGO --->

        <nuxt-link class="cg-logo" :to="'/'">

            <svg width="68" class="cg-the-logo" height="40" viewBox="0 0 68 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7557 39.9545C9.62422 39.9545 0.577759 31.0425 0.577759 20.0792C0.577759 9.1158 9.62422 0.203857 20.7557 0.203857C25.7498 0.203857 30.5084 2.00306 34.2077 5.26517C37.907 2.00306 42.6657 0.203857 47.6597 0.203857C58.7744 0.203857 67.8377 9.1158 67.8377 20.0792C67.8377 31.0425 58.7912 39.9545 47.6597 39.9545C42.6657 39.9545 37.907 38.1553 34.2077 34.8932C30.5084 38.1553 25.7498 39.9545 20.7557 39.9545ZM20.7557 1.41454C10.28 1.41454 1.77162 9.78839 1.77162 20.0792C1.77162 30.3699 10.28 38.7438 20.7389 38.7438C25.6153 38.7438 30.2562 36.9278 33.7873 33.632C34.0228 33.4134 34.3759 33.4134 34.6113 33.632L34.6785 33.6993C38.2097 36.9614 42.817 38.7606 47.6597 38.7606C58.1186 38.7606 66.627 30.3867 66.627 20.096C66.627 9.80521 58.1186 1.43135 47.6597 1.43135C42.7834 1.43135 38.1424 3.24737 34.6113 6.54311C34.3759 6.7617 34.0228 6.7617 33.7873 6.54311C30.2562 3.23055 25.6321 1.41454 20.7557 1.41454Z" fill="#004A84"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2226 27.8308C11.1039 25.7793 10.0446 23.2066 10.0446 20.1295C10.0446 17.0187 11.1039 14.446 13.2394 12.361C15.3581 10.2759 18.0149 9.2334 21.2097 9.2334C25.0771 9.2334 28.0702 10.6795 30.1889 13.5885L25.7834 16.9515C24.455 15.3204 22.908 14.5133 21.1593 14.5133C19.7132 14.5133 18.5025 15.0514 17.544 16.1107C16.5856 17.1701 16.1148 18.4816 16.1148 20.0286C16.1148 21.6765 16.5856 23.0049 17.5272 24.0642C18.4689 25.1236 19.6795 25.6616 21.1593 25.6616C22.185 25.6616 23.0593 25.443 23.7824 25.0227C24.5054 24.6023 25.2285 23.9633 25.9347 23.1394L30.3402 26.2333C29.2304 27.7299 27.9357 28.8733 26.4728 29.6972C25.0099 30.5212 23.1602 30.9415 20.9743 30.9415C17.914 30.9247 15.3413 29.899 13.2226 27.8308Z" fill="#004A84"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.0256 27.8812C37.8397 25.8634 36.7467 23.2739 36.7467 20.1464C36.7467 17.0356 37.8229 14.4629 39.992 12.3778C42.1611 10.2928 44.8683 9.25024 48.1304 9.25024C51.4766 9.25024 54.3352 10.2591 56.7061 12.2938L53.259 16.3798C51.6616 15.0682 49.9633 14.4124 48.1473 14.4124C46.6171 14.4124 45.3223 14.9673 44.2966 16.0771C43.2541 17.1869 42.7328 18.5321 42.7328 20.1295C42.7328 21.8783 43.2709 23.2571 44.3471 24.3501C45.4232 25.4263 46.8021 25.9811 48.4667 25.9811C49.8288 25.9811 50.9722 25.6953 51.9138 25.1236V22.5341H47.6596V18.3135H57.4459V27.7467C54.806 29.899 51.7457 30.9584 48.265 30.9584C44.9524 30.9248 42.2116 29.9159 40.0256 27.8812Z" fill="#004A84"/>
              </svg>

              <svg viewBox="0 0 200 200" class="cg-blob-pink"  xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFC9CA" d="M41,-75.4C50.2,-65.8,52.6,-48.8,55.6,-35C58.6,-21.2,62.2,-10.6,60.6,-0.9C59.1,8.8,52.5,17.6,47.4,27.9C42.4,38.2,39,50,31.4,54.1C23.8,58.2,11.9,54.6,-2.3,58.6C-16.5,62.6,-33,74.1,-42,70.8C-50.9,67.5,-52.4,49.3,-58.6,35C-64.9,20.7,-75.9,10.4,-74.3,1C-72.6,-8.5,-58.3,-16.9,-52,-31.2C-45.8,-45.5,-47.6,-65.6,-40.3,-76.3C-33,-87,-16.5,-88.3,-0.3,-87.8C15.9,-87.3,31.9,-85.1,41,-75.4Z" transform="translate(100 100)"/>
              </svg>

              <svg viewBox="0 0 200 200" class="cg-blob-yellow"  xmlns="http://www.w3.org/2000/svg">
                <path fill="#E6FF00" d="M41,-75.4C50.2,-65.8,52.6,-48.8,55.6,-35C58.6,-21.2,62.2,-10.6,60.6,-0.9C59.1,8.8,52.5,17.6,47.4,27.9C42.4,38.2,39,50,31.4,54.1C23.8,58.2,11.9,54.6,-2.3,58.6C-16.5,62.6,-33,74.1,-42,70.8C-50.9,67.5,-52.4,49.3,-58.6,35C-64.9,20.7,-75.9,10.4,-74.3,1C-72.6,-8.5,-58.3,-16.9,-52,-31.2C-45.8,-45.5,-47.6,-65.6,-40.3,-76.3C-33,-87,-16.5,-88.3,-0.3,-87.8C15.9,-87.3,31.9,-85.1,41,-75.4Z" transform="translate(100 100)"/>
              </svg>

        </nuxt-link>


        <!-- NAV -->

        <div class="cg-nav" @click="clickToTop()">

          <template v-for="(item, index) in menu">
            <nuxt-link :to="$prismic.asLink(item.link)">
              {{$prismic.asText(item.label)}}
            </nuxt-link>
          </template>

        </div>


      </div>
    </div>

      <nuxt-link to="/" class="cg-content">


        <template v-if="error.statusCode === 404">

          <div class="cg-error -e404">
            <span class="error-code">404</span>
              <span class="error-text">  Page not found</span>
              <span class="error-desc">
                The HTTP 404 Not Found or Server Not Found error message is a Hypertext Transfer Protocol standard response code, in computer network communications. It generally means you got sneaky and tried finding something that doesn't exist.
              </span>
          </div>




        </template>
        <template v-else>

          <div class="cg-error -error">
            <div class="the-error">
              <span class="error-code">Error</span>
              <span class="error-text">Something went wrong</span>
              <span class="error-desc">
                Please click the error to go back home.
              </span>
            </div>
          </div>

        </template>

      </nuxt-link>

   <!--  <TheFooter text="Common Ground" /> -->

  </section>
</template>

<script>
export default {
  props: ['error'],
  name: 'NotFound',
  layout: 'clean',
  data() {
      return {
          blob: 1,
          menu: ''
      }
    },
    async fetch() {
      const menu = await this.$prismic.api.getSingle('menu')
      this.menu = menu.data.menu_links;


    },
}
</script>

<style lang="scss">

  .page-error {
    .cg-content{
        text-align: center;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        line-height: 1;
        text-decoration: none;

        &:hover {
          cursor: pointer;
          filter: none;
        }

        span {
          display: block;
        }

        .cg-error {
          // background: $gray-200;
          position: relative;

          &.-e404{
            .error-code {
              font-size: 160px;
            }

            .error-text  {
              font-size: 32px;
              top: 50px;
            }
          }
        }

        .error-code {
          color: $yellow;
          font-size: 100px;
          font-family: $font-machina;
          font-weight: bold;
          text-transform: uppercase;
          line-height: 1;
        }

        .error-text  {
          font-family: $font-sangbleu;
          color: $blue;
          display: block;
          position: absolute;
          font-size: 22px;
          top: 26px;
          left: 0;
          width: 100%;
        }
        .error-desc {
          color: $blue;
          line-height: 1.32;
          padding-top: 40px;
        }


        // 768

        @media only screen and (min-width: 768px) {

          .cg-error {
            // background: $gray-200;
            position: relative;
            width: 640px;

            &.-e404{
              .error-code {
                font-size: 280px;
              }
              .error-text  {
                font-size: 48px;
                top: 92px;
              }
            }
            &.-error {
              .error-code {
                font-size: 178px;
              }

              .error-text  {
                font-size: 44px;
                top: 50px;
              }
            }
          }


        }


        // 1280

        @media only screen and (min-width: 1280px) {

          .cg-error {
            // background: $gray-200;
            position: relative;
            width: 840px;

            &.-e404{
              .error-code {
                font-size: 400px;
              }
              .error-text  {
                font-size: 72px;
                top: 122px;
              }
            }
            &.-error {
              .error-code {
                font-size: 232px;
              }

              .error-text  {
                font-size: 56px;
                top: 66px;
              }
            }
          }


        }

    }
  }

</style>

