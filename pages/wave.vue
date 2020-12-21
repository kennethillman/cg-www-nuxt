<template>
  <div class="cg-page">

    <div class="cg-hero">
      <div class="body">
          <h1 class="header">
            Hi there!
            <span>We are Common ground</span>
          </h1>
          <p>
            We transform...
          </p>
          <figure>
            <svg class="wave"  viewBox="0 0 1400 300" enable-background="new 0 0 1400 300" xml:space="preserve">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39
  s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z" />
            </svg>
          </figure>
      </div>


    </div>

    <div class="cg-content">

    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
  mounted() {
    this.wave()
  },

  methods: {
    wave() {
      const anime = this.$anime

      const wave1 = "M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39 s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z",
      wave2 = "M-13,68c82-12,87,20,124,20s17-37,192-49s103,11,233,9 s234-18,322-17s215,37,298,38s228-58,254,25s-10,206-10,206H0L-13,68z",
      wave3 = "M-13,68c82-12,145,26,182,26s30-66,205-78s94,83,224,81s193-83,281-82s145,69,228,70s281-114,307-31s-14,246-14,246H0L-13,68z",
      wave4 = "M-13,68c82-12,90-48,127-48s18,51,193,39s100-37,230-39 s231,59,319,60s215-48,298-47s230-22,256,61s-10,206-10,206H0L-13,68z";

      anime({
        targets: '.wave > path',
        easing: 'easeInOutBounce',
        duration: 18000,
        loop: true,
        d: [
          { value: [wave1, wave2] },
          { value: wave3 },
          { value: wave1 },
        ],
      })

    }
  }
}
</script>

<style lang="scss">
  .wave {
    transform: translate(-5vw , 40%);
  }
</style>

