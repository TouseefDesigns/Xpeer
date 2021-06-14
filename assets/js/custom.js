// Sticky Navbar

window.onscroll = function () { myFunction() };
var navbar = document.getElementById("mynavbar");
function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


$(document).ready(function () {

  $(".filter-button").click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    }
    else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
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
$(document).ready(function (){
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
});


//JavaScript
  
  // jQuery counterUp
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 10,
  //   time: 1000
  // });
  // $(document).ready(function (){
  //   $('[data-toggle="counter-up"]').counterUp({
  //     delay: 10,
  //     time: 1000
  //   });
  //   });
// $(document).ready(function () {
//   $(".filter-button").click(function (e) {
//     $(".filter-button").removeClass('active');
//     var $this = $(this);
//     if (!$this.hasClass('active')) {
//       $this.addClass('active');
//     }
//     //e.preventDefault();
//   });
// });


// $(document).ready(function(){

//   $(".filter-button").click(function(){
//       var value = $(this).attr('data-filter');

//       if(value == "all")
//       {
//           $('.filter').removeClass('hidden');
//           $('.filter').show('1000');
//       }
//       else
//       {
//   //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//   //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//           $(".filter").not('.'+value).hide('3000');
//           $('.filter').filter('.'+value).show('3000');

//       }
//   });

//   if ($(".filter-button").removeClass("active")) {
//   $(this).removeClass("active");
//   }
//   $(this).addClass("active");

//   });
