const menuButton = document.getElementById("menu-button");
const navigationLinks = document.getElementById("navigation-links");
const menuButtonIcon = menuButton.querySelector("i");
menuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("open");
  const isMenuOpen = navigationLinks.classList.contains("open");
  menuButtonIcon.setAttribute(
    "class",
    isMenuOpen ? "ri-close-line" : "ri-menu-3-line",
  );
});
navigationLinks.addEventListener("click", () => {
  navigationLinks.classList.remove("open");
  menuButtonIcon.setAttribute("class", "ri-menu-3-line");
});
/* Scroll Reveal */ const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
/* Hero Section */ ScrollReveal().reveal(".hero-gallery img", {
  ...scrollRevealOptions,
  origin: "right",
  interval: 500,
});
ScrollReveal().reveal(".hero-content h1", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".hero-content .section-description", {
  ...scrollRevealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".hero-content .travel-search-form", {
  ...scrollRevealOptions,
  delay: 2000,
});
/* About Section */ ScrollReveal().reveal(".about-image img", {
  ...scrollRevealOptions,
  origin: "left",
});
ScrollReveal().reveal(".about-content .section-label", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".about-content .section-title", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".benefits-list .benefit-item", {
  ...scrollRevealOptions,
  delay: 1500,
  interval: 500,
});
/* Destinations Slider */ const destinationsSlider = new Swiper(
  ".destinations-slider",
  {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  },
);
/* Explore Section */ ScrollReveal().reveal(".explore-image img", {
  ...scrollRevealOptions,
  origin: "right",
});
ScrollReveal().reveal(".explore-content .section-label", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".explore-content .section-title", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".explore-content .section-description", {
  ...scrollRevealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".explore-content .explore-action", {
  ...scrollRevealOptions,
  delay: 2000,
});
ScrollReveal().reveal(".travel-statistics .statistic-item", {
  ...scrollRevealOptions,
  delay: 2500,
  interval: 500,
});
/* Testimonials */ const nextTestimonialButton =
  document.getElementById("next-testimonial");
const previousTestimonialButton = document.getElementById(
  "previous-testimonial",
);
const testimonialCards = Array.from(
  document.querySelectorAll(".testimonial-card"),
);
nextTestimonialButton.addEventListener("click", () => {
  for (let index = 0; index < testimonialCards.length; index++) {
    if (testimonialCards[index].classList.contains("active")) {
      const nextIndex = (index + 1) % testimonialCards.length;
      testimonialCards[index].classList.remove("active");
      testimonialCards[nextIndex].classList.add("active");
      break;
    }
  }
});
previousTestimonialButton.addEventListener("click", () => {
  for (let index = 0; index < testimonialCards.length; index++) {
    if (testimonialCards[index].classList.contains("active")) {
      const previousIndex =
        (index - 1 + testimonialCards.length) % testimonialCards.length;
      testimonialCards[index].classList.remove("active");
      testimonialCards[previousIndex].classList.add("active");
      break;
    }
  }
});
/* Newsletter Section */ ScrollReveal().reveal(
  ".newsletter-section .section-title",
  { ...scrollRevealOptions },
);
ScrollReveal().reveal(".newsletter-section .section-description", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".newsletter-section .newsletter-form", {
  ...scrollRevealOptions,
  delay: 1000,
});
