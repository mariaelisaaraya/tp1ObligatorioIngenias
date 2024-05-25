const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

app.use(express.json());

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
const { leerElementos, filtrarElementosPorNombre, filtrarElementosPorCategoria } = require('./trailerflix.manager');

const PORT = process.env.PORT || 3008;

let DB = [];
app.use((req,res,next)=>{
    DB = leerElementos();
    next();
})

// SERVIDOR WEB
// metodo get generico
app.get('/', (req,res)=>{
    res.send('<html><body><h1>BIENVENIDAS A TRAILERFLIX</h1></body></html>')
})

// - Crea un endpoint llamado /catalogo que liste todo el contenido de trailerflix JSON
app.get('/catalogo', (req,res)=>{
    res.send(DB)
})

// - Crea un endpoint llamado /titulo/:title que liste el catálogo de películas y/o series que se aproxime al título enviado. (la búsqueda del nombre debe ser parcial)
app.get('/titulo/:title', (req,res)=>{
    const nom = req.params.title
    const result = filtrarElementosPorNombre (nom)
    res.send(result)
})

// - Crea un endpoint llamado /categoria/:cat que liste todo el contenido del archivo JSON de acuerdo a la categoría enviada como parámetro (serie o película)
app.get('/categoria/:cat', (req,res)=>{
    const cat = req.params.cat
    const result = filtrarElementosPorCategoria(cat)
    res.send(result)
})

// - Crea un endpoint llamado /reparto/:act que liste el catálogo que incluya a la actriz o actor indicado por el nombre. (la búsqueda del nombre debe ser parcial)
// - Crea un endpoint llamado /trailer/:id que retorne la URL del trailer de la película o serie. Si ésta no posee video asociado, que retorne un mensaje en formato JSON notificando la no disponibilidad del mismo.



app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});