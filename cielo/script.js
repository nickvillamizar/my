const images = [
  { src: "images/1.jpeg", title: "Image 1" },
  { src: "images/2.jpeg", title: "Image 2" },
  { src: "images/3.jpeg", title: "Image 3" },
  { src: "images/4.jpeg", title: "Image 4" },
  { src: "images/5.jpeg", title: "Image 5" },
  { src: "images/6.jpeg", title: "Image 6" },
  { src: "images/7.jpeg", title: "Image 7" },
  { src: "images/8.jpeg", title: "Image 8" },
  { src: "images/9.jpeg", title: "Image 9" },
  { src: "images/10.jpeg", title: "Image 10" },
  { src: "images/11.jpeg", title: "Image 11" },
  { src: "images/12.jpeg", title: "Image 12" },
];

let currentImageIndex = 0;

const imageElement = document.getElementById("image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

imageElement.src = images[currentImageIndex].src;

leftArrow.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  imageElement.src = images[currentImageIndex].src;
  createRainingHearts();
});

rightArrow.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  imageElement.src = images[currentImageIndex].src;
  createRainingHearts();
});

function createRainingHearts() {
  const positions = [0, 30, 60, 90, 120, 150];
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.textContent = "TE AMO";
    heart.style.position = "fixed";
    heart.style.top = "-50px";
    heart.style.transition = "all 2s ease";
    heart.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    heart.style.fontSize = "25px";
    heart.style.color = "red";
    heart.style.userSelect = "none";
    heart.style.pointerEvents = "none";
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.style.top = window.innerHeight + "px";
    }, 0);
    setTimeout(() => {
      heart.remove();
    }, 2000);
    if (i < 6) {
      heart.style.left = positions[i] + "%";
      heart.style.top = "0px";
    } else {
      heart.style.right = positions[i - 6] + "%";
      heart.style.bottom = "0px";
    }
  }
}