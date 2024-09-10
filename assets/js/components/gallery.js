// gallery.js

// Données pour les filtres
const filters = [
  { name: "Tout", filter: "all" },
  {
    name: "Concert",
    filter: "Concert",
    icon: "./assets/images/icons/music-solid.svg",
  },
  {
    name: "Entreprises",
    filter: "Entreprises",
    icon: "./assets/images/icons/briefcase-solid.svg",
  },
  {
    name: "Mariages",
    filter: "Mariages",
    icon: "./assets/images/icons/heart-solid.svg",
  },
  {
    name: "Portrait",
    filter: "Portrait",
    icon: "./assets/images/icons/image-portrait-solid.svg",
  },
];

// Données pour les éléments de la galerie
const galleryItems = [
  {
    src: "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash-500w.jpg",
    srcsetWebp:
      "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash-500w.webp 500w, ./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash-250w.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash-500w.jpg 500w, ./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash-250w.jpg 250w",
    tag: "Concert",
    alt: "Photo illustrant une foule assistant à un concert",
  },
  {
    src: "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash-500w.jpg",
    srcsetWebp:
      "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash-500w.webp 500w, ./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash-250w.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash-500w.jpg 500w, ./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash-250w.jpg 250w",
    tag: "Entreprises",
    alt: "Photo illustrant un homme d’affaires croisant les bras",
  },
  {
    src: "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash-500w.jpg",
    srcsetWebp:
      "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash-500w.webp 500w, ./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash-250w.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash-500w.jpg 500w, ./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash-250w.jpg 250w",
    tag: "Entreprises",
    alt: "Photo illustrant deux femmes et collègues qui sourient",
  },
  {
    src: "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash-500w.jpg",
    srcsetWebp:
      "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash-500w.webp 500w, ./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash-250w.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash-500w.jpg 500w, ./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash-250w.jpg 250w",
    tag: "Mariages",
    alt: "Photo illustrant les bras d’un homme et d’une femme qui se rejoignent",
  },
  {
    src: "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash-500w.jpg",
    srcsetWebp:
      "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash-500w.webp 500w, ./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash-250w.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash-500w.jpg 500w, ./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash-250w.jpg 250w",
    tag: "Portrait",
    alt: "Photo illustrant un homme fermant les yeux face au soleil",
  },
  {
    src: "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash-500w.jpg",
    srcsetWebp:
      "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash-500w.webp 500w, ./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash-250w.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash-500w.jpg 500w, ./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash-250w.jpg 250w",
    tag: "Mariages",
    alt: "Photo illustrant un jeune couple marié",
  },
  {
    src: "./assets/images/gallery/portraits/nino-van-prattenburg-443cl1uR_8-unsplash-500w.jpg",
    srcsetWebp:
      "./assets/images/gallery/portraits/nino-van-prattenburg-443cl1uR_8-unsplash-500w.webp 500w, ./assets/images/gallery/portraits/nino-van-prattenburg-443cl1uR_8-unsplash-250w.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/portraits/nino-van-prattenburg-443cl1uR_8-unsplash-500w.jpg 500w, ./assets/images/gallery/portraits/nino-van-prattenburg-443cl1uR_8-unsplash-250w.jpg 250w",
    tag: "Portrait",
    alt: "Photo illustrant une jeune femme posant derrière un grillage",
  },

  {
    src: "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash-500w.jpg",
    srcsetWebp:
      "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash-500w.webp 500w, ./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash-250w.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash-500w.jpg 500w, ./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash-250w.jpg 250w",
    tag: "Concert",
    alt: "Photo illustrant un chanteur sur une scène de concert",
  },
  {
    src: "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash-500w.jpg",
    srcsetWebp:
      "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash-500w.webp 500w, ./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash-250w.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash-500w.jpg 500w, ./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash-250w.jpg 250w",
    tag: "Entreprises",
    alt: "Photo illustrant une jeune femme qui sourit devant son ordinateur de bureau",
  },
];

// Fonction pour générer les filtres
export function generateFilters() {
  const filtersContainer = document.querySelector(".filters");

  // Vérifiez la largeur de l'écran
  const isSmallScreen = window.innerWidth < 575;

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.setAttribute("data-filter", filter.filter);

    // Si l'écran est petit, affichez l'icône au lieu du texte
    if (isSmallScreen && filter.icon) {
      const icon = document.createElement("img");
      icon.src = filter.icon;
      icon.alt = filter.name;
      icon.style.width = "18px";
      button.appendChild(icon);
    } else {
      button.textContent = filter.name;
    }

    // Ajoutez la classe active au bouton "Tous"
    if (filter.filter === "all") {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      // Retirer la classe active de tous les boutons
      document
        .querySelectorAll(".filters button")
        .forEach((btn) => btn.classList.remove("active"));

      // Ajouter la classe active au bouton cliqué
      button.classList.add("active");

      applyFilter(filter.filter); // Appliquer le filtre
    });

    filtersContainer.appendChild(button);
  });

  // Appliquer le filtre "Tous" par défaut lors du chargement de la page
  applyFilter("all");
}

// Ajoutez un listener pour gérer les changements de taille d'écran
window.addEventListener("resize", () => {
  const filtersContainer = document.querySelector(".filters");
  filtersContainer.innerHTML = "";
  generateFilters();
});

// Fonction pour appliquer un filtre
function applyFilter(filter) {
  const galleryItems = document.querySelectorAll(".gallery-content picture");
  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    const itemTag = img.getAttribute("data-gallery-tag");

    // Ajoute la classe d'animation pour les éléments affichés
    if (filter === "all" || itemTag === filter) {
      item.style.display = "block";
      item.classList.add("animate");
    } else {
      item.style.display = "none";
      item.classList.remove("animate");
    }
  });
}

// Fonction pour initialiser la galerie
export function generateGallery() {
  const galleryContainer = document.querySelector(".gallery-content");
  galleryItems.forEach((item) => {
    const picture = document.createElement("picture");

    // Source WebP avec différentes résolutions
    const sourceWebp = document.createElement("source");
    sourceWebp.srcset = item.srcsetWebp;
    sourceWebp.type = "image/webp";

    // Source JPEG avec différentes résolutions
    const sourceJpeg = document.createElement("source");
    sourceJpeg.srcset = item.srcsetJpeg;
    sourceJpeg.type = "image/jpeg";

    // Image par défaut
    const img = document.createElement("img");
    img.src = item.src;
    img.setAttribute("data-gallery-tag", item.tag);
    img.classList.add("gallery-item");
    img.loading = "lazy"; // Charger paresseux pour améliorer la performance
    img.alt = item.alt;

    // Ajouter les sources et l'image au conteneur picture
    picture.appendChild(sourceWebp);
    picture.appendChild(sourceJpeg);
    picture.appendChild(img);

    // Ajouter le conteneur picture à la galerie
    galleryContainer.appendChild(picture);
  });

  // Assurer que tous les éléments sont visibles au chargement
  applyFilter("all");
}
