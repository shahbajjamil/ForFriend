function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  // var banner = document.querySelector(".banner");
  var menu = document.querySelector(".menu");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
  // banner.classList.toggle("active");
}

const lightBoxContainer = document.querySelector(".lightbox");
const lightBoxImage = document.querySelector(".lightbox-img");
const counter = document.querySelector(".lightbox-counter");
const prevButton = document.querySelector(".prev");
const prevButtonIcon = document.querySelector(".prev .fa");
const nextButton = document.querySelector(".next");
const nextButtonIcon = document.querySelector(".next .fa");
const lightboxText = document.querySelector(".lightbox-text");
const galleryItems = document.querySelector(".gallery").children;

let index;
let imgSrc;

lightBoxContainer.addEventListener("click", function (event) {
  if (
    event.target !== lightBoxImage &&
    event.target !== prevButton &&
    event.target !== prevButtonIcon &&
    event.target !== nextButtonIcon &&
    event.target !== nextButton
  ) {
    console.log("close");
    lightBox();
  }
});

for (let i = 0; i < galleryItems.length; i++) {
  galleryItems[i].querySelector("img").addEventListener("click", function () {
    index = i;
    changeImage();
    lightBox();
  });
}
nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);
lightBoxImage.addEventListener("click", next);

function next() {
  if (index == galleryItems.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeImage();
}
function prev() {
  if (index == 0) {
    index = galleryItems.length - 1;
  } else {
    index--;
  }
  changeImage();
}

function lightBox() {
  lightBoxContainer.classList.toggle("open");
}
function changeImage() {
  imgSrc = galleryItems[index]
    .querySelector("img")
    .getAttribute("data-original");
  lightBoxImage.src = `images/gallery/${imgSrc}`;
  counter.innerHTML = index + 1 + " of " + galleryItems.length;
  lightboxText.innerHTML = galleryItems[index]
    .querySelector("img")
    .getAttribute("alt");
}
