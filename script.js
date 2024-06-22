var menuBtn = document.querySelector('.menu-btn')
var navLinksWrapper = document.querySelector('.nav-links')
var navLinks = document.querySelectorAll('.nav-links li a')

menuBtn.addEventListener('click', toggleMenu);
//Function To Toggle Menu Button
function toggleMenu(){
    menuBtn.classList.toggle('active');
    navLinksWrapper.classList.toggle('active');
}

for(var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', toggleMenu)
}

//Code for testimonials slider
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 6000,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
    }
})

//Code To Show/Hide Menu When Scrolling
var homeSection = document.querySelector('.home');
window.addEventListener('scroll',pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
    if (window.scrollY > 120){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active');
    }
}
