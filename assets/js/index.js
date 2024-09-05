// index.js
import initCarousel from "./components/carousel.js";
import { generateFilters, generateGallery } from "./components/gallery.js";
import initModal from "./components/modal.js";

// Initialisation du carousel, des filtres, de la galerie et de la modale
document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  generateFilters();
  generateGallery();
  initModal();
});
