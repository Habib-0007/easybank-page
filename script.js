let menuBar = document.querySelector(".hamburger i");
let navMenu = document.querySelector(".navmenu");
let navLinks = document.querySelectorAll(".navmenu a");

menuBar.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuBar.classList.toggle("active");
  
  if (menuBar.classList.contains("fa-bars")) {
    menuBar.classList.remove("fa-bars");
    menuBar.classList.add("fa-multiply");
  }
  else {
    menuBar.classList.add("fa-bars");
    menuBar.classList.remove("fa-multiply");
  }
});

navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});