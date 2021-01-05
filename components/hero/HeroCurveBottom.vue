<template>
    <figure class="cg-hero-curve">
      <svg class="curv"  viewBox="0 0 1400 300" enable-background="new 0 0 1400 300" xml:space="preserve">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39
s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z" />
      </svg>
    </figure>
</template>

<script type="text/javascript">
   export default {
      data() {
        return {
          curveCount: 1
        }
      },
      watch: {
        $route() {
          if (this.curveCount === 3) {
            this.curveCount = 1;
          } else {
            this.curveCount ++
          }
          this.animateCurve();
        },
      },
      methods: {

        animateCurve() {
          const anime = this.$anime

          const
          curve1 = "M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39 s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z",
          curve2 = "M-13,68c82-12,87,20,124,20s17-37,192-49s103,11,233,9 s234-18,322-17s215,37,298,38s228-58,254,25s-10,206-10,206H0L-13,68z",
          curve3 = "M-13,68c82-12,145,26,182,26s30-66,205-78s94,83,224,81s193-83,281-82s145,69,228,70s281-114,307-31s-14,246-14,246H0L-13,68z",
          curve4 = "M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39 s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z";



          if (this.curveCount === 1) {
            anime({
              targets: '.curv > path',
              easing: 'easeOutQuint',
              duration: 3000,
              loop: false,
              d: [
                { value: curve2 }
              ],
            })
          } else if (this.curveCount === 2)  {
            anime({
              targets: '.curv > path',
              easing: 'easeOutQuint',
              duration: 3000,
              loop: false,
              d: [
                { value: curve3 }
              ],
            })
          } else  {
            anime({
              targets: '.curv > path',
              easing: 'easeOutQuint',
              duration: 3000,
              loop: false,
              d: [
                { value: curve1 }
              ],
            })
          }

        }
      },
      mounted() {
        this.animateCurve()
      }
    };
</script>

<style lang="scss">

  .cg-hero-curve {

  }

</style>



