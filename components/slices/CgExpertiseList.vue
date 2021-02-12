<template>
  <section class="cg-expertise-list">
    <div class="centerd-content-width">

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

  padding: 56px 0 32px;
  font-family: $font-sangbleu;


  .centerd-content-width {
    max-width: 580px;
    margin: 0 auto;
  }

  ul {
    padding: 16px 0 24px;
  }

  li {
    position: relative;

    font-size: 24px;
    line-height: 1.6;
    padding: 12px 0;
    padding-left: 24px;
    color: $blue;
    font-weight: bold;
    box-sizing: content-box;

    &:before {
      content: "";
      background-color: $red;
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
      width: 680px;
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

  }

// 1280

  @media only screen and (min-width: 1280px) {

    ul {
      width: 1060px;
    }

    li {
      font-size: 36px;
      padding-left: 32px;
      &:before {
        width: 10px;
        height: 10px;
        border-radius: 10px;
      }
    }

  }

}
</style>



