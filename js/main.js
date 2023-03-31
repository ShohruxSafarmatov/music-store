let elMenuBtn = document.querySelector(".header__menu-btn");
let elHaederBg = document.querySelector(".header__bg");
let elNav = document.querySelector(".nav");


let elClick = false
elMenuBtn.addEventListener('click', () => {
    if (elClick) {
        elClick = false
        elMenuBtn.classList.remove('active')
        elHaederBg.style.left = '100%'
        elNav.classList.remove('nav__active')

    }
    else {
        elClick = true
        elMenuBtn.classList.add('active')
        elHaederBg.style.left = '0'
        elNav.classList.add('nav__active')
    }


});


