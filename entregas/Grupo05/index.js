const http = require('http');
const PORT = 3008;


const server = http.createServer((request, response) =>{
    let respuesta = "";
    let statusCode = 200;
    if(request.url ==='/'){
        respuesta = "Bienvenid@s a nuestro primer trabajo practico."
    }else if(request.url ==='/catalogo'){

        }else if(request.url ==='/titulo/:title'){

          }else if(request.url ==='/categoria/:cat'){

          }else if(request.url ==='/reparto/:act'){

          }else if(request.url ==='/trailer/:id'){

          }else {
            statusCode = 404;
            respuesta = "No se encontro la ruta, vuelve a intentarlo.";

          }
    response.statusCode(statusCode);
    response.setHeader('charset', 'utf-8');
    response.setHeader('Content-Type', 'text/plain');
    response.end(respuesta);

});

server.listen(PORT, () =>{
    console.log( `Servidor ejecutandose en el puerto: ${PORT}`);
})