// ===== OBJETO DE PROYECTOS =====
const projects = {
  1: {
    images: [
      "img/dune/dune.png",
      "img/dune/primerdune.png",
      "img/dune/segundodune.png",
      "img/dune/tercerdune.png",
      
    ],
    description:
      "Paul Atreides viaja con su familia al planeta desértico Arrakis, donde se produce una valiosa especia codiciada por el Imperio. Tras una traición, Paul huye y descubre que podría ser el elegido de una profecía entre los habitantes locales, los Fremen, iniciando su camino como líder.",
  },
  2: {
    images: [
      "img/juego/poster.png",
      "img/juego/primerjuego.png",
      "img/juego/segundojuego.png",
      "img/juego/tercerjuego.png"
    ],
    description: "En un mundo asolado por la oscuridad, la espada maldita Zarkael ha despertado, vinculada al alma del guerrero elegido. Del abismo emerge Andras, señor de los espectros, para reclamar el poder ancestral sellado siglos atrás. Como miembro del Ordo Noctis, deberás enfrentar legiones de sombras y desentrañar el secreto de la hoja sangrienta, mientras el límite entre la redención y la condena se vuelve cada vez más difuso.",
  },
  3: {
    images: [
      "img/fantasma/fantasma.png",
      "img/fantasma/primerfantasma.png",
      "img/fantasma/segundofantasma.png",
      "img/fantasma/tercerfantasma.png",
      "img/fantasma/cuartofantasma.png"
    ],
    description:
      "En la Ópera de París, una joven cantante llamada Christine es guiada en secreto por un misterioso genio enmascarado que vive oculto bajo el teatro. Su obsesión por ella desencadena un conflicto peligroso cuando Christine se enamora de otro hombre, revelando el lado trágico y oscuro del Fantasma.",
  },

    4: {
    images: [
      "img/animacion/animacion.gif",
      "img/animacion/animacion.png",
      "img/animacion/segundo.png",
      "img/animacion/tercer.png"
    ],
    description:
      "Publicacion digital diseñada para burguer king",
  },
   
};

// ===== SELECCIÓN DE ELEMENTOS =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("carousel-img");
const description = document.getElementById("project-description");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const projectLink = document.getElementById("project-link"); // 🔹 CORRECTO ID

let currentProject = null;
let currentIndex = 0;

// ===== ABRIR MODAL =====
document.querySelectorAll(".work").forEach((work) => {
  work.addEventListener("click", () => {
    const projectId = work.dataset.project;
    currentProject = projects[projectId];
    currentIndex = 0;

    // Mostrar primera imagen y descripción
    modalImg.src = currentProject.images[currentIndex];
    description.textContent = currentProject.description;

    // Actualizar el botón de enlace
    if (currentProject.link) {
      projectLink.href = currentProject.link;
      projectLink.style.display = "inline-block";
    } else {
      projectLink.style.display = "none";
    }

    // Mostrar modal
    modal.style.display = "flex";
  });
});

// ===== CERRAR MODAL =====
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// ===== CARRUSEL MANUAL =====
nextBtn.onclick = () => changeImage(1);
prevBtn.onclick = () => changeImage(-1);

function changeImage(dir) {
  currentIndex =
    (currentIndex + dir + currentProject.images.length) %
    currentProject.images.length;
  modalImg.src = currentProject.images[currentIndex];
}


const projectTitle = document.getElementById("project-title");

work.addEventListener("click", () => {
  const projectId = work.dataset.project;
  currentProject = projects[projectId];
  currentIndex = 0;

  modalImg.src = currentProject.images[currentIndex];
  description.textContent = currentProject.description;
  projectTitle.textContent = work.querySelector("p").textContent;

  modal.style.display = "flex";
});