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