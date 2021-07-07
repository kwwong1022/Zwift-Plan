// Web Style Function
// Navbar
const mainNav = document.querySelector('.main-nav');
const toggler = document.querySelector('.toggler');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

toggler.addEventListener('click', () => {
    console.log("clicked");
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
        }
    });
});

visualViewport.addEventListener('resize', function () {
    nav.classList.remove('nav-active');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
    });
});

// Welcome Message
const msgWelcome = document.querySelector('#msg-welcome');
const welcomeBtn = document.querySelector('#close-welcome-msg');

welcomeBtn.addEventListener('click', ()=> {
    msgWelcome.style.display = "none";
})

// Plan Tool
let userWeight = "75";
let userFTP = "200";

