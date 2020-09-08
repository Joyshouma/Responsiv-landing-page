/* Make a Humburger menu  */

//Selectors goes here
const doc = document.querySelector('html');
const hBurger = document.querySelector(".humburger-menu");
const headerHolder = document.querySelector(".container");
const moveBtn = document.querySelector(".move-up-btn i");

// Event Listiner listen here

hBurger.addEventListener('click', () => {
  headerHolder.classList.toggle("change");
});

moveBtn.addEventListener('click', () => {
	doc.style.scrollBehavior = 'smooth';
	doc.querySelector('header');
});