// ===== OBJETO DE PROYECTOS =====
const projects = {
  1: {
    images: [
      "img/afiches/brasil.png",
      "img/afiches/italia.png",
      "img/afiches/francia.png",
      "img/afiches/alemania.png"
    ],
    description:
      "Proyecto de afiches urbanos para la promoción del C.L.E. (Centro de Lenguas Extranjeras), desarrollado con una estética inspirada en el artista Ikko Tanaka, caracterizada por el uso de colores planos y figuras geométricas. Cada afiche incorpora el animal nacional y una frase representativa de la cultura correspondiente, con el objetivo de invitar y motivar a las personas a inscribirse en el centro.",
    link: "afiches/afiches.html"
  },
  2: {
    images: [
      "img/portadas/el principito.png",
      "img/portadas/mokup.png",
      "img/portadas/mokuplibro.png",
      "img/portadas/mokupanashe.png"
    ],
    description: "Proyecto de rediseño editorial de un libro infantil clásico.",
    link: "libros/libros.html"
  },
  3: {
    images: [
      "img/kakaw/amargo.png",
      "img/kakaw/blanco.png",
      "img/kakaw/diabetico.png"
    ],
    description:
      "Diseño de identidad visual para marca de chocolates artesanales, con un enfoque natural y sobrio.",
    link: "kakaw/kakaw.html"
  },
  4: {
    images: [
      "img/mentis/caratulamentis.png",
      "img/mentis/fachada.png",
      "img/mentis/gorra.png",
      "img/mentis/camisa.png"
    ],
    description:
      "Diseño de identidad visual y manual de marca destinado para una organización de salud y bienestar mental.",
    link: "mentis/mentis.html"
  },
  5: {
    images: [
      "img/señaletica/direcionales.png",
      "img/señaletica/reguladora.png",
      "img/señaletica/informativas.png",
      "img/señaletica/nomencladoras.png"
    ],
    description:
      "Sistema de señalética para el Yacht Club Paysandú, orientado a mejorar la orientación, legibilidad y coherencia visual del espacio, reforzando la identidad institucional.",
    link: "señaletica/señaletica.html"
  },
  6: {
    images: [
      "img/trabajos/dune.png",
      "img/trabajos/fantasma.png",
      "img/trabajos/poster.png"
    ],
    description:
      "Muestra de ilustraciones para distintos formatos como portadas, afiches y posters, que reflejan versatilidad estilística y adaptación a diversos universos visuales.",
    link: "otros/otros.html"
  }
};

// ===== SELECCIÓN DE ELEMENTOS =====
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const modalImg = document.getElementById("carousel-img");
const description = document.getElementById("project-description");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const projectLink = document.getElementById("project-link");

let currentProject = null;
let currentIndex = 0;

// ===== ABRIR MODAL =====
document.querySelectorAll(".work").forEach((work) => {
  work.addEventListener("click", () => {
    const projectId = work.dataset.project;
    currentProject = projects[projectId];
    currentIndex = 0;

    modalImg.src = currentProject.images[currentIndex];
    description.textContent = currentProject.description;

    if (currentProject.link) {
      projectLink.href = currentProject.link;
      projectLink.style.display = "inline-block";
    } else {
      projectLink.style.display = "none";
    }

    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  });
});

// ===== CERRAR MODAL (CLICK EN EL FONDO) =====
modal.addEventListener("click", (e) => {
  if (!modalContent.contains(e.target)) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// ===== CARRUSEL =====
nextBtn.addEventListener("click", () => changeImage(1));
prevBtn.addEventListener("click", () => changeImage(-1));

function changeImage(direction) {
  modalImg.style.opacity = 0;

  setTimeout(() => {
    currentIndex =
      (currentIndex + direction + currentProject.images.length) %
      currentProject.images.length;

    modalImg.src = currentProject.images[currentIndex];
    modalImg.style.opacity = 1;
  }, 200);
}
