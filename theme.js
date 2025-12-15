
function setSpecificMode(mode) {
    const body = document.body;


    body.classList.remove('dark-mode', 'theme-neutral', 'theme-blue', 'theme-warm', 'theme-sepia');


    if (mode === 'iluna') {
        body.classList.add('theme-neutral');
        body.classList.add('dark-mode');
    }
    else if (mode === 'argia') {
        body.classList.add('theme-neutral');
    }
    else if (mode === 'urdina') {
        body.classList.add('theme-blue');
    }

    localStorage.setItem('userMode', mode);
}

(function() {
    const savedMode = localStorage.getItem('userMode') || 'iluna'; // 'iluna' defektuz
    setSpecificMode(savedMode);
})();