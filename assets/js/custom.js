!(function($){
  "use strict";

/*===========================
====== Sticky Navbar =======
=============================*/
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("mynavbar");
function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/*===========================
==== Main Banner Carousel ===
=============================*/
$('#main-banner-carousel').owlCarousel({
  loop: true,
  dots: false,
  autoplay:true,
  smartSpeed: 1500,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive: {
      0: {
          items: 1
      }
  }
});
/*===========================
====== Porfolio Filter ======
=============================*/
$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.filter').show('1000');
    }
    else {
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');
    }
// active
    $(".filter-button").removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $this.addClass('active');
    }
  });
});
/*===========================
======= Stat Counter ========
=============================*/
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
/*===========================
======== PopUp Video ========
=============================*/
$(document).ready(function() {
  $('.venobox').venobox({
    'share': false
  });
  });
/*===========================
=== Testimonial Carousel ====
=============================*/
$(document).ready(function (){
  $('#testimonial-carousel').owlCarousel({
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        991: {
            items: 1
        },
        1200: {
            items: 1
        },
        1920: {
            items: 1
        }
    }
});
  });
})(jQuery);