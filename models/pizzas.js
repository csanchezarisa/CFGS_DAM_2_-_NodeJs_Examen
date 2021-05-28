const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        maxLength: 20
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: 1
    },
    vegetariana: {
        type: String,
        enum: ['si', 'no'],
        required: [true, 'El campo vegetariana es obligatorio']
    },
    restaurante: {
        type: mongoose.ObjectId,
        required: [true, 'El restaurante es obligatorio'],
        ref: 'restaurantes'
    }
})

const Pizza = mongoose.model("pizzas", pizzaSchema);

module.exports = Pizza;