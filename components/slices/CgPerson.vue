<template>

  <a href="#" class="cg-person -animate-fade-in-up" v-waypoint="{ active: true, callback: triggerFade }">
    <div class="site-content-width">
      <div class="person-body">

        <div class="persons-text">
          <div class="person-name">
            <prismic-rich-text  v-if="slice.primary.name.length > 0" :field="slice.primary.name" />
            <figure v-if="Object.keys(slice.primary.image.desktop).length > 0">
              <ImageResponsive class="featured-browser" :image="slice.primary.image" />
            </figure>
          </div>
          <div class="person-details">
            <prismic-rich-text class="person-title" v-if="slice.primary.title.length > 0":field="slice.primary.title" />
            <div class="person-email" v-if="slice.primary.email.length > 0" >{{slice.primary.email[0].text}}</div>
          </div>
        </div>

      </div>

    </div>
  </a>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-person',
  methods: {
    triggerFade({ el, going, direction }) {
      if (this.$waypointMap.GOING_IN === going) {
        el.classList.add('-animate')
       }
    },
  }

}
</script>

<style lang="scss">

.cg-person {
  padding: 32px 0;
  color: $blue;
  display: block;
  text-decoration: none;

  h2,h3,h4 {
    color: $blue;
  }

  &:hover {
    color: $red;
     h2,h3,h4 {
      color: $red;
    }
    figure {
      display: block;
    }
  }

  figure {
    height: 100px;
    width: 100px;
    // mix-blend-mode: exclusion;

    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(5deg);
    z-index: -1;
    display: none;

  }

  .person-name {
    position: relative;
    z-index: 1;
    display: inline-block;
     padding-right: 76px;
    > div > * {
      font-size: 40px;
      line-height: 1;

    }
  }

  .person-title, {
    > * {
      font-size: 16px;
      line-height: 1;
      font-family: $font-cg-2;

    }
  }

  .person-email {
    font-family: $font-cg-2;
    font-size: 16px;
    line-height: 1;
    display: inline-block;
  }




  .site-content-width {
    max-width: 1040px;
    margin-left: auto;
    margin-right: auto;
  }




// 1024

  @media only screen and (min-width: 1024px) {

    padding: 64px 0;

    figure {
      height: 210px;
      width: 210px;
    }

    .person-name {
      padding-right: 188px;
      > div > * {
        font-size: 72px;
      }
    }

    .person-title, {
      > * {
        font-size: 16px;
      }
    }

    .person-email {
      font-family: $font-cg-2;
      font-size: 16px;
    }

  }

}
</style>



