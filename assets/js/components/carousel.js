// carousel.js

export default function initCarousel() {
  // On vise et on stocke ces éléments du DOM
  const slides = document.querySelectorAll(".carousel-item"); // Sélection des diapositives
  const dotsContainer = document.querySelector(".carousel-indicators");
  const arrowLeft = document.querySelector(".carousel-control-prev");
  const arrowRight = document.querySelector(".carousel-control-next");

  let currentSlide = 0;
  const dots = [];
  let slideInterval; // Variable pour stocker l'intervalle de changement automatique

  // On initialise les dots et les synchronise aux slides
  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Slide ${index + 1}`);
    dot.setAttribute("aria-current", index === 0 ? "true" : "false");
    dot.setAttribute("role", "button");
    dot.setAttribute("title", `Go to slide ${index + 1}`);
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
    resetSlideInterval(); // Réinitialiser l'intervalle lorsqu'on utilise les flèches
  });

  arrowRight.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
    resetSlideInterval(); // Réinitialiser l'intervalle lorsqu'on utilise les flèches
  });

  // Fonction pour démarrer l'intervalle de changement automatique
  function startSlideInterval() {
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 4000); // Changement toutes les 4 secondes
  }

  // Fonction pour réinitialiser l'intervalle de changement automatique
  function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
  }

  // Initialisation du carousel
  updateCarousel();
  startSlideInterval(); // Démarrer l'intervalle pour le changement automatique
}
