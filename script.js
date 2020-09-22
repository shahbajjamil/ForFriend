function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  // var banner = document.querySelector(".banner");
  var menu = document.querySelector(".menu");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
  // banner.classList.toggle("active");
}

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".thumbnail");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    // Dynamic change text and image
    const originalScr = preview.getAttribute("data-original");
    console.log(originalScr);
    original.src = `images/gallery/${originalScr}`;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
