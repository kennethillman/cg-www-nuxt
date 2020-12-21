<template>
    <div class="cg-hero" :class="[ '-test-' + this.$route.fullPath,{'-expertise' : this.$route.fullPath === '/expertise','-cases' : this.$route.fullPath === '/cases','-case' : this.$route.fullPath === '/case' }]">


      <div  class="body">

        <!-- HOME -->
        <template v-if="this.$route.fullPath === '/'">
          <h1 class="header">
            Hi there!
            <span>We are Common ground</span>
          </h1>
          <p>
            We transform... {{this.$route.fullPath}}
          </p>
        </template>

        <!-- EXPERTISE -->
        <template v-if="this.$route.fullPath === '/expertise'">
          <h1 class="header">
            Positive Impact
            <span>in the bigger picture</span>
          </h1>
          <p>
            As a design studio...
          </p>
        </template>

        <!-- CASES -->
         <template v-if="this.$route.fullPath === '/cases'">
          <h1 class="header">
            Our projects
            <span>at Common Ground</span>
          </h1>
          <p>
            We work...
          </p>
        </template>

        <!-- CASE -->
         <template v-if="this.$route.fullPath === '/case'">
          <h1 class="header">
            Boxer.se
            <span>Redesign</span>
          </h1>
          <p>
            Boxer is a...
          </p>
        </template>

          <figure>
            <svg class="wave"  viewBox="0 0 1400 300" enable-background="new 0 0 1400 300" xml:space="preserve">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39
  s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z" />
            </svg>
          </figure>

      </div>



    </div>
</template>

<script type="text/javascript">
   export default {

      data() {
        return {
          r: this.$route.fullPath,
          c: 1
        }
      },
       watch: {
        $route() {
          if (this.c === 3) {
            this.c = 1;
          } else {
            this.c ++
          }

          console.log('c -> ' + this.c);
          this.wave();
        },
      },
      methods: {
        wave() {
          const anime = this.$anime

          const
          wave1 = "M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39 s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z",
          wave2 = "M-13,68c82-12,87,20,124,20s17-37,192-49s103,11,233,9 s234-18,322-17s215,37,298,38s228-58,254,25s-10,206-10,206H0L-13,68z",
          wave3 = "M-13,68c82-12,145,26,182,26s30-66,205-78s94,83,224,81s193-83,281-82s145,69,228,70s281-114,307-31s-14,246-14,246H0L-13,68z",
          wave4 = "M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39 s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z";



          if (this.c === 1) {
            anime({
              targets: '.wave > path',
              easing: 'easeOutQuint',
              duration: 3000,
              loop: false,
              d: [
                { value: wave2 }
              ],
            })
          } else if (this.c === 2)  {
            anime({
              targets: '.wave > path',
              easing: 'easeOutQuint',
              duration: 3000,
              loop: false,
              d: [
                { value: wave3 }
              ],
            })
          } else  {
            anime({
              targets: '.wave > path',
              easing: 'easeOutQuint',
              duration: 3000,
              loop: false,
              d: [
                { value: wave1 }
              ],
            })
          }



        }
      },
      mounted() {
        this.wave()
      }
    };
</script>

<style lang="scss">
  .cg-hero {
    display: flex;
    background: #004A84;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;
    overflow: hidden;
    &.-expertise{
      background: red;
      .header {
        opacity: 1;
        span {
          color: #004A84;
        }
      }
      p{
        color: black;
      }
    }
     &.-cases{
      // background: white;
      figure {
        transform: translateY(0);
      }
      .header {
        opacity: 1;
        color: red;
        span {
          color: #004A84;
        }
      }
      p{
        color: black;
      }
    }
    &.-case{
      background: lightblue url('https://images.unsplash.com/photo-1552665207-1ba54ee4be5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=80') no-repeat center center;
      background-size: cover;

      .header {
        opacity: 1;
        color: white;
        span {
          color: #004A84;
        }
      }
      p{
        color: black;
      }
    }
    .body {
      padding-bottom: 308px;
      width: 80vw;
      max-width: 1280px;
    }
    p {
      font-size: 18px;
      line-height: 32px;
      width: 42%;
      margin-bottom: 60px;
      color: #fff ;
      font-family: 'Prata', serif;
      position: relative;
          z-index: 2;
    }

    figure {
      position: absolute;
      bottom: 308px;
      left: 0;
      width: 100vw;

      transition: all .5s ease;
      height: 100%;
      transform: translateY(100%);
       &:after {
          content: '';
          top: 308px;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #fff;
          position: absolute;
          z-index: 1;
        }


      svg {
        fill: #fff;
        width: 110vw;
        transform: translate(-5vw , 40%);

      }
    }
    .header {
      opacity: 1;
      transition: all .5s ease;
      color: #fff;
      font-size: 80px;
      line-height: 96px;
      margin: 200px 0 56px;
         position: relative;
          z-index: 2;
      span {
        display: block;
        color: #FFC9CA;
        font-family: 'Prata', serif;
      }
    }
  }
</style>



