<template>
  <section class="cg-case cg-case-two">
    <div class="site-content-width">

      <br><br>
      {{slice}}

    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-case-two'

}
</script>

<style lang="scss">

.cg-case-two {

  padding: 50px 0 0;
  text-align: center;


// 480

  @media only screen and (min-width: 480px) {

  }


// 768

  @media only screen and (min-width: 768px) {






  }


// 1280

  @media only screen and (min-width: 1280px) {

    padding: 100px 0 50px;


  }


}
</style>



