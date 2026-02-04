const photos = [
  {
    link: "images/photography/multicolor-water.jpg",
    text: "Water Gradient",
    tags: "<p>2017</p><p>Mount Rainier, WA</p>",
    desc: "The multi-color water is so cool to me, especially given how bright the blues are",
  },
  {
    link: "images/photography/icicle-sunset.jpg",
    text: "Icicles in the Sunset",
    tags: "<p>2022</p><p>Pittsburgh, PA</p>",
    desc: "I was on a walk, and I'd never seen a layer of ice wrapping the branches like this, and the way the sun shines against it!",
  },
  {
    link: "images/photography/cornell-flowers.HEIC",
    text: "Cornell Flowers",
    tags: "<p>2023</p><p>Cornell University, NY</p>",
    desc: "The best part about spring at Cornell is the two weeks where the cherry blossoms bloom next to the libraries",
  },
  {
    link: "images/photography/pink-flower.jpg",
    text: "Bright Flower",
    tags: "<p>2023</p><p>Cornell University, NY</p>",
    desc: "On my way to class, I saw how brightly saturated this flower was and had to take a photo",
  },
  {
    link: "images/photography/pink-flowers.jpg",
    text: "Pink Flowers",
    tags: "<p>2025</p><p>Cornell University, NY</p>",
    desc: "Springtime is so much fun with the bright colors, and these flowers were so pronounced that I had to take a photo",
  },
  {
    link: "images/photography/rainbow-sunset.jpg",
    text: "Rainbow in the Sunset",
    tags: "<p>2022</p><p>Nova Scotia, Canada</p>",
    desc: "Anytime I see a rainbow, I have to capture it; and the fact that there was a sunset too, *chef's kiss*",
  },
  {
    link: "images/photography/snowy-walk.jpg",
    text: "Snowy Walk",
    tags: "<p>2024</p><p>Cornell University, NY</p>",
    desc: "I thought this was mysterious looking, and then I made it black and white--even better!",
  },
  {
    link: "images/photography/spider-web.jpg",
    text: "Spider Web",
    tags: "<p>2022</p><p>Cornell University, NY</p>",
    desc: "I always found spider webs so intricate and this large one caught my eye with the amount of detail",
  },
  {
    link: "images/photography/beach-sunset.jpg",
    text: "Beach Sunset",
    tags: "<p>2023</p><p>Luquillo, Puerto Rico</p>",
    desc: "I wanted to capture a photo resembling all the stock photos I would always see when looking for profile pictures as a child",
  },
  {
    link: "images/photography/cat-sunset.jpg",
    text: "Cat in the Sunset",
    tags: "<p>2025</p><p>Haifa, Israel</p>",
    desc: "I saw this wild cat sitting in front of the sunset and had to give it the spotlight",
  },
  {
    link: "images/photography/cruise-sunset.jpg",
    text: "Cruise Sunset",
    tags: "<p>2025</p><p>Great Stirrup Cay, Bahamas</p>",
    desc: "As the cruise ship left the island, I captured this sunset with the beautiful colors reflecting on the water",
  },
  {
    link: "images/photography/beach-sunglasses.HEIC",
    text: "Sunglasses in the Sand",
    tags: "<p>2024</p><p>Fort Lauderdale, FL</p>",
    desc: "This photo was inspired by the classic Pinterest mood boards that I used to love looking at; I wanted to create my own",
  },
  {
    link: "images/photography/houses-sunset.jpg",
    text: "Sunset above the Neighborhood",
    tags: "<p>2022</p><p>Nova Scotia, Canada</p>",
    desc: "I liked the little houses under the sunset, as they add a cutesy whimsical energy to the scene",
  },
  {
    link: "images/photography/window-golden-hr.HEIC",
    text: "Golden Hour Window",
    tags: "<p>2023</p><p>Cornell University, NY</p>",
    desc: "This photo was taken through the window in my dorm as a sophomore when I noticed the ray shining through the curtains",
  },
  {
    link: "images/photography/fire.HEIC",
    text: "Fire Up",
    tags: "<p>2023</p><p>Cornell University, NY</p>",
    desc: "One of the reasons I love bonfires is that I can get really close to a fire without the risk of danger",
  },
  {
    link: "images/photography/cornell-sunset.jpg",
    text: "Sunset at Cornell",
    tags: "<p>2023</p><p>Cornell University, NY</p>",
    desc: "The sun shone perfectly through the clocktower here, and I knew it was a special sunset photo I had to take",
  },
  {
    link: "images/photography/fall-tree.jpg",
    text: "Red Leaves Tree",
    tags: "<p>2023</p><p>Cornell University, NY</p>",
    desc: "The fall leaves were so brightly colored... I walked around the entire tree to find the perfect angle to get a photo of them",
  },
  {
    link: "images/photography/sun-leaf.jpg",
    text: "Fall Leaf in the Sunshine",
    tags: "<p>2023</p><p>Cornell University, NY</p>",
    desc: "Fall leaves are even cooler looking with the sun shining through them",
  },
  {
    link: "images/photography/butterfly-garden.HEIC",
    text: "Butterfly Garden",
    tags: "<p>2024</p><p>Key West, FL</p>",
    desc: "I've always loved butterflies, and this garden was full of them fluttering around--so magical!",
  },
  {
    link: "images/photography/volcano.jpg",
    text: "Volcano in the Distance",
    tags: "<p>2026</p><p>Arenal Volcano, Costa Rica</p>",
    desc: "After a long hike with my friend, we finally reached a beautiful viewpoint of the volcano from a hanging bridge",
  },
  {
    link: "images/photography/green-sunset.HEIC",
    text: "Green Path in Sunset",
    tags: "<p>2024</p><p>Cornell University, NY</p>",
    desc: "This is one of my favorite paths on campus, and the colors that the sun shone through made for a mesmerizing photo",
  },
  {
    link: "images/photography/rainbow.jpg",
    text: "Rainbow Scene",
    tags: "<p>2026</p><p>Tigre Waterfalls, Costa Rica</p>",
    desc: "A tough hike through the rain led to this beautiful scene of a rainbow shining through the mist with a beautiful view",
  },
  {
    link: "images/photography/gorge-nature.jpg",
    text: "Glowing Gorge Nature",
    tags: "<p>2025</p><p>Cascadilla Gorge, NY</p>",
    desc: "The way the sun shone over the gorge made a magical light effect that I wanted to capture",
  },
  {
    link: "images/photography/nature.jpg",
    text: "Flowers in front of Pond",
    tags: "<p>2024</p><p>Seattle, WA</p>",
    desc: "These flowers added a beautiful touch to the serene pond scene, making it feel peaceful and vibrant",
  },
  {
    link: "images/photography/waterfall.jpg",
    text: "Cascading Falls",
    tags: "<p>2022</p><p>New Brunswick, Canada</p>",
    desc: "The cascading water looked really soothing and peaceful, reminding me of a fairy garden, which I've always been fascinated by",
  },
  {
    link: "images/photography/watkins-glen.jpg",
    text: "Shine Behind the Water",
    tags: "<p>2025</p><p>Watkins Glen, NY</p>",
    desc: "The light shone behind the waterfall making a really cool effect on the droplets of water from the angle that I captured the photo",
  },
  {
    link: "images/photography/chairs-scenery.jpg",
    text: "Chairs with a View",
    tags: "<p>2026</p><p>Costa Rica</p>",
    desc: "The chairs overlooking the serene view of Costa Rica's natural beauty created a peaceful and inviting scene that I wanted to capture",
  },
  {
    link: "images/photography/japanese-gardens.HEIC",
    text: "Japanese Garden",
    tags: "<p>2024</p><p>San Francisco, CA</p>",
    desc: "This garden was a peaceful view I saw with my dad, with beautiful landscaping and traditional elements that made for a calming photo",
  },
  {
    link: "images/photography/volcanic-rock.jpg",
    text: "Volcanic Rock Formation",
    tags: "<p>2026</p><p>Arenal Volcano, Costa Rica</p>",
    desc: "The unique shapes and textures of the volcanic rock formations created a dramatic and otherworldly landscape that fascinated me",
  },
  {
    link: "images/photography/icicle.jpg",
    text: "Glowing Icicles",
    tags: "<p>2021</p><p>Unknown</p>",
    desc: "The icicles glowed beautifully in the winter light, creating a magical and serene scene, with a rainbow effect on some of them",
  },
  {
    link: "images/photography/keys-rome.jpg",
    text: "Heart and Lock",
    tags: "<p>2023</p><p>Rome, Italy</p>",
    desc: "I've seen many locks on bridges before, but this one stood out to me because of the heart shape and the beautiful Rome architecture in the background",
  },
  {
    link: "images/photography/tree-sunray.jpg",
    text: "Shadowy Forest",
    tags: "<p>2024</p><p>Moss Beach, CA</p>",
    desc: "The interplay of light and shadow in this forest created a mysterious and enchanting atmosphere that reminded me of a fantasy novel",
  },
  {
    link: "images/photography/glowing-water.jpg",
    text: "Glowing Water",
    tags: "<p>2026</p><p>Paquera, Costa Rica</p>",
    desc: "The way the light reflected off the water created a mesmerizing glow that made the scene feel magical and serene",
  },
  {
    link: "images/photography/cave.jpg",
    text: "Glowing Cave",
    tags: "<p>2023</p><p>Palma de Mallorca, Spain</p>",
    desc: "This cave had really cool formations and lighting that made for a great photo, where the water looked mystical",
  },
];

const slidesTrack = document.getElementById("slides");
let currIdx = 0;

photos.forEach((photo) => {
  slidesTrack.innerHTML += `<div class="slide"><img src="${photo.link}"><div class="overlay"><p class="white caption">${photo.text}</p><div class="tags">${photo.tags}</div><p class="white desc">${photo.desc}</p></div></div>`;
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
