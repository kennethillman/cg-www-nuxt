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
  }
};

