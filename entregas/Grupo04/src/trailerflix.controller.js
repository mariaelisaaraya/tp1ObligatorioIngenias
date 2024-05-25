const fs = require('fs');

function leerTrailerflix() {
    const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8');
    const trailerflix = JSON.parse(datos);

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

module.exports = { leerTrailerflix };

