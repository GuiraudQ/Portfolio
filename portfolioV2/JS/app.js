// const loader = document.querySelector('.loader');

// window.addEventListener('load', () => {
//     loader.classList.add('loaderOut')
// })

let boutonBurger = document.getElementById('openBurger');
let divMenu = document.getElementById('menu');
let divGlass = document.getElementById('glass');
let isOpen = false;
let test1 = document.getElementById('test1');
let test2 = document.getElementById('test2');
let test3 = document.getElementById('test3');
let test4 = document.getElementById('test4');
let num = document.getElementById('num');
function openMenu() {
    if (isOpen == false){
        divMenu.style.transitionDelay = "0s";
        divGlass.style.transitionDelay = "0.1s";
        divMenu.style.width = "70vw";
        divGlass.style.width = "99%";

        test1.style.opacity = '1';
        test1.style.transitionDelay = "0.3s";
        test2.style.opacity = '1';
        test2.style.transitionDelay = "0.5s";
        test3.style.opacity = '1';
        test3.style.transitionDelay = "0.6s";
        test4.style.opacity = '1';
        test4.style.transitionDelay = "0.6s";
        num.style.opacity = '1';
        num.style.transitionDelay = "0.7s";
    }else {
        divMenu.style.transitionDelay = "0.7s";
        divGlass.style.transitionDelay = "0.6s";
        divGlass.style.width = "0";
        divMenu.style.width = "0";

        test1.style.opacity = '0';
        test1.style.transitionDelay = "0.4s";
        test2.style.opacity = '0';
        test2.style.transitionDelay = "0.2s";
        test3.style.opacity = '0';
        test3.style.transitionDelay = "0.1s";
        test4.style.opacity = '0';
        test4.style.transitionDelay = "0.1s";
        num.style.opacity = '0';
        num.style.transitionDelay = "0s";
    }
    isOpen = !isOpen;
}

const slides = {
    1: document.querySelectorAll('[data-slide="1"]'),
    2: document.querySelectorAll('[data-slide="2"]'),
    3: document.querySelectorAll('[data-slide="3"]'),
}
const stepper = {
    1: document.querySelectorAll('[data-stepper="1"]'),
    2: document.querySelectorAll('[data-stepper="2"]'),
    3: document.querySelectorAll('[data-stepper="3"]'),
    4: document.querySelectorAll('[data-stepper="4"]'),
    5: document.querySelectorAll('[data-stepper="5"]'),
    6: document.querySelectorAll('[data-stepper="6"]'),
}
const years = {
    1: document.querySelectorAll('[data-years="1"]'),
    2: document.querySelectorAll('[data-years="2"]'),
    3: document.querySelectorAll('[data-years="3"]'),
}

let currentSlide = 1;

function updateSlide(){
    if (slides[currentSlide]){
        slides[currentSlide-1].forEach(element => {
            element.classList.toggle('active')
            element.classList.toggle('last')
        });
        slides[currentSlide].forEach(element => {
            element.classList.toggle('active')
        });
    }
    if (slides[currentSlide]){
        for (let i = 0; i < 4; i++) {
            if (years[currentSlide][i].textContent != years[currentSlide-1][i].textContent){
                console.log(years[currentSlide][i]);
                years[currentSlide-1][i].style.transitionDelay = i/15+"s";
                years[currentSlide][i].style.transitionDelay = i/15+"s";
                years[currentSlide-1][i].classList.toggle('last');
                years[currentSlide-1][i].classList.toggle('active');
                years[currentSlide][i].classList.toggle('active');
            }
        }
    }
    if (stepper[currentSlide]){
        stepper[currentSlide].forEach(element => {
            element.classList.toggle('active')
        });
    }
}

function turnLeft(){
    if (slides[currentSlide-1] || stepper[currentSlide-1]){
        updateSlide();
        if (currentSlide > 1){
            currentSlide--;
        }
    }
}
function turnRight(){
    if (currentSlide < 6){
        currentSlide++;
    }
    updateSlide();
}