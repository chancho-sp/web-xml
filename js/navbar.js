function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  const overlay = document.querySelector(".overlay");
  const content = document.getElementById("content");

  if (navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    overlay.style.display = "none"; // Ocultar el overlay
    content.style.marginLeft = "0";
  } else {
    navbar.classList.add("open");
    overlay.style.display = "block"; // Mostrar el overlay
    content.style.marginLeft = "250px"; // Ajusta este valor al tamaño de tu navbar
  }
}

// Cerrar el navbar cuando se hace clic en el overlay
document.querySelector(".overlay").addEventListener("click", function () {
  const navbar = document.getElementById("navbar");
  if (navbar.classList.contains("open")) {
    closeNavbar(); // Cerrar navbar si está abierto
  }
});

// Función para cerrar el navbar
function closeNavbar() {
  const navbar = document.getElementById("navbar");
  const overlay = document.querySelector(".overlay");
  navbar.classList.remove("open");
  overlay.style.display = "none"; // Ocultar el overlay
}

// Función para alternar los puntos de cada semana
document.querySelectorAll(".toggle-week").forEach(function (weekLink) {
  weekLink.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que el enlace redirija
    const points = this.nextElementSibling; // Selecciona la <ul> siguiente (los puntos)

    // Alternar la visibilidad de los puntos
    if (points.style.display === "none" || points.style.display === "") {
      points.style.display = "block";
    } else {
      points.style.display = "none";
    }
  });
});
