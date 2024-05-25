const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const { leerTrailerflix, obtenerTrailerPorId, obtenerTitulo } = require('./src/trailerflix.controller');

const PORT = process.env.PORT || 3000;

let DB = [];
app.use((req, res, next) => {
    DB = leerTrailerflix();
    next();
})

app.get('/', (req, res) => {
    res.send("<h1>Bienvenido a TrailerFlix</h1><p>¡Disfruta explorando nuestro catálogo de películas y series!</p>");
});

app.get('/api/catalogo', (req, res) => {
    res.send(DB)
})

app.get('/api/titulo/:title', (req, res) => {
    const title = req.params.title.toLowerCase();
    const data = obtenerTitulo(title, DB);
    res.send(data)
})

app.get('/api/categoria/:cat', (req, res) => {
    res.send("Hola")
})

// Esta ruta recibe el nombre de un actor o actriz y devuelve las películas en las que ha participado. junto con el reparto de cada película.
app.get('/api/reparto/:act', (req, res) => {
    let param = req.params['act'].trim().toLowerCase();
    console.log(param)
    if (param !== ""){
        let result = DB.filter( item => 
            item.reparto.some(reparto => 
            reparto.toLowerCase().includes(param))).map(item => 
            ({
            titulo: item.titulo,
            reparto: item.reparto
        }));

        result.length > 0 ? res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'Ups!!! No hay coincidencias encontradas :(' })
    }
});

// Ruta para obtener el trailer de una película o serie por su id
app.get('/api/trailer/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const trailer = obtenerTrailerPorId(id, DB);

    res.send(trailer);
})

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});