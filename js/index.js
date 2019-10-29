// Your code goes here
// mouseover event
const busHeader = document.querySelector('.content-section .text-content');
busHeader.addEventListener('mouseover', () => {
  busHeader.style.color = 'red';
});

//keydown must be on 'document'
const imgKeyDown = document.querySelector('.content-section .img-content img');
document.addEventListener('keydown', event => {
  imgKeyDown.style.border = '5px solid blue';
  console.log(event);
});

//wheel event -> won't work for me because i have trackpad
// const wheelEvent = document.querySelector(
//   '.content-section .text-content .img-content img'
// );
// wheelEvent.addEventListener('wheel', () => {
//   wheelEvent.style.transform = 'scale(2.0)';
// });

//drag and drop event

//load event
const loadEvent = document.querySelector('body');
window.addEventListener('load', () => {
  alert('Welcome to the Fun Bus Experience');
});

//focus event //
const focusEvent = document.querySelector('footer');
focusEvent.addEventListener('focus', () => {
  focusEvent.style.background = 'purple';
});

//resize event
const resizeEvent = document.querySelector('.content-destination img');
window.addEventListener('resize', event => {
  resizeEvent.src = 'img/bram-van-oost-oOCI35aIA3M-unsplash.jpg';
  // console.log(event);
});

//scroll event -> doesn't work for me because i have trackpad
const scrollEvent = document.querySelector('body');
window.addEventListener('scroll', () => {
  body.style.background = 'red';
});

//select event

//dblclick event
const dblClickEvent = document.querySelector('.nav a');
dblClickEvent.addEventListener('dblclick', () => {
  dblClickEvent.textContent = "Todd's Bus";
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
