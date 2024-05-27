🎬 Trailerflix API

Grupo 2:

- Paula Carolina Serrano 
- Carla Karina Fernández Osa
- Viviana Beatriz Aguilera Valenzuela 
- Delfina Schlossberg 

Comenzamos instalando dotenv para manejar las variables de entorno de nuestra API rest que maneja la base de datos de TrailerFlix ubicada en la carpeta database.

Separamos las funciones que manejan la base de datos en un archivo aparte (trailerflix.manager.js) y en el archivo server.js manejamos las rutas y el servidor.

Descripción de Endpoints:

/
Método: GET
Descripción: Muestra un mensaje de bienvenida en la ruta raíz.
Ejemplo de Respuesta:
<html>

<body>
	<h1>BIENVENIDAS A TRAILERFLIX</h1>
</body>

</html>


/catalogo
Método: GET
Descripción: Lista todo el contenido de Trailerflix.
Ejemplo de url:http://localhost:3008/catalogo

/titulo/:title
Método: GET
Descripción: Lista el catálogo de películas y/o series que se aproximen al título enviado.
Ejemplo de url:http://localhost:3008/titulo/gambi
Ejemplo de Respuesta:

[
    {
        "id": 5,
        "poster": "./posters/5.jpg",
        "titulo": "Gambito de Dama",
        "categoria": "Serie",
        "genero": "Drama",
        "tags": "Drama, Ficción, Sucesos",
        "resumen": "En los cincuenta, una joven de un orfanato descubre que tiene un increíble don para el ajedrez y recorre el arduo camino a la fama mientras lucha contra las adicciones.",
        "temporadas": 1,
        "reparto": "Anya Taylor-Joy, Thomas Brodie-Sangster, Harry Melling, Moses Ingram, Chloe Pirrie, Janina Elkin",
        "trailer": "https://www.youtube.com/embed/lbleRbyGKL4"
    }
]
/categoria/:cat
Método: GET
Descripción: Lista el contenido de acuerdo a la categoría enviada como parámetro (serie o película). Admite búsqueda parcial.
Ejemplo de url:http://localhost:3008/categoria/pel


/reparto/:act
Método: GET
Descripción: Lista el catálogo que incluya en el reparto a la actriz o actor indicado por el nombre.
Ejemplo de url:http://localhost:3008/reparto/joy
Ejemplo de Respuesta:

[
    {
        "titulo": "Gambito de Dama",
        "reparto": "Anya Taylor-Joy, Thomas Brodie-Sangster, Harry Melling, Moses Ingram, Chloe Pirrie, Janina Elkin"
    },
    {
        "titulo": "Madame Curie",
        "reparto": "Rosamund Pike, Sam Riley, Aneurin Barnard, Anya Taylor-Joy, Simon Russell Beale, Jonathan Aris, Corey Johnson, Tim Woodward, Katherine Parkinson"
    }
]


/trailer/:id
Método: GET
Descripción: Búsqueda por id. Retorna el id, el título y la URL del trailer de la película o serie. Si no posee trailer, retorna un mensaje en formato JSON notificando la no disponibilidad del mismo.
Ejemplo de url:http://localhost:3008/trailer/1
Ejemplo de Respuesta:
[
    {
        "id": 1,
        "titulo": "The Crown",
        "trailer": {
            "error": "Error en el trailer",
            "descripcion": "El elemento no posee trailer"
        }
    }
]

