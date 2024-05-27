const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const {leerTrailerflix} = require("./src/trailerflix.controller");
const PORT = process.env.PORT || 3008;

let DB = [];

// Middleware para parsear JSON
dotenv.config();
app.use(bodyParser.json());

app.use((require,response,next)=>{ 
    DB = leerTrailerflix();
    next();
})


const fs = require('fs');
const path = require('path');
require('dotenv').config();


// Ruta raíz con mensaje de bienvenida
app.get('/', (req, res) => {
    res.send('<h1>❈✴  🎀  𝐵𝒾𝑒𝓃𝓋𝑒𝓃𝒾@𝓈 𝒶 𝒯𝓇𝒶𝒾𝓁𝑒𝓇𝒻𝓁𝒾𝓍  🎀  ✴❈</h1>');
});

// Endpoint para listar todo el catálogo con todo el contenido del archivo
app.get('/catalogo', (req, res) => {
    res.json(DB);
});

// Endpoint para buscar por título
app.get('/titulo/:title', (req, res) => {
    const { title } = req.params;
    const filteredData = TRAILERFLIX.filter(item => item.titulo.toLowerCase().includes(title.toLowerCase()));
    res.json(filteredData);
});

// Endpoint para buscar por categoría
app.get('/categoria/:cat', (req, res) => {
    const { cat } = req.params;
    const filteredData = TRAILERFLIX.filter(item => item.categoria.toLowerCase() === cat.toLowerCase());
    res.json(filteredData);
});

// Endpoint para buscar por reparto
app.get('/reparto/:act', (req, res) => {
    const { act } = req.params;
    const filteredData = TRAILERFLIX.filter(item => item.reparto.toLowerCase().includes(act.toLowerCase()));
    res.json(filteredData);
});

/// Endpoint para obtener el trailer de una película o serie por ID
app.get('/trailer/id/:id', (req, res) => {
  const id = req.params.id;
  const trailer = trailer.find(p => p.id === id);

  if (trailer) {
    res.json(trailer);
  } else {
    res.status(404).json({ error: 'No hay trailer disponible para este contenido' });
  }
});

// Rutas inxistentes
app.get("*", (request, response)=>{ 
    response.status(404).send("Lo lamento, no existe esa ruta :C")
})
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`);
});

