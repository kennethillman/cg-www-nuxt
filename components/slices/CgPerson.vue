<template>

  <div class="cg-person -animate-fade-in-up" v-waypoint="{ active: true,  callback: animateTriggerFade }">
    <div class="site-content-width">
      <div class="person-body">

        <div class="persons-text">
          <div class="person-name">
            <prismic-rich-text  v-if="slice.primary.name.length > 0" :field="slice.primary.name" />
            <figure v-if="Object.keys(slice.primary.image.desktop).length > 0" ref="image">
              <ImageResponsive class="featured-browser" :image="slice.primary.image" />
            </figure>
          </div>
          <div class="person-details">
            <prismic-rich-text class="person-title" v-if="slice.primary.title.length > 0":field="slice.primary.title" />
            <div class="person-link" v-if="slice.primary.email.length > 0" >{{slice.primary.email[0].text}}</div>
            <prismic-rich-text class="person-title" v-if="slice.primary.info.length > 0":field="slice.primary.info" />
            <a :href="'mailto:' + slice.primary.phone_number[0].text" class="person-link" v-if="slice.primary.phone_number.length > 0" >{{slice.primary.phone_number[0].text}}</a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

import animate from "~/mixins/animate.js"

export default {
  props: ['slice'],
  name: 'slice-person',
  mixins: [animate],
  methods: {
    randomImgRotation(){
      const _rotations = ['one', 'two', 'three', 'four'];
      const rotationRandom = Math.floor ( Math.random() * _rotations.length)
      const rotationName = '-rotation-'+_rotations[rotationRandom]
      this.$refs.image.classList.add(rotationName)
    },
  },
  mounted() {
    this.randomImgRotation()
  }
}
</script>

<style lang="scss">

.cg-person {
  padding: 32px 0;
  color: $blue;
  display: block;
  text-decoration: none;
  cursor: default;

  p {
    margin: 0 0 4px;
  }

  a {
    text-decoration: none;
    margin: 0 0 4px;

    &:hover {
      text-decoration: underline;
    }
  }

  h2,h3,h4 {
    margin: 0 0 4px;
    color: $blue;
  }

  &.-text-red {
    color: $red;
     h2,h3,h4 {
      color: $red;
    }
    figure {
      opacity: 1;
    }
  }

  figure {
    height: 120px;
    width: 120px;
    position: absolute;
    right: 0;
    top: 50%;

    z-index: -1;
    opacity: 0;
  }

  .person-name {
    position: relative;
    z-index: 1;
    display: inline-block;
     padding-right: 86px;
    > div > * {
      font-size: 40px;
      line-height: 1;
    }
  }

  .person-title, {
    position: relative;
    z-index: 1;
    > * {
      font-size: 16px;
      line-height: 1;
      font-family: $font-machina;

    }
  }

  .person-link {
    margin: 0 0 4px;
    position: relative;
    z-index: 1;
    font-family: $font-machina;
    font-size: 16px;
    line-height: 1;
    display: inline-block;
  }

  .site-content-width {
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }

// 1024

  @media only screen and (min-width: 1024px) {

    // &:hover {
    //   color: $red;
    //    h2,h3,h4 {
    //     color: $red;
    //   }
    //   figure {
    //      opacity: 1;
    //   }
    // }

    padding: 64px 0;

    figure {
      height: 210px;
      width: 210px;
      right: auto;
      left: 94%;
    }

    .person-name {
      padding-right: 0px;
      > div > * {
        font-size: 72px;
      }
    }

    .person-title, {
      > * {
        font-size: 16px;
      }
    }

    .person-link {
      font-family: $font-machina;
      font-size: 16px;
    }

  }

}
</style>



