const fs = require("fs");
const path = require("path");

function leerTrailerflix() {
    const filePath = path.join(__dirname, process.env.DATABASE_PATH);
    const datos = fs.readFileSync(filePath, 'utf-8');
    const TRAILERFLIX = JSON.parse(datos);
    return TRAILERFLIX;
}

module.exports = { leerTrailerflix };
