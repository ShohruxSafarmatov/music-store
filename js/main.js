let elMenuBtn = document.querySelector(".header__menu-btn");
let elHaederBg = document.querySelector(".header__bg");


let elClick = false
elMenuBtn.addEventListener('click', () => {
    if (elClick) {
        elClick = false
        elMenuBtn.classList.remove('active')
        elHaederBg.style.left = '100%'

    }
    else {
        elClick = true
        elMenuBtn.classList.add('active')
        elHaederBg.style.left = '0'
    }


});


