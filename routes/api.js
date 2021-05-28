const express = require('express');
const router = express.Router();
const Pizza = require('../models/pizzas');

router.get('/:id([0-9a-z]{24})', (req, res) => {

    console.log(req.params.id);

    Pizza.findById(req.params.id, (err, document) => {

        if (err) {
            res.json({respuesta: 'error'});
        }
        else {
            res.json(document);
        }

    });

});

router.post('/', (req, res) => {

    pizza = new Pizza(req.body);

    pizza.save(err => {

        if (err) {
            let errores = [];
            let campos = Object.keys(err.errors);

            for (let campo of campos) {
                errores.push(err.errors[campo].message);
            }
            
            res.json({respuesta: 'error', errores: errores});
        }
        else {
            res.json({respuesta: 'ok'});
        }

    });

});

module.exports = router;