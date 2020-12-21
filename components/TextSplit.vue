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
    font-size: 144px;
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
        right: -18px;
        transform: rotate(90deg) translateX(100%);
        transform-origin: top right;

      }
    }

  }

</style>
