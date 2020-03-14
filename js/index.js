// Your code goes here
// gsap.to(elementName, { duration: 3, rotationY: 360 }); // use for gsap

//1
const busImg = document.querySelector('.intro img')
busImg.addEventListener('mouseenter', () => {
    busImg.style.transform = 'scale(.5)';
    busImg.style.transition = 'all 0.5s';
})
busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = 'scale(1)'
})

//2 & 3
const mainTitle = document.querySelectorAll('h2')
mainTitle.forEach(title => {
    title.addEventListener('click', (event) => {
        event.target.style.color = "green"
    })
    title.addEventListener('dblclick', (event) => {
        event.target.style.color = 'black'
    })
})

// 4
const sunImg = document.querySelector('.content-section .img-content img')
window.addEventListener('resize', () => {
    sunImg.src = '/img/julentto-photography-CIuakYIjadc-unsplash.jpg'
})

//5
const body = document.querySelector("body");
body.addEventListener("click", () => {
    body.style.backgroundColor="#89c6a4";
})
const cardGroup = document.querySelector(".content-section");
cardGroup.addEventListener('click', (event) => {
    cardGroup.style.backgroundColor="#aad0e0";
});
const card = document.querySelector(".content-section .text-content");
card.addEventListener('click', (event) => {
    card.style.backgroundColor="#FFFF66";
})

//6
const links = document.querySelectorAll('.nav')
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

//7
const boat = document.querySelector('.inverse-content img')
boat.addEventListener('mouseenter', () => {
    boat.src = '/img/luca-bravo-O453M2Liufs-unsplash.jpg'
})
boat.addEventListener('mouseleave', () => {
    boat.src = '/img/fun.jpg'
})

//8
const funBus = document.querySelector('h1')
funBus.addEventListener('click', () => {
    funBus.style.color = 'yellow'
})

//9
const welcome = document.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}

//10
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.footer');
el.onwheel = zoom;