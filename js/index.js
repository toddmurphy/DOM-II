// Your code goes here
// mouseover event
const busHeader = document.querySelector('.content-section .text-content');
busHeader.addEventListener('mouseover', () => {
  busHeader.style.color = 'red';
});

//keydown event (not sure how to get this working)
const imgKeyDown = document.querySelector('.content-section .img-content .img');
imgKeyDown.addEventListener('keydown', () => {
  event.code === 'KeyD';
  imgKeyDown.textContent = 'I am a boat in water';
});

//wheel event
const wheelEvent = document.querySelector(
  '.content-section .text-content .img-content .img'
);
wheelEvent.addEventListener('wheel', () => {
  wheelEvent.style.tranform = 'scale(2.0)';
});

//drag and drop event

//load event
const loadEvent = document.querySelector('body');
loadEvent.addEventListener('load', () => {
  alert('Welcome to the Fun Bus Experience');
});

//focus event
const focusEvent = document.querySelector('footer');
focusEvent.addEventListener('focus', () => {
  focusEvent.style.background = 'purple';
});

//resize event
const resizeEvent = document.querySelector('.content-destination .img');
window.addEventListener('resize', () => {
  resizeEvent.src =
    'https://images.unsplash.com/photo-1553260234-9450a4ff098d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
});

//scroll event

window.addEventListener('scroll', event => {
  body.style.background = 'hotpink';
});

//select event

//dblclick event
const dblClickEvent = document.querySelector(
  '.main-navigation .container .nav-container .logo-heading'
);
dblClickEvent.addEventListener('dblclick', () => {
  dblClickEvent.textContent = "Todd's Bus";
});

/**** Nest two similar events in the site and prevent event propogation using .stopPropogation() ******/

/***** Stop the navigation from items from refreshing the page using .preventDefault() */
