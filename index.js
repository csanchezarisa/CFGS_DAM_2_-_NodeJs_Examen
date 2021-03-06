const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const pizzasRouter = require('./routes/pizzas');
const apiRouter = require('./routes/api');

const app = express();

mongoose.connect('mongodb://localhost/examen', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.set('view engine', 'pug');
app.set('views', './views');

app.use(session({
	secret: 'SECRETITO SECRETITO',
	resave: true,
	saveUninitialized: true
}));

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Routes
app.use('/pizzas', pizzasRouter);
app.use('/api', apiRouter);

app.get('/', (req, res) => {

    res.render('mensaje', {mensaje: 'Hola, Bienvenido/a'});

});

app.use('*', (req, res) => {

    res.render('mensaje', {mensaje: 'ERROR 404: SITIO NO ENCONTRADO'});

});


app.listen(3000);