const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#navbar-logo");
const body = document.querySelector("body");

//Dispaly mobile menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
};

//need to this make the mobile menu appear
menu.addEventListener("click", mobileMenu);

//Animations
gsap.registerPlugin(ScrollTrigger);

//use this to select a HTML element by class name and animate from a certain state.
gsap.from(".animate-hero", {
  duration: 0.6,
  opacity: 0,
  //moves the element downward by 150 units
  y: -150,
  //the amount of delay inbetweeen element appearance
  stagger: 0.3,
});

gsap.from('.animate-services', {
    //when the user reaches the element with the 'animate-services' class, this animation will trigger
    scrollTrigger: '.animate-services',
    duration: 0.5,
    opacity: 0,
    x: -150,
    stagger: 0.12
});

gsap.from('.animate-img', {
//'animate-img' is still within the 'animate-services' div so you don't have to change it 
    scrollTrigger: '.animate-services',
    duration: 1.2,
    opacity: 0,
    x: -200,
});

gsap.from('.animate-membership', {
    //when the user reaches the element with the 'animate-services' class, this animation will trigger
    scrollTrigger: '.animate-membership',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay:0.5
});

gsap.from('.animate-card', {
    //when the user reaches the element with the 'animate-services' class, this animation will trigger
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay:0.2
});

gsap.from('.animate-team', {
    //when the user reaches the element with the 'animate-services' class, this animation will trigger
    scrollTrigger: '.animate-team',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay:0.2
});

gsap.from('.animate-email', {
    //when the user reaches the element with the 'animate-services' class, this animation will trigger
    scrollTrigger: '.animate-email',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay:0.4
});
