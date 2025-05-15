/* abrir modal */

function abrirModal() {
    const modal = new bootstrap.Modal(document.getElementById('modalCards'));
    modal.show();
}


const sidebar = document.getElementById('sidebarLeft');

sidebar.addEventListener('hidden.bs.offcanvas', function () {
    const collapses = sidebar.querySelectorAll('.accordion-collapse');

    collapses.forEach(collapse => {
        const bsCollapse = bootstrap.Collapse.getInstance(collapse);
        if (bsCollapse) {
            bsCollapse.hide();
        } else {
            new bootstrap.Collapse(collapse, { toggle: false }).hide();
        }
    });
});

