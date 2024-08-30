document.addEventListener("DOMContentLoaded", function () {
  class MauGallery {
    constructor(galleryElement, options) {
      this.gallery = galleryElement;
      this.settings = Object.assign({}, MauGallery.defaults, options);
      this.tagsCollection = [];
      this.init();
    }

    static defaults = {
      columns: 3,
      lightBox: true,
      lightboxId: null,
      showTags: true,
      tagsPosition: "bottom",
      navigation: true,
    };

    init() {
      this.createRowWrapper();
      if (this.settings.lightBox) {
        this.createLightBox();
      }
      this.processItems();
      if (this.settings.showTags) {
        this.showItemTags();
      }
      this.attachEventListeners();
    }

    createRowWrapper() {
      if (!this.gallery.querySelector(".row")) {
        const rowWrapper = document.createElement("div");
        rowWrapper.classList.add("gallery-items-row", "row");
        this.gallery.appendChild(rowWrapper);
      }
    }

    wrapItemInColumn(element) {
      const columnClasses = this.getColumnClasses();
      const columnWrapper = document.createElement("div");
      columnWrapper.className = `item-column mb-4 ${columnClasses}`;
      element.parentNode.insertBefore(columnWrapper, element);
      columnWrapper.appendChild(element);
    }

    getColumnClasses() {
      const { columns } = this.settings;
      if (typeof columns === "number") {
        return `col-${Math.ceil(12 / columns)}`;
      } else if (typeof columns === "object") {
        return Object.keys(columns)
          .map(
            (breakpoint) =>
              `col-${breakpoint}-${Math.ceil(12 / columns[breakpoint])}`
          )
          .join(" ");
      } else {
        console.error(`Invalid columns type: ${typeof columns}`);
        return "";
      }
    }

    moveItemInRowWrapper(element) {
      const rowWrapper = this.gallery.querySelector(".gallery-items-row");
      rowWrapper.appendChild(element);
    }

    responsiveImageItem(element) {
      if (element.tagName === "IMG") {
        element.classList.add("img-fluid");
      }
    }

    openLightBox(element) {
      const lightbox = document.getElementById(this.settings.lightboxId);
      const lightboxImage = lightbox.querySelector(".lightboxImage");
      lightboxImage.src = element.src;
      lightbox.style.display = "block"; // Show lightbox
    }

    prevImage() {
      this.changeImage(-1);
    }

    nextImage() {
      this.changeImage(1);
    }

    changeImage(direction) {
      const lightboxImage = document.querySelector(
        `#${this.settings.lightboxId} .lightboxImage`
      );
      const activeImageSrc = lightboxImage.src;
      const images = Array.from(document.querySelectorAll(".gallery-item img"));
      const activeIndex = images.findIndex((img) => img.src === activeImageSrc);
      const newIndex =
        (activeIndex + direction + images.length) % images.length;
      lightboxImage.src = images[newIndex].src;
    }

    createLightBox() {
      const lightboxHtml = `
        <div class="lightbox" id="${
          this.settings.lightboxId || "galleryLightbox"
        }" style="display: none;">
          <div class="lightbox-content">
            ${
              this.settings.navigation
                ? '<div class="mg-prev" style="cursor:pointer;position:absolute;top:50%;left:-15px;background:white;"><</div>'
                : ""
            }
            <img class="lightboxImage img-fluid" alt="Image en mode lightbox"/>
            ${
              this.settings.navigation
                ? '<div class="mg-next" style="cursor:pointer;position:absolute;top:50%;right:-15px;background:white;">></div>'
                : ""
            }
            <span class="lightbox-close" style="cursor:pointer;position:absolute;top:10px;right:10px;">&times;</span>
          </div>
        </div>`;
      this.gallery.insertAdjacentHTML("beforeend", lightboxHtml);
    }

    showItemTags() {
      const tagItems = [
        '<li class="nav-item"><span class="nav-link active active-tag" data-images-toggle="all">Tous</span></li>',
        ...this.tagsCollection.map(
          (tag) =>
            `<li class="nav-item"><span class="nav-link" data-images-toggle="${tag}">${tag}</span></li>`
        ),
      ].join("");

      const tagsRow = `<ul class="my-4 tags-bar nav nav-pills">${tagItems}</ul>`;
      if (this.settings.tagsPosition === "bottom") {
        this.gallery.insertAdjacentHTML("beforeend", tagsRow);
      } else if (this.settings.tagsPosition === "top") {
        this.gallery.insertAdjacentHTML("afterbegin", tagsRow);
      } else {
        console.error(`Unknown tags position: ${this.settings.tagsPosition}`);
      }
    }

    attachEventListeners() {
      this.gallery.addEventListener("click", (event) => {
        const target = event.target;
        if (target.matches(".gallery-item img")) {
          if (this.settings.lightBox) {
            this.openLightBox(target);
          }
        } else if (target.matches(".nav-link")) {
          this.filterByTag(target);
        } else if (target.matches(".mg-prev")) {
          this.prevImage();
        } else if (target.matches(".mg-next")) {
          this.nextImage();
        } else if (target.matches(".lightbox-close")) {
          document.getElementById(this.settings.lightboxId).style.display =
            "none"; // Close lightbox
        }
      });
    }

    processItems() {
      Array.from(this.gallery.querySelectorAll(".gallery-item")).forEach(
        (item) => {
          this.responsiveImageItem(item);
          this.moveItemInRowWrapper(item);
          this.wrapItemInColumn(item);

          const tag = item.dataset.galleryTag;
          if (
            this.settings.showTags &&
            tag &&
            !this.tagsCollection.includes(tag)
          ) {
            this.tagsCollection.push(tag);
          }
        }
      );
    }

    filterByTag(target) {
      const tag = target.dataset.imagesToggle;
      if (target.classList.contains("active-tag")) return;

      this.gallery.querySelectorAll(".active-tag").forEach((el) => {
        el.classList.remove("active-tag", "active");
      });
      target.classList.add("active-tag", "active");

      this.gallery.querySelectorAll(".item-column").forEach((column) => {
        const images = column.querySelectorAll("img");
        const matchesTag =
          tag === "all" ||
          Array.from(images).some((img) => img.dataset.galleryTag === tag);
        column.style.display = matchesTag ? "block" : "none";
      });
    }
  }

  document.querySelectorAll(".gallery").forEach((galleryElement) => {
    new MauGallery(galleryElement, {
      columns: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
      },
      lightBox: true,
      lightboxId: "myAwesomeLightbox",
      showTags: true,
      tagsPosition: "top",
    });
  });
});
