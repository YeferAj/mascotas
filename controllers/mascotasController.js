const Mascota = require('../models/mascota');

// Crear una nueva mascota
exports.crearMascota = async (req, res) => {
    try {
        const mascota = new Mascota(req.body);
        await mascota.save();
        res.status(201).send(mascota);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Obtener todas las mascotas
exports.obtenerMascotas = async (req, res) => {
    try {
        const mascotas = await Mascota.find();
        res.send(mascotas);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Obtener una mascota por su ID
exports.obtenerMascota = async (req, res) => {
    try {
        const mascota = await Mascota.findById(req.params.id);
        if (!mascota) {
            return res.status(404).send({ error: 'Mascota no encontrada' });
        }
        res.send(mascota);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Actualizar una mascota por su ID
exports.actualizarMascota = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['nombre', 'especie', 'color', 'raza', 'precio'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Actualizaciones no válidas' });
    }

    try {
        const mascota = await Mascota.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!mascota) {
            return res.status(404).send({ error: 'Mascota no encontrada' });
        }
        res.send(mascota);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Eliminar una mascota por su ID
exports.eliminarMascota = async (req, res) => {
    try {
        const mascota = await Mascota.findByIdAndDelete(req.params.id);
        if (!mascota) {
            return res.status(404).send({ error: 'Mascota no encontrada' });
        }
        res.send(mascota);
    } catch (err) {
        res.status(500).send(err);
    }
};
