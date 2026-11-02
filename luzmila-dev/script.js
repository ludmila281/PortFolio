// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});
document.addEventListener("DOMContentLoaded", () => {
    // Verificamos si la página se recargó con el aviso de enviado
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('enviado') === 'true') {
        alert("¡Enviado con éxito!");
        // Limpiamos la URL para que no quede el parámetro guardado
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});