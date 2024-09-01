// gallery.js

// Données pour les filtres
const filters = [
  { name: "Tout", filter: "all" },
  { name: "Concert", filter: "Concert" },
  { name: "Entreprises", filter: "Entreprises" },
  { name: "Mariages", filter: "Mariages" },
  { name: "Portrait", filter: "Portrait" },
];

// Données pour les éléments de la galerie
const galleryItems = [
  {
    src: "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.jpg",
    srcsetWebp:
      "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.webp 500w, ./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash-small.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.jpg 500w, ./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash-small.jpg 250w",
    tag: "Concert",
    alt: "Photo illustrant une foule assistant à un concert",
  },
  {
    src: "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.jpg",
    srcsetWebp:
      "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.webp 500w, ./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash-small.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.jpg 500w, ./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash-small.jpg 250w",
    tag: "Entreprises",
    alt: "Photo illustrant un homme d’affaires croisant les bras",
  },
  {
    src: "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.jpg",
    srcsetWebp:
      "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.webp 500w, ./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash-small.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.jpg 500w, ./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash-small.jpg 250w",
    tag: "Entreprises",
    alt: "Photo illustrant deux femmes et collègues qui sourient",
  },
  {
    src: "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.jpg",
    srcsetWebp:
      "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.webp 500w, ./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash-small.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.jpg 500w, ./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash-small.jpg 250w",
    tag: "Mariages",
    alt: "Photo illustrant les bras d’un homme et d’une femme qui se rejoignent",
  },
  {
    src: "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.jpg",
    srcsetWebp:
      "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.webp 500w, ./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash-small.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.jpg 500w, ./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash-small.jpg 250w",
    tag: "Portrait",
    alt: "Photo illustrant un homme fermant les yeux face au soleil",
  },
  {
    src: "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.jpg",
    srcsetWebp:
      "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.webp 500w, ./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash-small.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.jpg 500w, ./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash-small.jpg 250w",
    tag: "Mariages",
    alt: "Photo illustrant un jeune couple marié",
  },
  {
    src: "./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.jpg",
    srcsetWebp:
      "./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.webp 500w, ./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash-small.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.jpg 500w, ./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash-small.jpg 250w",
    tag: "Portrait",
    alt: "Photo illustrant une jeune femme posant derrière un grillage",
  },
  {
    src: "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.jpg",
    srcsetWebp:
      "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.webp 500w, ./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash-small.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.jpg 500w, ./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash-small.jpg 250w",
    tag: "Concert",
    alt: "Photo illustrant un chanteur sur une scène de concert",
  },
  {
    src: "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.jpg",
    srcsetWebp:
      "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.webp 500w, ./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash-small.webp 250w",
    srcsetJpeg:
      "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.jpg 500w, ./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash-small.jpg 250w",
    tag: "Entreprises",
    alt: "Photo illustrant une jeune femme qui sourit devant son ordinateur de bureau",
  },
];

// Fonction pour générer les filtres
export function generateFilters() {
  const filtersContainer = document.querySelector(".filters");
  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.textContent = filter.name;
    button.setAttribute("data-filter", filter.filter);

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

// Fonction pour appliquer un filtre
function applyFilter(filter) {
  const galleryItems = document.querySelectorAll(".gallery-content picture");
  galleryItems.forEach((item) => {
    const itemTag = item.querySelector("img").getAttribute("data-gallery-tag");
    if (filter === "all" || itemTag === filter) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Fonction pour générer la galerie
export function generateGallery() {
  const galleryContainer = document.querySelector(".gallery-content");
  galleryItems.forEach((item) => {
    const picture = document.createElement("picture");

    const sourceWebp = document.createElement("source");
    sourceWebp.srcset = item.srcsetWebp; // Correction ici
    sourceWebp.type = "image/webp";

    const sourceJpg = document.createElement("source");
    sourceJpg.srcset = item.srcsetJpeg; // Correction ici
    sourceJpg.type = "image/jpeg";

    const img = document.createElement("img");
    img.src = item.src; // Utilisation correcte de l'attribut 'src'
    img.setAttribute("data-gallery-tag", item.tag);
    img.classList.add("gallery-item");
    img.loading = "lazy";
    img.alt = item.alt;

    picture.appendChild(sourceWebp);
    picture.appendChild(sourceJpg);
    picture.appendChild(img);

    galleryContainer.appendChild(picture);
  });
}