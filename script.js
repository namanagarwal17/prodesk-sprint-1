const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const themeButton = document.querySelector(".theme-btn");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});