<template>
  <p>CG - Custom Loading Prismic preview...</p>
</template>

<script>
export default {
  mounted() {
    this.$prismic.preview()
  }
}
</script>
