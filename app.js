const express = require('express');
const connectDB = require('./config/database');
const mascotasRoutes = require('./routes/mascotas');

const app = express();
const port = 3000;

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de la API
app.use('/mascotas', mascotasRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
