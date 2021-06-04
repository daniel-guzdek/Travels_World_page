const nav = document.querySelector('.navigation');
const ulContainer = document.querySelector('.menu__item-list');
const activeClass = document.querySelector('.navigation.active');
const burger = document.querySelector('.burger');

// handle loader
window.addEventListener('load', () => {
  const preload = document.querySelector('.loader');
  preload.classList.add('loader-finish');
})

//BURGER - handle for @media (max-width: 768px)
const navSlide = ()=> {
  const burger = document.querySelector('.burger');
  const burgerLines = document.querySelectorAll('.burger div');
  const ulContainer = document.querySelector('.menu__item-list');
  const navLinks = document.querySelectorAll('.menu__item');
  
  burger.addEventListener('click', ()=> {
    nav.classList.toggle('nav-active');
      //Toggle Nav
      ulContainer.classList.toggle('nav-active');
      //Animate Links
      navLinks.forEach((link, index)=> {
          if(link.style.animation){
              link.style.animation = '';
          } else {
              link.style.animation = `ulConteinerFade 0.5s ease forwards ${index / 7 + 0.3}s`
          }
      });
      //Burger Animation
      burgerLines.forEach(line => {
          line.classList.toggle('burger-animation');
      }) 
  });

  // closing burger menu-list after click in menu-item
  navLinks.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      ulContainer.classList.remove('nav-active');
      burgerLines.forEach(line => {
        line.classList.remove('burger-animation');
      })
    })
  })
}
// Calling the above function
navSlide();

// Scrolling to proper sections
    document.querySelector('.menu__item-about').addEventListener('click', () => window.scrollTo({
    top: document.querySelector('.about__content').offsetTop,
    behavior: 'smooth',
  }));

  document.querySelector('.menu__item-travels').addEventListener('click', () => window.scrollTo({
    top: document.querySelector('.destinations-wrapper').offsetTop,
    behavior: 'smooth',
  }));

  document.querySelector('.menu__item-guides').addEventListener('click', () => window.scrollTo({
    top: document.querySelector('.guides__wrapper').offsetTop,
    behavior: 'smooth',
  }));

  document.querySelector('.menu__item-blog').addEventListener('click', () => window.scrollTo({
    top: document.querySelector('.blog-wrapper').offsetTop,
    behavior: 'smooth',
  }));

  document.querySelector('.menu__item-contact').addEventListener('click', () => window.scrollTo({
    top: document.querySelector('.footer-content-container').offsetTop,
    behavior: 'smooth',
  }));


// SLOGAN
// enlarging background on scroll event.

const enlargeSloganPicture = (e) => {
    let windowScrollY = window.scrollY;
    let sloganHeightFromTop = document.querySelector('.slogan__container').offsetTop;
 
    if(windowScrollY > (sloganHeightFromTop - sloganHeightFromTop/2)) {
        const sloganPicture = document.querySelector('.slogan-picture');
        sloganPicture.style.animation = `enlargePicture 40s linear infinite`;
    }
}

document.addEventListener('scroll', enlargeSloganPicture);


// SECOND FOOTER
// Support for arrow-up icon to scroll to the beginning of a web page

const footerUpIcon = document.querySelector('.fa-arrow-circle-up');

footerUpIcon.addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})