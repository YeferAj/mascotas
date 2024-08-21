const express = require('express');
const router = express.Router();
const mascotasController = require('../controllers/mascotasController');

// Rutas CRUD para mascotas
router.post('/', mascotasController.crearMascota);
router.get('/', mascotasController.obtenerMascotas);
router.get('/:id', mascotasController.obtenerMascota);
router.patch('/:id', mascotasController.actualizarMascota);
router.delete('/:id', mascotasController.eliminarMascota);

module.exports = router;
