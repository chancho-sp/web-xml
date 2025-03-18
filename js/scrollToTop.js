document.addEventListener("DOMContentLoaded", function () {
  const btnSubir = document.querySelector(".btn-subir");

  // Mostrar el botón cuando se hace scroll hacia abajo
  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          btnSubir.classList.add("mostrar"); // Aparece suavemente
      } else {
          btnSubir.classList.remove("mostrar"); // Desaparece suavemente
      }
  });

  // Hacer scroll hacia arriba al hacer click
  btnSubir.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

