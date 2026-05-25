const menuHamburger = document.querySelector(".ham-icon");
const navList = document.querySelector(".nav-list");
const navbar = document.querySelector('nav');

menuHamburger.addEventListener("click", () => {
    navList.classList.toggle("show-nav");
});

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("blurred");
    } else {
        navbar.classList.remove("blurred");
    }
})