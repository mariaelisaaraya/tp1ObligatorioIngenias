const fs = require('fs');

function leerTrailerFlix(){
    const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8' )
    const TRAILERFLIX = JSON.parse(datos)
    return TRAILERFLIX
}


function buscarPorTitulo(tituloBuscado){
    const DB = leerTrailerFlix();
    const resultadoPorTitulo = DB.filter(item => item.titulo.toLowerCase().includes(tituloBuscado.toLowerCase())) 
        if (resultadoPorTitulo == []) {
           return [{error: `Error en el título`,
        descripcion: `Lo siento, no se encontraron items con el título buscado: ${tituloBuscado}`}]
        }
    
    return resultadoPorTitulo

}

function buscarPorCategoria(categoriaBuscada){
    const DB = leerTrailerFlix();
    const resultadoPorCategoria = DB.filter(item => item.categoria.toLowerCase().includes(categoriaBuscada.toLowerCase())) 
        if (resultadoPorCategoria == []) {
           return [{error: `Error en la categoría`,
        descripcion: `Lo siento, no se encontraron items con la categoría buscada: ${categoriaBuscada}`}]
        }
    
    return resultadoPorCategoria

}

function buscarPorReparto(personaBuscada){
    const DB = leerTrailerFlix();
    const resultadoPorReparto = DB.filter(item => item.reparto.toLowerCase().includes(personaBuscada.toLowerCase())) 
        if (resultadoPorReparto == []) {
           return [{error: `Error en el reparto`,
        descripcion: `Lo siento, no se encontraron items con el reparto buscado: ${personaBuscada}`}]
        }
    
    const resultadoPorRepartoMap = resultadoPorReparto.map((item) => {
        return {
            titulo: item.titulo,
            reparto: item.reparto,
        }
    });
    console.log(resultadoPorRepartoMap)
    return resultadoPorRepartoMap;

}

function buscarTrailerPorId(id){
    const DB = leerTrailerFlix();
    const resultadoPorId = DB.find(item => item.id === id) 
        if (!resultadoPorId) {
           return [{error: `Error en el id`,
        descripcion: `Lo siento, no se encontraron items con el id buscado: ${id}`}]
        }
    
    const resultadoPorIdMap =  {
            id: resultadoPorId.id,
            titulo: resultadoPorId.titulo,
            trailer: resultadoPorId.trailer || "No posee trailer",
        }
       return resultadoPorIdMap;  
    };
   





module.exports = {leerTrailerFlix, buscarPorTitulo, buscarPorCategoria, buscarPorReparto, buscarTrailerPorId}