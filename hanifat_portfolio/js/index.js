// Toggle function

const toggler = document.querySelector("#toggle");
const navLinks = document.querySelectorAll(".nav-link");
const navBar = document.querySelector("#navbar");

toggler.addEventListener("click", () => {
  navBar.classList.toggle("mobile--out");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("mobile--out");
  });
});
