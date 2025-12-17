// ===== OBJETO DE PROYECTOS =====
const projects = {
  1: {
    images: [
      "img/nomencladora/nomencladoras.png",
      "img/nomencladora/marina.png",
      "img/nomencladora/mockupestacionamiento.png",
    ],
    description:
      " Las nomencladoras son señales cuya función principal es identificar o nombrar un lugar específico. Por lo general, se refieren a calles, avenidas, plazas, edificios o departamentos dentro de una estructura mayor. Su diseño es usualmente sencillo y claro, centrado en la legibilidad del nombre que presentan.",
  },
  2: {
    images: [
      "img/direccionales/direcionales.png",
      "img/direccionales/poste.png",
      "img/portadas/mokuplibro.png",
      "img/portadas/mokupanashe.png"
    ],
    description: "Las señales direccionales tienen como objetivo guiar al usuario indicándole el camino o la dirección a seguir para llegar a un destino. Incluyen flechas y nombres de lugares, y son cruciales en entornos complejos como aeropuertos, hospitales, o redes de carreteras, asegurando un flujo de movimiento eficiente",
  },
  3: {
    images: [
      "img/reguladoras/reguladora.png",
      "img/reguladoras/agua.png",
      "img/reguladoras/alto.png",
      "img/reguladoras/velocidad.png"
    ],
    description:
      "Una señalética reguladora es aquella que establece normas, prohibiciones u obligaciones dentro de un espacio para mantener el orden y la seguridad. Indica claramente lo que se puede o no se puede hacer, como límites de velocidad, zonas restringidas o advertencias de peligro. Su objetivo es prevenir riesgos y guiar el comportamiento de las personas.",
  },

    4: {
    images: [
      "img/informativas/informativas.png",
      "img/informativas/poste.png",
      "img/informativas/rampa.png"
    ],
    description:
      "Las señales informativas proporcionan datos de interés, explicaciones o advertencias que no necesariamente se relacionan con la dirección, sino con el entorno o los servicios disponibles. Ejemplos comunes incluyen carteles de “No fumar”, horarios de atención, explicación de normas, o la ubicación de servicios como baños y teléfonos.",
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
