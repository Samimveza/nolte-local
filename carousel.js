const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button.next");
const prevButton = document.querySelector(".carousel-button.prev");

let currentIndex = 0;

// Set initial position
const setSlidePosition = () => {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// Next slide
const moveToNextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  setSlidePosition();
};

// Previous slide
const moveToPrevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  setSlidePosition();
};

// Event listeners
nextButton.addEventListener("click", moveToNextSlide);
prevButton.addEventListener("click", moveToPrevSlide);
