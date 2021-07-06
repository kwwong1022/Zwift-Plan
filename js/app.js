// Web Style Function
const mainNav  =document.querySelector('.main-nav');
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

visualViewport.addEventListener('resize', function() {
    nav.classList.remove('nav-active');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
    });
  });

// Plan Tool Function
var textGlob = "Starter \n";
var Form,VarA , VarB;
function createText(filename)
{
    var text = textGlob;
    Form = document.getElementById("formMain");
    VarA = Form.elements['itemA'];
    VarB = Form.elements['itemB'];
    var msg = [];
    msg[0] = VarA.value;
    msg[1] = VarB.value;
    for (let index = 0; index < msg.length; index++) {
        text+=msg[index];
        text += " & ";
    }
    download(filename, text)
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}