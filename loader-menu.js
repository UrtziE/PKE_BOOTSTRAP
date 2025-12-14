document.addEventListener("DOMContentLoaded", function() {

    function loadMenu(url, containerId) {
        return fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`No se pudo cargar ${url}`);
                return response.text();
            })
            .then(data => {
                document.getElementById(containerId).innerHTML = data;
            });
    }

    // Usamos Promise.all para cargar ambos menús en paralelo
    Promise.all([
        loadMenu('menuPC.html', 'menu-pc-container'),
        loadMenu('menu.html', 'menu-container')
    ])
        .then(() => {
            highlightActiveLink();
        })
        .catch(error => console.error('Error cargando los menús:', error));
});

function highlightActiveLink() {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    if (page === "") page = "index.html";

    // ¡CORRECCIÓN! El selector ahora busca en AMBOS menús.
    // Selecciona todos los .nav-link dentro de los contenedores de menú.
    const links = document.querySelectorAll('#menu-pc-container .nav-link, #menu-container .nav-link');

    links.forEach(link => {
        const href = link.getAttribute('href');

        // Limpiamos la clase 'active' de todos los enlaces primero
        link.classList.remove('active');
        link.removeAttribute('aria-current');

        // Si el href coincide, añadimos la clase 'active'
        if (href === page) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}