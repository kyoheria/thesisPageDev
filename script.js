function openNav() {
  document.getElementById("myNav").style.height = "80vw";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myNav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
