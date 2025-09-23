// Espera a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  // Inicializa como grande
  navbar.classList.add('navbar--large');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.remove('navbar--large');
      navbar.classList.add('navbar--small');
    } else {
      navbar.classList.remove('navbar--small');
      navbar.classList.add('navbar--large');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel__track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel__btn--next');
  const prevBtn = document.querySelector('.carousel__btn--prev');
  let currentIndex = 0;

  function updateSlide(position) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * position}px)`;

    slides.forEach(slide => slide.classList.remove('current-slide'));
    slides[position].classList.add('current-slide');
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
  });

  // Set initial slide position (for responsive)
  window.addEventListener('resize', () => updateSlide(currentIndex));
});

