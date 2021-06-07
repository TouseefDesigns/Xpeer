// Sticky Navbar

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("mynavbar");
function myFunction() {
  if (window.pageYOffset >= 100) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}





// window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("mynavbar");
// function myFunction() {
//   if (window.pageYOffset >= 100) {
// 	navbar.classList.add("sticky")
//   } else {
// 	navbar.classList.remove("sticky");
//   }
// }