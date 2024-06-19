var menuBtn = document.querySelector('.menu-btn')
var navLinksWrapper = document.querySelector('.nav-links')

menuBtn.addEventListener('click', toggleMenu);
//Function To Toggle Menu Button
function toggleMenu(){
    menuBtn.classList.toggle('active');
    navLinksWrapper.classList.toggle('active');
}