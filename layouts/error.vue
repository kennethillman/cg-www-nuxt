<template>
  <section class="site-page-error">



   <div class="cg-content">

        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <nuxt-link to="/">Home page</nuxt-link>

    </div>
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

  .site-page-error {
      text-align: center;
  }

</style>

