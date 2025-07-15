// Mobile menu show/hide karne ke liye events
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Hamburger button click karte hi menu dikhao
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Menu ke "close" button se menu chhupao
hideMenuBtn.addEventListener("click", () => {
    navbarMenu.classList.remove("show-menu");
});

// Login popup show karne ke liye button ka event
showPopupBtn.addEventListener("click", () => {
    document.body.classList.add("show-popup");
});

// Login popup close karne ke liye close button ka event
hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
});

// Signup aur login form toggle karne ke liye links ka event
signupLoginLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        // Agar "signup-link" par click kiya hai to signup form dikhao
        formPopup.classList.toggle("show-signup", link.id === "signup-link");
    });
});
