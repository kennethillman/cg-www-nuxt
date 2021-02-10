<template>
  <section class="cg-editorial-content">
    <div class="site-content-width">

      <prismic-rich-text :field="slice.primary.content" />

    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-content'
}
</script>

<style lang="scss">

.cg-editorial-content {

  padding: 56px 0 32px;
  font-size: 18px;
  font-family: $font-cg;
  line-height: 1.8;

  h2,h3,h4 {
    line-height: 1.256;
    margin: 0;
    padding-bottom: 16px;
    padding-top: 16px;
    font-family: $font-cg-2;
  }

  h2 {
    font-size: 40px;
  }
  h3 {
    font-size: 32px;
  }
  h4 {
    font-size: 24px;
  }

  p {
    margin-bottom: 24px;
  }

  .site-content-width {
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

    .site-content-width {
      box-sizing: content-box;
      padding-right: 80px;
    }

    ul {
      padding: 32px 0 48px;
      width: 680px;
      margin-left: -50px;
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

    .site-content-width {
      padding-right: 140px;
    }

  }

  // 1280

  @media only screen and (min-width: 1280px) {

    font-size: 20px;

    .site-content-width {
      padding-right: 240px;
    }

    h2 {
      font-size: 56px;
    }
    h3 {
      font-size: 44px;
    }
    h4 {
      font-size: 32px;
    }


    ul {
      width: 800px;
      margin-left: -70px;
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



