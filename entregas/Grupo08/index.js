const express = require('express');
const app = express();
const fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const { leerTrailerFlix, buscarPorTitulo, buscarPorCategoria, buscarPorReparto, buscarTrailerPorId } = require('./database/trailerflix.controlador');

const PORT = process.env.PORT || 3000;
let DB = [];
app.use((req,res,next)=>{
    DB = leerTrailerFlix();
    next();
})

// metodo get para raiz
app.get('/', (req,res)=>{
    res.send ('<h1>Bienvenidos a TrailerFlix!<h1><h2>Mirá los trailers de las mejores series y películas<h2><h2>Recomendá TrailerFlix a tus amigos!<h2>');
})


// metodo get para la lista completa
app.get('/catalogo', (req,res)=>{
    res.send(DB)
})

// metodo get para buscar por titulo
app.get('/titulo/:titulo',(req,res)=>{
    const tituloBuscado = req.params.titulo
    const resultadoPorTitulo = buscarPorTitulo(tituloBuscado)
    res.send(resultadoPorTitulo);
})

app.get('/categoria/:cat',(req,res)=>{
    const categoriaBuscada = req.params.cat;
    const resultadoPorCategoria = buscarPorCategoria(categoriaBuscada)
    res.send(resultadoPorCategoria);
})

app.get('/reparto/:reparto',(req,res)=>{
    const personaBuscada = req.params.reparto;
    const resultadoPorReparto = buscarPorReparto(personaBuscada)
    res.send(resultadoPorReparto);
})

app.get('/id/:id',(req,res)=>{
    const idBuscado = parseInt(req.params.id);
    const resultadoPorId = buscarTrailerPorId(idBuscado)
    res.send(resultadoPorId);
})

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});

