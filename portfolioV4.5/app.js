// Code pour l'animation du texte dans le header
// https://codepen.io/guiraudq/pen/XWELJbY

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// Animation header
const foldableTop = document.getElementById("foldableTop")
const foldableBot = document.getElementById("foldableBot")
const monTest = document.getElementById("monTest")
const hLogo = document.getElementById("hLogo")

let tToggle = 0;
function fold(){
    hLogo.style.transition = '';
    if (tToggle % 2 == 0){
        foldableTop.style.transform = 'rotateX(90deg)';
        foldableBot.style.transform = 'rotateX(-90deg)';
        monTest.style.transform = 'rotateX(-90deg) translate(50%, 150%) perspective(1500px)';
        hLogo.style.transform = 'translate(50%, -55vh) scale(0.5)';
    }else{
        foldableTop.style.transform = '';
        foldableBot.style.transform = '';
        monTest.style.transform = '';
        hLogo.style.transform = '';
    }
    hLogo.style.transition = 'all 1s ease-in';
    tToggle++;
}
hLogo.addEventListener('mouseenter', ()=>{hLogo.style.transition = '';})

// placement carte carousel
const cards = document.querySelectorAll(".card");
const degres = 360/cards.length
const couleurs = ['red','blue','green','yellow','pink','violet','gray','black', 'white', 'yellowgreen', 'blueviolet', 'lavender']

for (let i = 0; i < cards.length; i++) {
    cards[i].style.background = `${couleurs[i]}`;
    cards[i].style.transform = `rotateY(${degres*i}deg) translateZ(250px)`;
}

// let cpt = 0;
// cards.forEach(card => {
//     card.style.transform = `translateY(${degres*cpt}deg)`;
//     cpt++;
// });