const modal = document.getElementById('modalContacto');
const btnAbrir = document.getElementById('abrirModal');
const btnCerrar = document.getElementById('cerrarModal');

// Abrir modal
btnAbrir.onclick = function() {
    modal.classList.remove('oculto');
}

// Cerrar modal al darle a la X
btnCerrar.onclick = function() {
    modal.classList.add('oculto');
}

// Cerrar modal si el usuario hace clic fuera de la caja blanca
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add('oculto');
    }
}