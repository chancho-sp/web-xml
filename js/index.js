function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const menuIcon = document.getElementById("menu-icon");

    // Alternar la clase "show" para el menú
    navLinks.classList.toggle("show");

    // Cambiar entre el icono de hamburguesa (☰) y la X (✖)
    if (navLinks.classList.contains("show")) {
        menuIcon.textContent = "✖"; // Cambiar a X
    } else {
        menuIcon.textContent = "☰"; // Cambiar de nuevo a hamburguesa
    }
}
