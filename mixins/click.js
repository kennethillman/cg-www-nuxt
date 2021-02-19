export default {
  methods: {
    clickToTop() {
      const anime = this.$anime
      const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
      anime({
        targets: scrollElement,
        scrollTop: 0,
        duration: 375,
        easing: 'easeInOutQuad'
      });
    },
    clickNoLink() {
      if (document.querySelector('.-no-link')){
        document.querySelector('.-no-link').addEventListener('click', event => {
          event.preventDefault()
          event.stopPropagation()
        })
      }
    }

  },
  mounted() {
    if (process.client) {
      if (document.querySelector('.nuxt-link-handler')){
        document.querySelector('.nuxt-link-handler').addEventListener('click', event => {
          event.preventDefault()
          this.clickToTop()
          this.$router.push(event.target.pathname)
        })
      }
    }
  }
};

