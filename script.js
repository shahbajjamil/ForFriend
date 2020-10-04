const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const menuAll = document.querySelectorAll(".menu ul li a");
const home = document.getElementById("homeNav");
const about = document.getElementById("aboutNav");
const skill = document.getElementById("skillNav");
const gallery  = document.getElementById("galleryNav");
const contact= document.getElementById("contactNav");

menuToggle.addEventListener("click", toggleMenu);
menuAll.forEach((all) => {
  all.addEventListener("click", function () {
    // console.log(all.innerHTML);
    toggleMenu();
    menuAll.forEach((all) => all.classList.remove("active"));
    all.classList.add("active");
  });
});

function toggleMenu() {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
}

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
  navigator.userAgent
);

window.onscroll = function () {
  var positionTop = document.documentElement.scrollTop;
  if (isMobile){
    // console.log("mobile "+positionTop);
    if (positionTop> 130) {
      menuToggle.style.top = 10+'px';
      menu.style.top = 70+'px';
    } else {
      menuToggle.style.top = 100+'px';
      menu.style.top = 160+'px';
    }
    if(positionTop > 6578){
      menuAll.forEach((all) => all.classList.remove("active"));
      contactNav.classList.add("active");
    } else  if(positionTop > 3910){
      menuAll.forEach((all) => all.classList.remove("active"));
      galleryNav.classList.add("active");
    } else  if(positionTop > 2970){
      menuAll.forEach((all) => all.classList.remove("active"));
      skillNav.classList.add("active");
    } else  if(positionTop > 683){
      menuAll.forEach((all) => all.classList.remove("active"));
      aboutNav.classList.add("active");
    } else  if(positionTop >= 0){
      menuAll.forEach((all) => all.classList.remove("active"));
      homeNav.classList.add("active");
    }
  } 
  else {
    // console.log("other "+positionTop);
    if(positionTop > 2940){
      menuAll.forEach((all) => all.classList.remove("active"));
      contactNav.classList.add("active");
    } else  if(positionTop > 2148){
      menuAll.forEach((all) => all.classList.remove("active"));
      galleryNav.classList.add("active");
    } else  if(positionTop > 1600){
      menuAll.forEach((all) => all.classList.remove("active"));
      skillNav.classList.add("active");
    } else  if(positionTop > 535){
      menuAll.forEach((all) => all.classList.remove("active"));
      aboutNav.classList.add("active");
    } else  if(positionTop >= 0){
      menuAll.forEach((all) => all.classList.remove("active"));
      homeNav.classList.add("active");
    }
  }
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

var fullImage = document.createElement("img");
function changeImage() {
  smallImgSrc = galleryItems[index].querySelector("img").getAttribute("src");

  imgSrc = galleryItems[index]
    .querySelector("img")
    .getAttribute("data-original");

  fullImage.onload = function () {
    lightBoxImage.src = this.src;
  };

  setTimeout(() => {
    fullImage.src = `images/gallery/${imgSrc}`;
  }, 10);

  lightBoxImage.src = smallImgSrc;
  counter.innerHTML = index + 1 + " of " + galleryItems.length;
  lightboxText.innerHTML = galleryItems[index]
    .querySelector("img")
    .getAttribute("alt");
}
