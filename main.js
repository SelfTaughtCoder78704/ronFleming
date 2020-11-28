//Nav Stuff
let mobileMenu = document.querySelector(".mobile-menu");
let navOpen = document.querySelector(".mobile-dropper");
let navOpen2 = document.querySelector(" .fa-bars");
let footerDate = document.getElementById("footerDate");
let navClose = document.querySelector(".m-x");
let anchors = document.querySelectorAll(".m-nav-anchor");
let hrs = document.querySelectorAll(".m-nav-list hr");
navOpen.addEventListener("click", () => {
  anchors.forEach((anchor) => {
    anchor.style.display = "block";
    // anchor.classList.add('jello')
  });
  

  hrs.forEach((hr) => {
    hr.style.display = "block";
  });

  mobileMenu.style.width = "300px";
  mobileMenu.classList.add("bounceInRight");
  navClose.style.color = "white";
});


navOpen2.addEventListener("click", () => {
  anchors.forEach((anchor) => {
    anchor.style.display = "block";
    // anchor.classList.add('jello')
  });
  

  hrs.forEach((hr) => {
    hr.style.display = "block";
  });

  mobileMenu.style.width = "300px";
  mobileMenu.classList.add("bounceInRight");
  navClose.style.color = "white";
});

navClose.addEventListener("click", () => {
  mobileMenu.style.width = "0";
  mobileMenu.classList.remove("bounceInRight");
  navClose.style.color = "rgba(255, 255, 255, 0)";
  anchors.forEach((anchor) => {
    anchor.style.display = "none";
    // anchor.classList.remove('jello')
  });

  hrs.forEach((hr) => {
    hr.style.display = "none";
  });
});

// DYNAMIC DATE FOR FOOTER
let d = new Date();
let n = d.getFullYear();
footerDate.textContent = n;

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// Get the modal
let modal = document.getElementById("myModal");

let btns = document.querySelectorAll('.btnClear')

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];



btns.forEach(btn => {
  btn.addEventListener('click', showInfo)
})

function showInfo() {
  modal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}