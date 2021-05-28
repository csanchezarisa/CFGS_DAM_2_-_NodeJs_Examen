const mongoose = require('mongoose');

const restauranteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    }
})

const Restaurante = mongoose.model("restaurantes", restauranteSchema);

module.exports = Restaurante;