const fs = require('fs');

function leerTrailerflix() {

    let datos
    let trailerflix

    try {
        datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8');
        trailerflix = JSON.parse(datos);
    } catch (error) {
        console.error('Error al leer el archivo de datos:', error);
        return [];
    }

    // Convertir las cadenas de tags a array
    trailerflix.forEach((item) => {
        item.tags = item.tags.split(',').map(tag => tag.trim());
    });

    // Convertir las cadenas de reparto a array
    trailerflix.forEach((item) => {
        item.reparto = item.reparto.split(',').map(actor => actor.trim());
    });

    return trailerflix;
}

// Función para buscar el trailer de una película o serie por su id. 
// Si no se encuentra devuelve un mensaje en formato JSON notificando la no disponibilidad del mismo.
function obtenerTrailerPorId(id, DB) {
    const trailer = DB.find((item) => item.id === id);

    if (trailer) {
        return {
            id: trailer.id,
            titulo: trailer.titulo,
            trailer: trailer?.trailer || 'No disponible'
        };
    } else {
        return { mensaje: `No se encontraron resultados con el id ${id}` };
    }
}

module.exports = { leerTrailerflix, obtenerTrailerPorId };
