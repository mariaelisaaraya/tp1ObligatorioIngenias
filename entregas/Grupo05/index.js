//Declaramos los datos requiridos para la carga del modulo
const express = require('express');
const app = express();
const patj = require('path');
//Definimos el puerto para nuestro servidor
const PORT = process.env.PORT || 3008;

//Definimos la ruta principal / 
app.get('/',(request, response)=>{

    response.send("Bienvenid@s a nuestro primera app grupal.");
});
//Definimos la ruta/catalogo
app.get('/catalogo',(request, response)=>{

    response.send("");
});
//Definimos la ruta/titulo
app.get('/titulo/:title',(request, response)=>{

    response.send("");
});
//Definimos la ruta/categoria
app.get('/categoria/:cat',(request, response)=>{

    response.send("");
});
//Definimos la ruta/reparto
app.get('/reparto/:act',(request, response)=>{

    response.send("");
});
//Definimos la ruta/trailer
app.get('/trailer/:id',(request, response)=>{

    response.send("");
});

//Definimos la ruta para controlar rutas inexistentes
app.use((request, response)=>{
    response.status(404).send('Lo siento, la página que busca no existe.');

});

//Damos inicio al servidor
app.listen(PORT, ()=>{
    console.log( "Servidor ejecutandose en el puerto: http://localhost:"+PORT);
});

