// Mobile Menu
const hambuger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const mobileLink = document.querySelector('#mobileLink');
const faSolid = document.querySelector('.fa-solid');


hambuger.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
});

document.addEventListener("DOMContentLoaded", function() {
    const hero = document.getElementById('justifyHero');


    hero.style.animation = 'bounce-once 1000s ease-out forwards';
});