export default {
  methods: {
    animateTriggerFade ({ el, going, direction }) {
      if (this.$waypointMap.GOING_IN === going) {
        el.classList.add('-animate')
      }
    },
  }
};
