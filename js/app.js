// Web Style Function
// Navbar:
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

// Welcome Message:
const msgWelcome = document.querySelector('#msg-welcome');
const welcomeBtn = document.querySelector('#close-welcome-msg');

welcomeBtn.addEventListener('click', () => {
    msgWelcome.style.display = "none";
})

// User Profile:
let cyclistName = "unknown";
let authorName = "unknown";
let userFTP = 150;
let isFTPNaN = false;
let userWeight = 60;
let isWeightNaN = false;
let metric = "kilogram";
let profileIsClosed = false;
let hasCD = false;
let hasWM = false;
let CDPowerHigh,CDPowerLow,WMPowerHigh,WMPowerLow,WMDuration,CDDuration;

document.querySelector('#cyclist-name').addEventListener('change', () => {
    cyclistName = document.querySelector('#cyclist-name').value;
    cardInitializeAll();
});

document.querySelector('#author-name').addEventListener('change', () => {
    authorName = document.querySelector('#author-name').value;
    cardInitializeAll();
});

document.querySelector('#metric').addEventListener('change', () => {
    metric = document.querySelector('#metric').value;
    console.log(metric);
    cardInitializeAll();
});

document.querySelector('#cyclist-ftp').addEventListener('change', () => {
    if (isNaN(document.querySelector('#cyclist-ftp').value)) {
        isFTPNaN = true;
        if (isFTPNaN) {
            alert("Invaild input, please try again.");
            isFTPNaN = false;
        }
    } else {
        userFTP = document.querySelector('#cyclist-ftp').value;
        console.log(`FTP: ${userFTP}`);
    }
    cardInitializeAll();
});

document.querySelector('#cyclist-weight').addEventListener('change', () => {
    if (isNaN(document.querySelector('#cyclist-weight').value)) {
        isWeightNaN = true;
        if (isWeightNaN) {
            alert("Invaild input, please try again.");
            isWeightNaN = false;
        }
    } else {
        if (metric === "kilogram") {
            userWeight = document.querySelector('#cyclist-weight').value;
            console.log(`Weight: ${userWeight}`);
        } else if (metric === "pound"){
            userWeight = document.querySelector('#cyclist-weight').value/2.205;
            console.log(`Weight: ${userWeight}`);
        }
        cardInitializeAll();
    }
});

// hide function
const userProfileSession = document.querySelector("#user-profile");
const userInfo = document.querySelector('#user-info');
const userProileBreakLine = document.querySelector("#user-profile .break-line");

// Button Animation
const hideProfileBtn = document.querySelector('.hide-session-btn');
const hideBtnL = document.querySelector('.hide-session-l');
const hideBtnR = document.querySelector('.hide-session-r');

hideProfileBtn.addEventListener('click', () => {
    if (profileIsClosed) {
        hideBtnL.style.transform = "rotate(45deg)";
        hideBtnR.style.transform = "rotate(-45deg)";
        userInfo.style.display = "inline";
        userProileBreakLine.style.marginTop = "2.5rem";
        userProfileSession.style.padding = "1rem 2rem 1rem";
        profileIsClosed = false;
    } else {
        hideBtnL.style.transform = "rotate(-45deg)";
        hideBtnR.style.transform = "rotate(45deg)";
        userInfo.style.display = "none";
        userProileBreakLine.style.marginTop = "1rem";
        userProfileSession.style.padding = ".05rem 2rem 1rem";
        profileIsClosed = true;
    }
})