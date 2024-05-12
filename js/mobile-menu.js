const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuNavLink = document.getElementById("mobile-link-1");
const menuNavLink2 = document.getElementById("mobile-link-2");
const menuNavLink3 = document.getElementById("mobile-link-3");
const menuNavLink4 = document.getElementById("mobile-link-4");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
menuNavLink.addEventListener("click", toggleMenu);
menuNavLink2.addEventListener("click", toggleMenu);
menuNavLink3.addEventListener("click", toggleMenu);
menuNavLink4.addEventListener("click", toggleMenu);