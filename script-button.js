const botonModo = document.getElementById('modo-toggle');
const iconoModo = botonModo.querySelector('i');

// Al cargar la página, revisar si ya existía una preferencia guardada
const temaActual = localStorage.getItem('tema');
if (temaActual === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    iconoModo.classList.replace('fa-moon', 'fa-sun');
}

botonModo.addEventListener('click', () => {
    let tema = document.documentElement.getAttribute('data-theme');
    
    if (tema === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        iconoModo.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('tema', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        iconoModo.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('tema', 'dark');
    }
});