const express = require('express');
const router = express.Router();
const Pizza = require('../models/pizzas');
const Restaurante = require('../models/restaurantes');

router.get('/', (req, res) => {

    Pizza.find().populate('restaurante').exec((err, documents) => {
        if (!err) {
            res.render('pizzas', {pizzas: documents});
        }
        else {
            res.redirect('/');
        }
    })
});

router.get('/delete/:id', (req, res) => {

    Pizza.findByIdAndDelete(req.params.id, err => {

        if (err) {
            console.log(err);
        }

        res.redirect('/pizzas');

    });

});

module.exports = router;