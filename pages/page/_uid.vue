<template>
  <div class="cg-page page-page">


      <p>{{doc.seo_title}} {{this.$store.state.theSettings.seo_title[0].text}}</p>
      <p>{{doc.seo_description}} {{this.$store.state.theSettings.seo_description[0].text}}</p>
      <p>{{doc.seo_keywords}} {{this.$store.state.theSettings.seo_keywords[0].text}}</p>
      <p>{{doc.seo_robots}}  {{this.$store.state.theSettings.seo_robots[0].text}}</p>


<!--     <section class="cg-section">
      <div class="line -before"></div>
      <h4>Spacing</h4>
      <div class="line -after"></div>
    </section>

    <section class="cg-section">
      <div class="line -before"></div>
      <h4>Spacing</h4>
      <div class="line -after"></div>
    </section>

    <section class="cg-section">
      <div class="line -before"></div>
      <h4>Spacing</h4>
      <div class="line -after"></div>
    </section> -->


    <div class="cg-content">


        <section class="cg-">
          <div class="case-content-width">
            <div>
              <h1>Header 1 (tag)</h1>
              <h2>Header 2 (tag)</h2>
              <h3>Header 3 (tag)</h3>
              <h4>Header 4 (tag)</h4>
              <h5>Header 5 (tag)</h5>
              <h6>Header 6 (tag)</h6>

              <p>Lorum ipsum</p>
              Lorum

              <div class="h1">Header 1 (class)</div>
              <div class="h2">Header 2 (class)</div>
              <div class="h3">Header 3 (class)</div>
              <div class="h4">Header 4 (class)</div>
              <div class="h5">Header 5 (class)</div>
              <div class="h6">Header 6 (class)</div>

            </div>
          </div>
        </section>

        <section class="cg-edt-content">
          <div class="case-content-width">
            <div>
                <p>Machina should all be the same to save code overrides and wierd css attribute combos! </p>
                <h3 class="-machina">Machina (Normal/Normal)</h3>
                <h3 class="-machina -italic">Machina (Normal/Italic)</h3>
                <h3 class="-machina -bold">Machina (Bold/Normal)</h3>
                <h3 class="-machina -bold -italic">Machina (Bold/Italic)</h3>
                <br>
                <br>
                <p>Sang Blue Empire should chnage accordingly! </p>
                <h3 class="-sangblue">SangBlue (Normal/Normal)</h3>
                <h3 class="-sangblue -italic">SangBlue (Normal/Italic)</h3>
                <h3 class="-sangblue -bold">SangBlue (Bold/Normal)</h3>

                <h3 class="-sangblue -bold -italic">SangBlue (Bold/Italic)</h3>
                <h3 class="-sangblue -black">SangBlue (Black/Normal)</h3>
                <h3 class="-sangblue -black -italic">SangBlue (Black/Italic)</h3>

            </div>
          </div>
        </section>

        <slices :slices="slices" />

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
    async asyncData({ $prismic, store, params, error }) {
      const document = await $prismic.api.getByUID('page', params.uid)

      if (document) {
          if (document.data.body) {
          document.data.body.forEach( (el) => {

            if (el.slice_type === 'cg-hero'){
              let newHero = el.primary
              store.dispatch('setHero', newHero)
              //console.log('hello -> ' , newHero)
            }

          })
        }
        return { doc: document.data, slices: document.data.body }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
    layout: 'clean',

  }

</script>

<style lang="scss">

  $spm: 40px !default;
  $spt: 60px !default;
  $spd: 80px !default;

  .page-page {
    position: relative;
    z-index: 100;


    .cg-section {
      padding: 40px 0;
      background: #fff;
      position: relative;
      .line{
        &.-after,
        &.-before {
          position: absolute;
          left:50%;
          top: 0;
          border-left: 1px solid #333;
          height: $spm;
        }
        &.-after {
          top: auto;
          bottom: 0;
          &:before {
            content: '';
            position: absolute;
            left:50%;
            top: 0;
            width: 15px;
            border-bottom: 1px solid #333;
            height: 0px;
            transform: translateX(-50%);
          }
        }

        &.-before {
          &:before {
            content: '';
            position: absolute;
            left:50%;
            bottom: 0;
            width: 15px;
            border-bottom: 1px solid #333;
            height: 0px;
            transform: translateX(-50%);
          }
        }


      }









      // &:after {
      //   top: auto;
      //   bottom: 0;
      // }


      h4{
        text-align: center;
        padding: $spm 0;
        margin: 0;
        background: #f6f6f6;
        // border-bottom: 1px solid black;
        // border-top: 1px solid black;
        &:after {
          content: ' -> #{$spm} x2'
        }
        &:before {
          content: 'Mobile, '
        }
      }
    }


    @media only screen and (min-width: 768px) {
      .cg-section {
        padding: $spt 0;
        .line{
          &.-after,
          &.-before {
            height: $spt;
          }
        }
        h4{
          &:after {
            content: ' -> #{$spt} x2'
          }
          &:before {
            content: 'Tablet, '
          }
        }
      }
    }

    @media only screen and (min-width: 1280px) {
      .cg-section {
        padding: $spd 0;
        .line {
          &.-after,
          &.-before {
            height: $spd;
          }
        }
        h4{
          &:after {
            content: ' -> #{$spd} x2'
          }
          &:before {
            content: 'Desktop, '
          }
        }
      }
    }

  }

</style>
