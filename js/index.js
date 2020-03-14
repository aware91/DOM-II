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