const photos = [
  { link: "images/photography/multicolor-water.jpg", text: "Multicolor Water" },
  { link: "images/photography/icicle-sunset.jpg", text: "Icicle Sunset" },
  { link: "images/photography/cornell-flowers.HEIC", text: "" },
  { link: "images/photography/pink-flower.jpg", text: "" },
  { link: "images/photography/pink-flowers.jpg", text: "" },
  { link: "images/photography/rainbow-sunset.jpg", text: "" },
  { link: "images/photography/snowy-walk.jpg", text: "" },
  { link: "images/photography/spider-web.jpg", text: "" },
  { link: "images/photography/beach-sunset.jpg", text: "" },
  { link: "images/photography/cat-sunset.jpg", text: "" },
  { link: "images/photography/beach-sunglasses.HEIC", text: "" },
  { link: "images/photography/houses-sunset.jpg", text: "" },
  { link: "images/photography/window-golden-hr.HEIC", text: "" },
  { link: "images/photography/fire.HEIC", text: "" },
  { link: "images/photography/cornell-sunset.jpg", text: "" },
  { link: "images/photography/fall-tree.jpg", text: "" },
  { link: "images/photography/sun-leaf.jpg", text: "" },
  { link: "images/photography/butterfly-garden.HEIC", text: "" },
  { link: "images/photography/green-sunset.HEIC", text: "" },
  { link: "images/photography/gorge-nature.jpg", text: "" },
  { link: "images/photography/nature.jpg", text: "" },
  { link: "images/photography/waterfall.jpg", text: "" },
  { link: "images/photography/watkins-glen.jpg", text: "" },
  { link: "images/photography/japanese-gardens.HEIC", text: "" },
  { link: "images/photography/icicle.jpg", text: "" },
  { link: "images/photography/keys-rome.jpg", text: "" },
  { link: "images/photography/tree-sunray.jpg", text: "" },
  { link: "images/photography/bird-flying.jpg", text: "" },
  { link: "images/photography/cave.jpg", text: "" },
];

const slidesTrack = document.getElementById("slides");
let currIdx = 0;

photos.forEach((photo) => {
  slidesTrack.innerHTML += `<div class="slide"><img src="${photo.link}"><div class="overlay"><p class="white caption">${photo.text}</p></div></div>`;
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

// setInterval(() => {
//   scrollSlides(1);
// }, 2000);
