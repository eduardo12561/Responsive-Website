const menu = document.querySelector('#mobile-menu')
const menuLink = document.querySelector('.navbar__menu')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLink.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)


// Animation Text
var textWrapper = document.querySelector('.hero__heading');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.hero__heading .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.hero__heading',
    opacity: 0,
    duration: 1000000000,
    easing: "easeOutExpo",
    delay:  1000000000
  });


  anime.timeline({loop: true})
  .add({
    targets: '.word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.word',
    opacity: 0,
    duration:  1000000000,
    easing: "easeOutExpo",
    delay:  1000000000
  });