// --- theme.js ---

/**
 * 3 MODU BAKARRIK:
 * - 'iluna':  Gai Neutroa + Dark Mode
 * - 'argia':  Gai Neutroa (Light)
 * - 'urdina': Gai Urdina (Light)
 */

function setSpecificMode(mode) {
    const body = document.body;

    // 1. Garbitu aurreko klase guztiak
    body.classList.remove('dark-mode', 'theme-neutral', 'theme-blue', 'theme-warm', 'theme-sepia');

    // 2. Aplikatu aukeratutakoa
    if (mode === 'iluna') {
        body.classList.add('theme-neutral'); // Oinarria
        body.classList.add('dark-mode');     // Iluna aktibatu
    }
    else if (mode === 'argia') {
        body.classList.add('theme-neutral'); // Oinarria bakarrik (argia da defektuz)
    }
    else if (mode === 'urdina') {
        body.classList.add('theme-blue');    // Urdina (argia da defektuz)
        // Oharra: Urdin iluna nahi baduzu, hemen gehitu: body.classList.add('dark-mode');
    }

    // 3. Gorde erabiltzailearen aukera
    localStorage.setItem('userMode', mode);
}

// Orrialdea kargatzean exekutatu
(function() {
    const savedMode = localStorage.getItem('userMode') || 'iluna'; // 'iluna' defektuz
    setSpecificMode(savedMode);
})();