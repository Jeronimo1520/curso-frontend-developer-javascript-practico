const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu ');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuEmail.addEventListener('mouseover',cambiarColorOver);
menuEmail.addEventListener('mouseout',cambiarColorOut);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
} 

function cambiarColorOver(){
    menuEmail.style.color=  'var(--hospital-green)'
}

function cambiarColorOut(){
    menuEmail.style.color=  'var(--very-light-pink)'
}