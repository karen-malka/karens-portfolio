const photos = [
  "images/photography/multicolor-water.jpg",
  "images/photography/icicle-sunset.jpg",
  "images/photography/cornell-flowers.HEIC",
  "images/photography/pink-flower.jpg",
  "images/photography/pink-flowers.jpg",
  "images/photography/rainbow-sunset.jpg",
  "images/photography/snowy-walk.jpg",
  "images/photography/spider-web.jpg",
  "images/photography/beach-sunset.jpg",
  "images/photography/cat-sunset.jpg",
  "images/photography/beach-sunglasses.HEIC",
  "images/photography/houses-sunset.jpg",
  "images/photography/window-golden-hr.HEIC",
  "images/photography/fire.HEIC",
  "images/photography/cornell-sunset.jpg",
  "images/photography/fall-tree.jpg",
  "images/photography/sun-leaf.jpg",
  "images/photography/butterfly-garden.HEIC",
  "images/photography/green-sunset.HEIC",
  "images/photography/gorge-nature.jpg",
  "images/photography/nature.jpg",
  "images/photography/waterfall.jpg",
  "images/photography/watkins-glen.jpg",
  "images/photography/japanese-gardens.HEIC",
  "images/photography/icicle.jpg",
  "images/photography/keys-rome.jpg",
  "images/photography/tree-sunray.jpg",
  "images/photography/bird-flying.jpg",
  "images/photography/cave.jpg",
];

const slidesTrack = document.getElementById("slides");
let currIdx = 0;

photos.forEach((photo) => {
  slidesTrack.innerHTML += `<div class="slide"><img src="${photo}"></div>`;
});

for (let i = 0; i < 3; i++) {
  const clone = slidesTrack.children[i].cloneNode(true);
  slidesTrack.appendChild(clone);
}

const totalSlides = slidesTrack.children.length;

function scrollSlides(direction = 1) {
  const slide = slidesTrack.querySelector(".slide");
  const slideWidth = slide.offsetWidth + 20;
  currIdx += direction;

  slidesTrack.style.transition = "transform 0.5s ease-in-out";
  slidesTrack.style.transform = `translateX(-${currIdx * slideWidth}px)`;

  if (currIdx == totalSlides - 3) {
    setTimeout(() => {
      slidesTrack.style.transition = "none";
      currIdx = 0;
      slidesTrack.style.transform = `translateX(-${currIdx * slideWidth}px)`;
    }, 500);
  }
}

setInterval(() => {
  scrollSlides(1);
}, 2000);
