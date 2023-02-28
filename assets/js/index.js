const menuHamburger = document.querySelector(".menu-hamburger");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");

menuHamburger.addEventListener("click", hideOrShowNavbar);

function hideOrShowNavbar() {
    menuHamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    header.classList.toggle("active")
}