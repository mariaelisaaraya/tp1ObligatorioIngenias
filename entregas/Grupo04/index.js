const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const { leerTrailerflix } = require('./src/trailerflix.controller');

const PORT = process.env.PORT || 3000;

let DB = [];
app.use((req, res, next) => {
    DB = leerTrailerflix();
    next();
})


app.get('/api', (req, res) => {
    res.send("TrailerFlix")
})

app.get('/api/catalogo', (req, res) => {
    res.send(DB)
})

app.get('/api/titulo/:title', (req, res) => {
    res.send("Hola")
})

app.get('/api/categoria/:cat', (req, res) => {
    res.send("Hola")
})

app.get('/api/reparto/:act', (req, res) => {
    res.send("Hola")
})

app.get('/api/trailer/:id', (req, res) => {
    res.send("Hola")
})

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});