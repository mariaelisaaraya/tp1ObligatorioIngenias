const express = require('express');
const app = express();
const PORT = 3008;

app.get('/',(request, response)=>{

    response.send("Bienvenid@s a nuestro primer trabajo practico.");
});

app.get('/catalogo',(request, response)=>{

    response.send("");
});

app.get('/titulo/:title',(request, response)=>{

    response.send("");
});

app.get('/categoria/:cat',(request, response)=>{

    response.send("");
});

app.get('/reparto/:act',(request, response)=>{

    response.send("");
});

app.get('/trailer/:id',(request, response)=>{

    response.send("");
});

app.use((request, response)=>{
    response.status(404).send('Lo siento, la página que buscas no existe.');

});

app.listen(PORT, ()=>{
    console.log( "Servidor ejecutandose en el puerto: http://localhost:"+PORT);
});

