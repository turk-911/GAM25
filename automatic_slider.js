const carousel = document.querySelector(".carousel-inner");
const images = document.querySelectorAll(".carousel-inner img");
let index = 0;

function nextImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  carousel.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(nextImage, 3000);
