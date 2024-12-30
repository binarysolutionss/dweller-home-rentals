// JavaScript Document

//Smooth scroll for navigation link
document.querySelectorAll('a[href^="#').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});
//End of Smooth scroll for navigation link

// Nav Bar
let navBar = document.querySelector('.nav-bar .nav-options')

document.querySelector('#menu-btn').onclick=()=>{
    navBar.classList.add('active');
    //Restrict scrolling when menu is active
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');
}

document.querySelector('#close-navbar').onclick=()=>{
    navBar.classList.remove('active');
    //Allow scrolling when menu is closed
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');
}
//End of nav bar