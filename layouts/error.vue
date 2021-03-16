<template>
  <section class="common-ground cg-page page-error">



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



  </section>
</template>

<script>
export default {
  props: ['error'],
  name: 'NotFound',
  layout: 'clean'
}
</script>

<style lang="scss">

  .page-error {
    .cg-content{
        text-align: center;
        min-height: 90vh;
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

