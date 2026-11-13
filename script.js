document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            // Alterna la clase 'is-active' para mostrar u ocultar el menú
            navMenu.classList.toggle("is-active");
        });

        // Opcional: Cierra el menú automáticamente al hacer clic en cualquier enlace (ideal para páginas con anclajes como esta)
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("is-active");
            });
        });
    }
});
