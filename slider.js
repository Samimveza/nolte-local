document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const sliderScroll = document.querySelector(".slider-scroll");

  const updateSliderPosition = () => {
    const scrollWidth = slider.scrollWidth - slider.clientWidth;
    const scrollPosition = (slider.scrollLeft / scrollWidth) * 100;
    sliderScroll.value = scrollPosition;
  };

  sliderScroll.addEventListener("input", (e) => {
    const scrollWidth = slider.scrollWidth - slider.clientWidth;
    const scrollPosition = (scrollWidth * e.target.value) / 100;
    slider.scrollLeft = scrollPosition;
  });

  slider.addEventListener("scroll", updateSliderPosition);
  window.addEventListener("resize", updateSliderPosition);

  // Initial position update
  updateSliderPosition();
});
