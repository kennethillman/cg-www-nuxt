<template>
  <div class="cg-page">
    <div class="cg-content" style="height: 200vh">



    </div>
  </div>
</template>



<script>

  export default {
    head() {
      let meta = []
      let title, description, keywords, robots

      // Title
      if (this.doc.seo_title.length > 0 && this.doc.seo_title[0].text !== '') {
        // Local
        title = this.doc.seo_title[0].text
      } else {
        // Global
        title = this.$store.state.theSettings.seo_title[0].text
      }

      // Meta Description
      if (this.doc.seo_description.length > 0 && this.doc.seo_description[0].text !== '') {
        // Local
        description = this.doc.seo_description[0].text
      } else {
        // Global
        description = this.$store.state.theSettings.seo_description[0].text
      }

      // Meta keywords
      if (this.doc.seo_keywords.length > 0 && this.doc.seo_keywords[0].text !== '') {
        // Local
        keywords = this.doc.seo_keywords[0].text
      } else {
        // Global
        keywords = this.$store.state.theSettings.seo_keywords[0].text
      }

      // Meta Robots
      if (this.doc.seo_robots.length > 0 && this.doc.seo_robots[0].text !== '') {
        // Local
        robots = this.doc.seo_robots[0].text
      } else {
        // Global
        robots = this.$store.state.theSettings.seo_robots[0].text
      }


      meta = [
        { hid: 'description', name: 'description', content: description},
        { hid: 'keywords', name: 'keywords', content: keywords },
        { hid: 'robots', name: 'robots', content: robots },
      ]

      return {
        title: title,
        meta: meta,
      }

    },
    async asyncData({ $prismic, params, error }) {
      const document = await $prismic.api.getByUID('play', params.uid)

      if (document) {
        return { doc: document.data }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    }

  }

</script>
