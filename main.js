            //Nav Stuff
            let mobileMenu = document.querySelector(".mobile-menu");
            let navOpen = document.querySelector(".mobile-dropper");
          
            let navClose = document.querySelector(".m-x");
            let anchors = document.querySelectorAll(".m-nav-anchor");
            let hrs = document.querySelectorAll(".m-nav-list hr");
            navOpen.addEventListener("click", () => {
              anchors.forEach(anchor => {
                anchor.style.display = "block";
                // anchor.classList.add('jello')
              });
            
              hrs.forEach(hr => {
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
              anchors.forEach(anchor => {
                anchor.style.display = "none";
                // anchor.classList.remove('jello')
              });
            
              hrs.forEach(hr => {
                hr.style.display = "none";
              });
            });

            

            // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
   
  } else {
    navbar.classList.remove("sticky");
  }
}
        

