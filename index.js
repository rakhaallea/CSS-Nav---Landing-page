const menuHamburger = document.querySelector(".ham-icon");
const navList = document.querySelector(".nav-list");
const navbar = document.querySelector('nav');

if (menuHamburger && navList) {
    menuHamburger.addEventListener("click", () => {
        navList.classList.toggle("show-nav");
    });
}

const passwordIcon = document.getElementById("show-icon");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");

const formLogin = document.getElementById('form-login')

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
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("blurred");
    } else {
        navbar.classList.remove("blurred");
    }
})

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
})

emailInput.addEventListener("input", () => {

    const emailValue = emailInput.value.trim();

    if (emailValue === "") {

        removeValidation(emailInput);

    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, "Invalid email format");

    } else {

        setSuccess(emailInput);

    }

});

passwordInput.addEventListener("input", () => {

    const passwordValue = passwordInput.value.trim();

    if (passwordValue === "") {

        removeValidation(passwordInput);

    } else if (passwordValue.length < 6) {
        setError(passwordInput, "Minimum 6 karakter");

    } else {

        setSuccess(passwordInput);

    }

});

function validateInputs() {
    let isValid = true;

    const emailValue = emailInput.value.trim()
    const passwordValue = passwordInput.value.trim()

    if (emailValue === "") {
        setError(emailInput, "email is required")
        isValid = false;
    }
    else if (!isValidEmail(emailValue)) {
        setError(emailInput, "Invalid email format")
        isValid = false;
    } else {
        setSuccess(emailInput)
    }

    if (passwordValue === "") {
        setError(passwordInput, "password is required")
        isValid = false;
    } else if (passwordValue.length < 6) {
        setError(passwordInput, "Minimum 6 karakter")
        isValid = false;
    } else {
        setSuccess(passwordInput)
    }

    if (isValid) {
        emailInput.value = "";
        passwordInput.value = "";

        removeValidation(emailInput);
        removeValidation(passwordInput);
    }
}

function setError(input, message) {
    const inputGroup = input.parentElement;

    const errorMessage = inputGroup.querySelector(".error-message");

    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")

    errorMessage.innerText = message;
}

function setSuccess(input) {
    const inputGroup = input.parentElement;

    const errorMessage = inputGroup.querySelector(".error-message");

    inputGroup.classList.remove("error")
    inputGroup.classList.add("success")

    errorMessage.innerText = "";
}

function removeValidation(input) {

    const inputGroup = input.parentElement;

    inputGroup.classList.remove("error");
    inputGroup.classList.remove("success");

    const errorMessage = inputGroup.querySelector(".error-message");

    errorMessage.innerText = "";

}

function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}