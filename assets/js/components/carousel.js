// carousel.js

export default function initCarousel() {
  // On vise et on stocke ces éléments du DOM
  const slides = document.querySelectorAll(".carousel-item"); // Sélection des diapositives
  const dotsContainer = document.querySelector(".carousel-indicators");
  const arrowLeft = document.querySelector(".carousel-control-prev");
  const arrowRight = document.querySelector(".carousel-control-next");

  let currentSlide = 0;
  const dots = [];

  // On initialise les dots et les synchronise aux slides
  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (index === 0 ? " active" : ""); // Ajout de la classe active pour le premier dot
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  // On met à jour dynamiquement la diapo active et les dots
  function updateCarousel() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlide);
    });

    // On active ou désactive les dots selon le 'currentSlide'.
    dots.forEach((dot, index) =>
      dot.classList.toggle("active", index === currentSlide)
    );
  }

  // On met à jour l'index de currentSlide et appelle updateCarousel pour mettre à jour l'affichage.
  function goToSlide(index) {
    currentSlide = (index + slides.length) % slides.length; // Gérer les débordements
    updateCarousel();
  }

  // Utiliser goToSlide pour les flèches
  arrowLeft.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
  });

  arrowRight.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
  });

  // Initialisation du carousel
  updateCarousel();
}
