document.addEventListener("DOMContentLoaded", function() {
    // 1. Cargar el menú
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el HTML del menú en el contenedor
            document.getElementById('menu-container').innerHTML = data;

            // 2. Iluminar el botón activo automáticamente
            highlightActiveLink();
        })
        .catch(error => console.error('Error cargando el menú:', error));
});

function highlightActiveLink() {
    // Obtenemos el nombre del archivo actual (ej: araudia.html)
    let path = window.location.pathname;
    let page = path.split("/").pop();

    // Si es la raíz (carpeta vacía), asumimos que es index.html
    if (page === "") page = "index.html";

    // Buscamos todos los enlaces del menú recién cargado
    const links = document.querySelectorAll('.bottom-nav-blue .nav-link');

    links.forEach(link => {
        // Obtenemos el href del enlace (ej: araudia.html)
        const href = link.getAttribute('href');

        // Si el href coincide con la página actual...
        if (href === page) {
            link.classList.add('active'); // Añadimos la clase active
            link.setAttribute('aria-current', 'page');
        }
    });
}