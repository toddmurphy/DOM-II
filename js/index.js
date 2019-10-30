// Your code goes here
// mouseover event -> mouseover text to change color
const busHeader = document.querySelector('.content-section .text-content');
busHeader.addEventListener('mouseover', () => {
  busHeader.style.color = 'red';
});

//keydown must be on 'document' -> press any key to add border to an image
const imgKeyDown = document.querySelector('.content-section .img-content img');
document.addEventListener('keydown', event => {
  imgKeyDown.style.border = '5px solid blue';
  console.log(event);
});

//load event -> changes Fun Bus logo to "Todd's Bus"
const loadEvent = document.querySelector('.logo-heading');
window.addEventListener('load', () => {
  loadEvent.textContent = 'Slow Bus';
});

//focus event // -> changes footer background purple
const focusEvent = document.querySelector('footer');
focusEvent.addEventListener('focus', () => {
  focusEvent.style.background = 'purple';
});

//resize event -> adds a Tesla car cockpit
const resizeEvent = document.querySelector('.content-destination img');
window.addEventListener('resize', event => {
  resizeEvent.src = 'img/bram-van-oost-oOCI35aIA3M-unsplash.jpg';
  // console.log(event);
});

//dblclick event -> double click "Home" nav to change text to "Todd's Bus"
const dblClickEvent = document.querySelector('.nav a');
dblClickEvent.addEventListener('dblclick', () => {
  dblClickEvent.textContent = "Todd's Bus";
});

//scroll event -> doesn't work for me because i have trackpad
const scrollEvent = document.querySelector('body');
window.addEventListener('scroll', () => {
  body.style.background = 'red';
});

//mouse enter and mouse leave -> main bus image grows and shrinks to orginial
const mouseInEvent = document.querySelector('.intro img');
mouseInEvent.addEventListener('mouseenter', () => {
  mouseInEvent.style.transform = 'scale(1.4)';
  mouseInEvent.style.transition = 'all 0.5s';
});

const mouseOutEvent = document.querySelector('.intro img');
mouseOutEvent.addEventListener('mouseleave', () => {
  mouseOutEvent.style.transform = 'scale(1)';
  mouseOutEvent.style.transition = 'all 0.5s';
});

//second click event -> click titles to changle background color
const secondClickEvent = document
  .querySelectorAll('.content-pick .destination h4')
  .forEach(titles => {
    titles.addEventListener('click', () => {
      titles.style.background = 'salmon';
    });
  });

//third click event -> click nav links to make font bigger
const thirdClickEvent = document
  .querySelectorAll('nav .nav-link')
  .forEach(links => {
    links.addEventListener('click', () => {
      links.style.fontSize = '2.4rem';
    });
  });

/**** Nest two similar events in the site and prevent event propogation using .stopPropogation() ******/
const firstClick = document.querySelector('.intro h2');
firstClick.addEventListener('click', event => {
  firstClick.style.color = 'blue';
  console.log(event);
  event.stopPropagation(); //must go on the child element
});

const secondClick = document.querySelector('.intro');
secondClick.addEventListener('click', event => {
  secondClick.style.background = 'green';
  console.log(event);
});

/***** Stop the navigation from items from refreshing the page using .preventDefault() */
//Added a link (www.google.com) to About us and will use .preventDefault() to stop from going there.
//MUST add .forEach on the .quertSelectorAll to loop over and get all atags
const linkPrevent = document.querySelectorAll('.nav a').forEach(atag => {
  atag.addEventListener('click', event => {
    console.log('stopped the link');
    event.preventDefault();
  });
});
