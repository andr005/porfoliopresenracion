// ===== OBJETO DE PROYECTOS =====
const projects = {
  1: {
    images: [
      "img/amargo/amargo.png",
      "img/amargo/mokupamrgo.png",
      "img/amargo/segundo.png",
      "img/amargo/terco.png"
    ],
    description:
      "Inspirado en el origen ancestral del cacao, este chocolate celebra la pureza y la intensidad. Su diseño evoca la tradición mesoamericana con una vaina de cacao dorada sobre fondo bordó, símbolo de respeto por la tierra y la cultura. Ideal para quienes disfrutan sabores profundos y auténticos.",
  },
  2: {
    images: [
      "img/blanco/blanco.png",
      "img/blanco/primo.png",
      "img/blanco/secondo.png",
      "img/blanco/terco.png"
    ],
    description: "Delicado y aromático, el chocolate blanco KAKAW transmite suavidad y elegancia. La flor de vainilla dorada representa la esencia artesanal y el refinamiento de su sabor. Perfecto para quienes buscan una experiencia dulce, suave y sofisticada.",
  },
  3: {
    images: [
      "img/diabetico/celeste.png",
      "img/diabetico/primermokup.png",
      "img/diabetico/segundomokup.png",
      "img/diabetico/tercermocku.png"

    ],
    description:
      "Natural y equilibrado, esta variedad está pensada para quienes priorizan bienestar y salud sin renunciar al placer. La ilustración de una rama con hojas simboliza vitalidad y pureza, mientras la paleta en celeste y dorado comunica frescura, confianza y accesibilidad.",
  }
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

document.querySelectorAll(".star-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".expandable");
    const details = card.querySelector(".star-details");
    const icon = btn.querySelector(".toggle-icon");

    if (details.style.maxHeight) {
      details.style.maxHeight = null;
      icon.textContent = "+";
    } else {
      details.style.maxHeight = details.scrollHeight + "px";
      icon.textContent = "–";
    }
  });
});
