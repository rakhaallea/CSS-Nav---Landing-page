const menuHamburger = document.querySelector(".ham-icon");
const navList = document.querySelector(".nav-list");

if (menuHamburger && navList) {
    menuHamburger.addEventListener("click", () => {
        navList.classList.toggle("show-nav");
    });
}

const passwordIcon = document.getElementById("show-icon");
const passwordInput = document.getElementById("password");

if (passwordIcon && passwordInput) {
    passwordIcon.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordIcon.innerHTML = "visibility_off"
            passwordInput.type = 'text'
        } else {
            passwordIcon.innerHTML = "visibility"
            passwordInput.type = 'password'
        }
})
}

window.addEventListener("scroll", () => {
    const navbar = document.querySelector('nav');

    if (window.scrollY > 50) {
        navbar.classList.add("blurred");
    } else {
        navbar.classList.remove("blurred");
    }
})