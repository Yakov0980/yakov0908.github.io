let navbar = document.querySelector('.section-navbar')

window.addEventListener('scroll', scrollEvent)

function scrollEvent(event) {
    let yOffset = window.pageYOffset;
    if (yOffset == 0) {
        navbar.style.borderBottom = '0px solid #00FFF5';
    } else {
        navbar.style.borderBottom = '1px solid #00FFF5';
    }
}

let BurgerMenu = document.querySelector('.burger-menu')
let links = document.querySelector('.burger-menu-links')


BurgerMenu.addEventListener('click', clickEvent)

function clickEvent(event) {
    links.classList.toggle('open')
    BurgerMenu.classList.toggle('open')
}