const buttons = document.querySelectorAll('a.bouton');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement("span");
        ripples.classList.add("coord")
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        },1000)
    })
})


const spies = document.querySelectorAll("[data-spy]")
let observer = null
/**
 * 
 * @param {IntersectionObserverEntry[]} entries 
 */
const callBack = function(entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            let monid = entry.target.getAttribute('id')
            let anchor = document.querySelector('li a[href="#'+monid+'"')
            if (anchor === null) {
                return null
            }
            document
                .querySelectorAll('#menu-stick ul li.active')
                .forEach(node => node.classList.remove('active'))
            anchor.parentElement.classList.add("active")
        }
    })
}

/**
 * @param {NodeListOf.<Element>} elems 
 */
const scrollspy = function (elems) {
    if (observer !== null) {
        elems.forEach(elem => observer.unobserve(elem))
    }
    const y = Math.round(window.innerHeight * 0.6)
    observer = new IntersectionObserver(callBack, {
        rootMargin : `-${window.innerHeight-y-1}px 0px -${y}px 0px`
    })
    spies.forEach(elem => observer.observe(elem))
}

/**
 * @param {Function} callback
 * @param {number} delay
 * @return {Function}
 */
const debounce = function (callback, delay){
    let timer;
    return function(){
        let args = arguments;
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, delay)
    }
}

if (spies.length > 0) {
    scrollspy(spies)
    let windowh = window.innerHeight
    window.addEventListener ('resize', debounce(function() {
        if (window.innerHeight !== windowh) {
            scrollspy(spies)
            windowh = window.innerHeight
        }
    }, 500))
}

const navApear = () => {
    const burger = document.querySelector('#menu-stick div.link div.activator')
    const nav = document.querySelector('#menu-stick div.link ul')

    burger.addEventListener('click', () => {
        if (nav.style.display === "none")
        {
            nav.style.display = "flex";
        }
    });
}

navApear();

//3D card animation

//Items
const card = document.querySelector('#competences .cards .card');
const cards = document.querySelector('#competences .cards');
const img = document.querySelector('#competences .cards .card img');
const percent = document.querySelector('#competences .cards .card .text h3');
const text = document.querySelector('#competences .cards .card .text p');


//Variable
let hCards = cards.getBoundingClientRect().height;
let wCards = cards.getBoundingClientRect().width;
let topCards = cards.getBoundingClientRect().top;
let leftCards = cards.getBoundingClientRect().left;

//Moving card animation
cards.addEventListener("mousemove", (e) => {

    let xAxis = (((e.pageX - (leftCards -1))/wCards) * 100);
    let yAxis = (((e.pageY - (topCards -1))/hCards) * 100);
    
    let xDeg = ((Math.round(xAxis) - 50));
    let yDeg = ((Math.round(yAxis) - 50));

    card.style.transform = `rotateY(${xDeg}deg) rotateX(${yDeg}deg)`;
});

//Animate in
cards.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';

    // img.style.transform = "translateZ(150px)";
    // percent.style.transform = "translateZ(150px)";
    // text.style.transform = "translateZ(150px)";
});

//Animate out
cards.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = 'all 1s ease';

    // img.style.transform = "translateZ(0)";
    // percent.style.transform = "translateZ(0)";
    // text.style.transform = "translateZ(0)";

});