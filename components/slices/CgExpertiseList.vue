<template>
  <section class="cg-expertise-list cg-spacing">
    <div class="cg-expertise-list-width">
      <prismic-rich-text class="list-header" :field="slice.primary.header1"  />
      <prismic-rich-text :field="slice.primary.list" />
    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-expertise-list'
}
</script>

<style lang="scss">

.cg-expertise-list {

  // padding: 56px 0 32px;
  font-family: $font-sangbleu;

  .list-header {
    color: $blue;
    max-width: 700px;
    margin: 0 auto;
    > * {
      font-family: $font-sangbleu!important;
      font-size: 28px;
      line-height: 1;
      margin: 0 0 24px;
      color: $blue;
    }
  }

  .centerd-content-width {
    max-width: 580px;
    margin: 0 auto;
  }

  ul {
    padding: 0 0 0px;
    max-width: 700px;
  }

  li {
    position: relative;
    font-size: 22px;
    line-height: 1.6;
    padding: 12px 0;
    padding-left: 24px;
    color: $blue;
    font-weight: normal;
    box-sizing: content-box;
    font-family: $font-machina;

    &:before {
      content: "";
      background-color: $yellow;
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 8px;
      position: absolute;
      top: 50%;
      left: 4px;
      transform: translateY(-60%);
    }

  }



// 768

  @media only screen and (min-width: 768px) {

    ul {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      padding: 32px 0 48px;
      width: 1040px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    li {
      width: 50%;
      box-sizing: border-box;
    }

  }


// 1024

  @media only screen and (min-width: 1024px) {

    .list-header {
      max-width: 960px;
  }
      ul {
     max-width: 960px;
    }

  }

// 1280

  @media only screen and (min-width: 1280px) {



    li {
      font-size: 32px;
      padding-left: 32px;
      &:before {
        width: 10px;
        height: 10px;
        border-radius: 10px;
      }
    }

    .list-header {
      max-width: 1040px;
      > * {
        font-size: 40px;
      }
    }

    ul {
     max-width: 1280px;
    }



  }

}
</style>



