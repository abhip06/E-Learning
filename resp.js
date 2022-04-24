burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
navList = document.querySelector('.nav-list');


burger.addEventListener('click', () =>{
    rightNav.classList.toggle('visibilityClass');
    navList.classList.toggle('visibilityClass');
    navbar.classList.toggle('heightNav');
});
