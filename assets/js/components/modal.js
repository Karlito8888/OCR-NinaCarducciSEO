// modal.js

const initModal = () => {
  console.log("Initializing modal...");
  const modal = document.getElementById("myAwesomeLightbox");
  const lightboxImage = document.querySelector(".lightboxImage");
  const galleryItems = document.querySelectorAll(".gallery-item");
  let currentImageIndex = 0;

   modal.style.display = "none";

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentImageIndex = index;
      lightboxImage.src = item.src;
      modal.style.display = "block";
    });
  });

  document.querySelector(".mg-next").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    lightboxImage.src = galleryItems[currentImageIndex].src;
  });

  document.querySelector(".mg-prev").addEventListener("click", () => {
    currentImageIndex =
      (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImage.src = galleryItems[currentImageIndex].src;
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};

export default initModal;
