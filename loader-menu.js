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


    const links = document.querySelectorAll('#menu-pc-container .nav-link, #menu-container .nav-link');

    links.forEach(link => {
        const href = link.getAttribute('href');


        link.classList.remove('active');
        link.removeAttribute('aria-current');


        if (href === page) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}