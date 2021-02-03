
import lax from 'lax.js'

window.addEventListener('load', function(event) {

    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.lax-one', {
      scrollY: {
         translateY: [           // CSS property
            ['elInY', 'elOutY'],  // Driver value map
            [0, 80],   // Animation value map

          ],
      }
    })

    lax.addElements('.lax-two', {
      scrollY: {
         translateY: [           // CSS property
            ['elInY', 'elOutY'],  // Driver value map
            [0, -160],   // Animation value map

          ],
      }
    })


})
