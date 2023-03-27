$(document).ready(function(){

     $('#Banner-slider').owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          dots:false,
          mouseDrag: false,
          touchDrag: false,
          responsive: {
               0: {
                    items: 1
               },
               600: {
                    items: 1
               },
               1000: {
                    items: 1
               }
          }
     })

     $('#Property-slider').owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          dotsEach:3,
          mouseDrag: false,
          touchDrag:false,
          navText:['Prev','Next'],
          responsive: {
               576: {
                    items: 1
               },
               700: {
                    items: 2
               },
               899: {
                    items:2
               },
               900: {
                    items:3
               }
          }
     })

     $('#Customer-testimonial').owlCarousel({
          loop: true,
          margin: 50,
          nav: true,
          dotsEach: 3,
          navText: ['Prev', 'Next'],
          responsive: {
               0:{
                    items:1
               },
               576: {
                    items: 1
               },
               700: {
                    items: 2
               },
               899: {
                    items: 2
               },
               900: {
                    items: 3
               }
          }
     })

});