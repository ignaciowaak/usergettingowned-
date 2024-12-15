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