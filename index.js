const menu_hamburger = document.querySelector(".ham-icon");
const nav_list = document.querySelector(".nav-list");

menu_hamburger.addEventListener("click", () => {
    nav_list.classList.toggle("show-nav");
    console.log(nav_list)
})


window.addEventListener("scroll", () => {
    const navbar = document.querySelector('nav');

    if (window.scrollY > 50) {
        navbar.classList.add("blurred");
    } else {
        navbar.classList.remove("blurred");
    }
})