# Feedback sobre el Trabajo N1 Obligatorio, Equipo 5

## Evaluación General

## README.md

- Buena organización y explicación, lo resumiría un poco, pondría las integrantes del equipo. Hay un espacio entre la línea 72 y 74 que no se entiende bien para que está.

## Uso de Variables de Entorno

- Se evalua el uso de variables de entorno para la configuración del servidor y la ruta del archivo de datos correctamente, perfecto uso.

## Archivo de Datos JSON

- Contiene correctamente los datos del catálogo de películas y series que la API maneja pero también tiene datos.json lo cual esa estructura no fue pedida, limpiaría lo que no es necesario.

## Archivo index.js y trailerflix.controller.js

- Uso del middleware: Utilizar un middleware para cargar los datos en DB es una buena práctica, sin embargo, podrían considerar la eficiencia si leerPeliculas() es una operación costosa y se realiza en cada solicitud.
- Endpoints básicos: Los endpoints / y /catalogo están definidos de manera clara y simple pero para /catalogo, es recomendable usar res.json(DB) en lugar de res.send(DB) para asegurar que la respuesta se envíe en formato JSON.
- Nombres de funciones descriptivos: Los nombres de las funciones importadas son muy claros y descriptivos, facilitando la comprensión de su propósito sin necesidad de ver su implementación, podrían haber dejado todo lo de funciones en trailerflix.controller.js así separaban todo bien.
- En general, el código está bien estructurado y sigue buenas prácticas de desarrollo.
- Endpoint / (Raíz): Se verifica que existe una respuesta de bienvenida en formato texto plano o HTML.
- Endpoint /catalogo :Se comprueba que liste todo el contenido del archivo JSON.
    - Pueden considerar paginar los resultados si la lista es muy larga para mejorar la eficiencia.
- Endpoint /titulo/:title: Se asegura que permita búsquedas parciales y normalizadas por título. 
- Endpoint /categoria/:cat
    - Se verifica que liste el contenido según la categoría (serie o película).
- Endpoint /reparto/:act
    - Se confirma que permite búsquedas parciales y que retorne sólo el reparto y el título.
- Endpoint /trailer/:id
    - Se comprueba que retorne la URL del trailer y maneje correctamente los casos en que no haya trailer disponible.
    - Acá probe con 3.5 y deberían validar la Entrada entonces hay asegurarse de validar que el parámetro de ID sea un número entero antes de buscar en la base de datos y si los IDs son únicos.

## Archivo package.json:

- El archivo package.json contiene información sobre las dependencias del proyecto y los scripts disponibles, como start para iniciar el servidor

## Archivo .gitignore

- Se encuentra correcto.

## Entrega Puntual

- El proyecto es entregado dentro del plazo estipulado.


