<template>
  <div class="cg-text-split" v-html="textSplitted()" :class="[{'-text-right' : this.position !== 'left'}]"></div>
</template>

<script type="text/javascript">
  export default {
    props:{
      text: {
        type: String,
        default: 'Common'
      },
      split: {
        default: 4
      },
      position: {
        default: 'left'
      }
    },
    methods: {
      textSplitted() {

        let splitFirst, splitSecond

        splitFirst =  this.text.slice(0,this.split)
        splitSecond = this.text.slice(this.split)

        return `${splitFirst} <div>${splitSecond}</div>`

      }
    }
  }
</script>

<style lang="scss">

.cg-text-split {

    position: relative;
    font-size: 64px;
    line-height: 1;
    color: pink;
    text-transform: uppercase;
    display: inline-block;
    font-family: $font-cg;

    div {
      display: inline-block;
      position: absolute;
      top: 1em;
      left: 0px;
      transform: rotate(90deg) translateY(-86%);
      transform-origin: 0 0;
      line-height: 1;
    }

    &.-text-right {
      div {
      left: auto;
      right: 3px;
      transform: rotate(90deg) translateX(100%);
      transform-origin: top right;
      }
    }


    @media only screen and (min-width: 1280px) {
      font-size: 144px;

      &.-text-right {
        div {

          right: 5px;

      }
    }

  }

}
</style>
