document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");
  const navClose = document.querySelector(".nav-close");
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
  navClose.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    scrollbar: {
      draggable: true,
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  const whyNolteSwiper = new Swiper(".why-nolte-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });

  const finitionsSwiper = new Swiper(".finitions-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      draggable: true,
      el: ".swiper-scrollbar",
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });

  const poigneesSwiper = new Swiper(".poignees-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      draggable: true,
      el: ".poignees-scrollbar",
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });

  const magasinsSwiper = new Swiper(".magasins-swiper", {
    scrollbar: {
      draggable: true,
      el: ".magasins-swiper-scrollbar",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
