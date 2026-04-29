const URL_GOOGLE_SCRIPT = "https://script.google.com/macros/s/AKfycbz5P5-qW6N4pOhmP7xaUaTa6D8mcaLOf5y9Szsi1W2X6e0lgFnYycJo0uLGh4sZ4q0G/exec";

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const datos = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        servicio: document.getElementById('servicio-interes').value,
        mensaje: document.getElementById('mensaje').value
    };

    // Enviamos los datos a Google Sheets
    fetch(URL_GOOGLE_SCRIPT, {
        method: 'POST',
        mode: 'no-cors', // Importante para Apps Script
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(() => {
        // Mostrar mensaje de éxito
        document.getElementById('miFormulario').style.display = 'none';
        document.getElementById('mensaje-exito').classList.remove('oculto');
    })
    .catch(error => console.error('Error!', error));
});