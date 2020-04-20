const express = require('express');
const conectarDB = require('./config/db');

// crear el servidor

const app = express();

// conectar a la DB
conectarDB();

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Importar rutas

app.use('/api/')
//arracar la app
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
