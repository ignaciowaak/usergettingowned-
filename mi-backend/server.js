const express = require('express');
const path = require('path');

// Creamos una aplicación Express
const app = express();

// Definimos el puerto donde se ejecutará el servidor
const port = process.env.PORT || 3000;

// Servimos los archivos estáticos (HTML, CSS, JS) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Una ruta de ejemplo para devolver datos al frontend
app.get('/api/datos', (req, res) => {
    res.json({ mensaje: '¡Hola desde el backend!' });
});

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
// Detecta el evento de retroceso del navegador
window.addEventListener('popstate', function (event) {
    // Si hay un estado previo guardado en el historial
    if (event.state) {
        // Redirige al estado guardado (puede ser una sección, una URL parcial, etc.)
        console.log('Regresando al estado:', event.state);
    } else {
        // Si no hay estado previo, evita que vuelva al inicio
        event.preventDefault();
        console.log('No hay un estado previo guardado.');
    }
});

// Función para guardar un estado en el historial
function guardarEstado(data, title, url) {
    history.pushState(data, title, url);
    console.log('Estado guardado:', data, title, url);
}

// Ejemplo de cómo usar "guardarEstado" en tu web
// Podés llamarlo cuando cambie algo importante en la página, como una pestaña o sección
document.querySelectorAll('.navegacion').forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        guardarEstado({ seccion: elemento.id }, 'Nueva Sección', window.location.href);
    });
});