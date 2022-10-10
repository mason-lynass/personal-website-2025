const menuButton = document.querySelector('#dropdownButton')
const navDiv = document.querySelector('.nav')

menuButton.addEventListener('click', e => {
  removeMenuButton()
  loadMenu()
  pageClassCheck()
})

function removeMenuButton() {
  menuButton.remove()
}

function loadMenu() {
  loadSE()
  loadAE()
  loadSD()
  loadMP()
  loadAbout()
  loadContact()
}

function loadSE() {
  const createA = document.createElement('a')
  createA.textContent = 'Software Engineering'
  createA.classList.add('otherPage')
  createA.href = "./software-engineering.html"
  navDiv.append(createA)
}

function loadAE() {
  const createA = document.createElement('a')
  createA.textContent = 'Audio Engineering'
  createA.classList.add('otherPage')
  createA.href = "./audio-engineering.html"
  navDiv.append(createA)
}

function loadMP() {
  const createA = document.createElement('a')
  createA.textContent = 'Music Production'
  createA.classList.add('otherPage')
  createA.href = "./music-production.html"
  navDiv.append(createA)
}

function loadSD() {
  const createA = document.createElement('a')
  createA.textContent = 'Sound Design'
  createA.classList.add('otherPage')
  createA.href = "./sound-design.html"
  navDiv.append(createA)
}

function loadAbout() {
  const createA = document.createElement('a')
  createA.textContent = 'About'
  createA.classList.add('otherPage')
  createA.href = "./about.html"
  navDiv.append(createA)
}

function loadContact() {
  const createA = document.createElement('a')
  createA.textContent = 'Contact'
  createA.classList.add('otherPage')
  createA.href = "mailto:masonlynass@gmail.com"
  navDiv.append(createA)
}
  
function pageClassCheck() {
  const pageTitle = document.querySelector('title')
  const navLinks = document.querySelectorAll('.otherPage')
  console.log(navLinks)
  
  navLinks.forEach((element) => {
  if (pageTitle.textContent.includes(`${element.textContent}`)) {
    element.classList.remove('otherPage')
    element.classList.add('activePage')
  }}
)}



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



