const dotenv = require('dotenv');
        dotenv.config();
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const { leerTrailerflix } = require("./src/trailerflix.controller");
const PORT = process.env.PORT || 3008;

let trailerFlixBD =[];



// Middleware para parsear JSON
app.use(bodyParser.json());
// Middleware para cargar los datos del archivo JSON
app.use((req, res, next) => {
    try {
        // Lee los datos del archivo JSON
        trailerFlixBD = leerTrailerflix();
        next(); // Continúa con el siguiente middleware
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        // Si hay un error, asigna un arreglo vacío a BD
        trailerFlixBD = [];
        next(); // Continúa con el siguiente middleware
    }
});


// Funcion para eliminar acentos
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};


// Ruta raíz con mensaje de bienvenida
app.get("/", (req, res) => {
    res.send('<h1>❈✴  🎀  𝐵𝒾𝑒𝓃𝓋𝑒𝓃𝒾@𝓈 𝒶 𝒯𝓇𝒶𝒾𝓁𝑒𝓇𝒻𝓁𝒾𝓍  🎀  ✴❈</h1>');
});

// Ruta para listar todo el catálogo
app.get("/catalogo", (req, res) => {
    try {
        const trailerFlixBD = leerTrailerflix();
        if (trailerFlixBD.length > 0) {
            // Si hay contenido en el catálogo, lo muestra
            res.json(trailerFlixBD);
        } else {
            // Si no hay contenido en el catálogo, muestra un mensaje de error
            res.status(404).json({ error: 'No se encontró ningún contenido en el catálogo' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al leer el archivo JSON' });
    }
});

// Ruta para buscar por titulo
app.get('/titulo/:title', (req, res) => {
    // Convierte el titulo que recibe a minusculas y elimina los espacios en blanco
    let titulo = req.params.title.trim().toLowerCase();
    const trailerFlixBD = leerTrailerflix();
    
    if (titulo !== '') {
        let resultado = trailerFlixBD.filter((trailerflix) => 
            // INCLUDES se utiliza para la búsqueda parcial
            trailerflix.titulo.toLowerCase().includes(titulo)
        );

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(404).json({ error: 'No se encontró ningún contenido con ese título' });
        }
    } else {
        res.status(400).json({ error: 'El título no puede estar vacío' });
    }
});

// Ruta para buscar por categoria
app.get('/categoria/:cat', (req, res) => {
    // Convierte la categoria a minusculas y elimina los espacios en blanco
    // Tambien le saco la tilde a la categoria x ej: Pelicula
    let categoria = removeAccents(req.params.cat.trim().toLowerCase());
    const trailerFlixBD = leerTrailerflix();
    
    if (categoria !== '') {
        let resultado = trailerFlixBD.filter((trailerflix) => 
            removeAccents(trailerflix.categoria.toLowerCase()) === categoria
        );

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(404).json({ error: `No se encontró ningún contenido en la categoría '${categoria}'` });
        }
    } else {
        res.status(400).json({ error: 'La categoría no puede estar vacía' });
    }
});


// Ruta para buscar por reparto
app.get('/reparto/:act', (req, res) => {
    let actor = req.params.act.trim().toLowerCase();
    const trailerFlixBD = leerTrailerflix();

    if (actor !== '') {
        let resultado = trailerFlixBD.filter((trailerflix) =>
            trailerflix.reparto.toLowerCase().includes(actor)
        ).map(trailerflix => ({
            //solo mostramos el titulo y actores
            titulo: trailerflix.titulo,
            reparto: trailerflix.reparto
        }));

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(404).json({ error: `No se encontró ningún contenido con el actor/actriz '${actor}'` });
        }
    } else {
        res.status(400).json({ error: 'El nombre del actor/actriz no puede estar vacío' });
    }
});


// Ruta para obtener el trailer de una película o serie por ID
app.get('/trailer/:id', (req, res) => {
    const { id } = req.params;
    const trailerflix = leerTrailerflix();
    const trailer = trailerflix.find(item => item.id == id); // == instead of === to match types

    if (trailer?.trailer) {
        res.json({ id: trailer.id, titulo: trailer.titulo, trailer: trailer.trailer });
    } else {
        res.status(404).json({ error: 'No hay trailer disponible para este contenido' });
    }
});


// Manejador para rutas inexistentes
app.get("*", (req, res) => {
    res.status(404).send('Lo lamento, no existe esa ruta :C');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
