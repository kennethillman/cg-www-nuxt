
<template>

  <div class="prismic-all-dynamic-routes" >

    <ul>
      <li v-for="(link, index) in all" :key="'link-' + index" >

        <template v-if="link.type === 'case' ">
          <nuxt-link :to="'cases/'+link.uid">cases/{{link.uid}}</nuxt-link>
        </template>

        <template v-if="link.type === 'play' ">
          <nuxt-link :to="'playground/'+link.uid">playground/{{link.uid}}</nuxt-link>
        </template>

        <template v-if="link.type === 'page' ">
          <nuxt-link :to="'playground/'+link.uid">playground/{{link.uid}}</nuxt-link>
        </template>

      </li>
    </ul>

  </div>

</template>

<script>

export default {
  name: 'prsimic-all-dynamic-routes',
  layout: 'clean',

  async asyncData({ params, $prismic, error}) {

    const prismicAll = await $prismic.api.query('', { pageSize : 100 })

    if (prismicAll) {
      return { all: prismicAll.results }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }

  }

}
</script>





