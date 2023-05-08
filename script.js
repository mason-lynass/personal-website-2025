const button = document.getElementById('menuButton');
const menuUL = document.getElementById('menuUL');

button.addEventListener('click', function(){
  if (menuUL.classList.contains('is-active')) {
    menuUL.classList.remove('is-active')
  } else menuUL.classList.add('is-active');
});

// script for the carousel on the about page
const slidesContainer = document.getElementById("slContainer");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slArrowPrev");
const nextButton = document.getElementById("slArrowNext");
 
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
 
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});



