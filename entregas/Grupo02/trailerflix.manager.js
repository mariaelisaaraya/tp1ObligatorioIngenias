const fs = require('fs');

function leerElementos(){
    const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8' )
    const TRAILERFLIX = JSON.parse(datos)
    return TRAILERFLIX
}

function filtrarElementosPorNombre (nombre){
    DB = leerElementos()
    let nom = nombre.trim().toLowerCase() //Usamos los métodos trim() para eliminar posibles espacios y toLowerCase() para convertir todo a minúsculas y evitar errores posteriores.
    const resultado = DB.filter((elemento) => elemento.titulo.trim().toLowerCase().includes(nom));
    if (resultado) { 
        return resultado
          } else {
                console.error("No se encontraron coincidencias.");
          }
}

function filtrarElementosPorCategoria(categoria) {
    let DB = leerElementos(); 
    let cat = categoria.trim().toLowerCase();
    const resultado = DB.filter((elemento) => elemento.categoria.trim().toLowerCase().includes(cat));
    if (resultado.length > 0) { 
        return resultado;
    } else {
        console.error("No se encontraron coincidencias.");
        return []; // Retorna un array vacío si no hay coincidencias
    }
}

function filtrarElementosPorReparto(reparto) {
    let DB = leerElementos();
    let act = reparto.trim().toLowerCase();
    const resultado = DB.filter((elemento) => elemento.reparto.trim().toLowerCase().includes(act));
    if (resultado.length > 0) { 
        const resultadoReducido = resultado.map((elemento) => {
            return {
                titulo: elemento.titulo,
                reparto: elemento.reparto,
            }
        })
        return resultadoReducido;
    } else {
        console.error("No se encontraron coincidencias.");
        return []; // Retorna un array vacío si no hay coincidencias
    }
}

function filtrarElementosPorId(id) {
    let DB = leerElementos();
    let codigo = id
    const resultado = DB.filter((elemento) => elemento.id === codigo);
    if (resultado.length > 0) { 
        const resultadoReducido = resultado.map((elemento) => {
            return {
                id: elemento.id,
                titulo: elemento.titulo,
                trailer: elemento.trailer? elemento.trailer : {error: 'Error en el trailer', descripcion: "El elemento no posee trailer"}
            }
        })
        return resultadoReducido;
    } else {
        console.error("No se encontraron coincidencias.");
        return []; // Retorna un array vacío si no hay coincidencias
    }
}
module.exports = {leerElementos, filtrarElementosPorNombre, filtrarElementosPorCategoria, filtrarElementosPorReparto, filtrarElementosPorId}