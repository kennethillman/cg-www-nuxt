<template>

  <div class="cg-qa">

    <section class="cg-section">
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
    </section>

    <div class="site-content-width">



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


    </div>
  </div>
</template>

<script>


export default {
  props: ['slice'],
  name: 'slice-qa',
}
</script>

<style lang="scss">

.cg-qa {

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
          height: $mm;
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

      h4{
        text-align: center;
        padding: $mm 0;
        margin: 0;
        background: #f6f6f6;
        // border-bottom: 1px solid black;
        // border-top: 1px solid black;
        &:after {
          content: ' -> #{$mm} x2'
        }
        &:before {
          content: 'Mobile, '
        }
      }
    }



    @media only screen and (min-width: 768px) {
      .cg-section {
        padding: $mt 0;
        .line{
          &.-after,
          &.-before {
            height: $mt;
          }
        }
        h4{
          &:after {
            content: ' -> #{$mt} x2'
          }
          &:before {
            content: 'Tablet, '
          }
        }
      }
    }

    @media only screen and (min-width: 1280px) {
      .cg-section {
        padding: $md 0;
        .line {
          &.-after,
          &.-before {
            height: $md;
          }
        }
        h4{
          &:after {
            content: ' -> #{$md} x2'
          }
          &:before {
            content: 'Desktop, '
          }
        }
      }
    }

}
</style>



