const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    especie: { type: String, required: true },
    color: { type: String },
    raza: { type: String },
    precio: { type: Number, required: true },
});

const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;
