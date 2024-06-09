# Feedback sobre el Trabajo N1 Obligatorio, Equipo 2

## Evaluación General

## README.md

- Debería incluir una descripción del proyecto y cual es su objetivo.
- No se leen instrucciones claras sobre cómo configurar y ejecutar el proyecto.
- Los detalles sobre los endpoints disponibles y ejemplos de uso se podría usa código y ejemplos dentro de bloques de código para mejorar la legibilidad. Por ejemplo, utiliza tres comillas invertidas (```) para bloquear fragmentos de código o JSON.
- No posee información sobre cualquier dependencia y cómo instalarlas.

## Uso de Variables de Entorno

- Se evalua el uso de variables de entorno para la configuración del servidor y la ruta del archivo de datos correctamente.

## Archivo de Datos JSON

- Contiene correctamente los datos del catálogo de películas y series que la API maneja.

## Archivo server.js

- Dividir la declaración de constantes en varias líneas, línea 10, puede mejorar la legibilidad del código, especialmente cuando se tienen muchas importaciones o desestructuraciones. Le muestro cómo podrías dividir la declaración de constantes en varias líneas:

```javascript
const { 
    leerElementos, 
    filtrarElementosPorNombre, 
    filtrarElementosPorCategoria, 
    filtrarElementosPorReparto, 
    filtrarElementosPorId 
} = require('./trailerflix.manager');
```

Al dividir la declaración de constantes en varias líneas, cada constante se encuentra claramente separada, lo que facilita la lectura y el mantenimiento del código. Esto es especialmente útil cuando se trabaja con funciones o variables que se importan de otros archivos, ya que ayuda a identificar rápidamente qué se está utilizando en el archivo actual.

- Endpoint / (Raíz): Se verifica que existe una respuesta de bienvenida en formato texto plano o HTML.
- Endpoint /catalogo :Se comprueba que liste todo el contenido del archivo JSON.
- Endpoint /titulo/:title: Se asegura que permita búsquedas parciales y normalizadas por título.
- Endpoint /categoria/:cat
    -   Se verifica que liste el contenido según la categoría (serie o película).
- Endpoint /reparto/:act
    - Se confirma que permite búsquedas parciales y que retorne sólo el reparto y el título.
- Endpoint /trailer/:id
    - Se comprueba que retorne la URL del trailer y maneje correctamente los casos en que no haya trailer disponible.


## Archivo trailerflix.manager.js

- function filtrarElementosPorNombre(nombre)
    - Pondría un comentario más corto como por ejemplo  // Normalizar el título proporcionado.
- El código esté bien comentado pero resumiría los comentarios y la estructura está correcta.
- Tendría en cuenta identación y espacio en la línea 65

## Archivo package.json:

- El archivo package.json contiene información sobre las dependencias del proyecto y los scripts disponibles, como start para iniciar el servidor

## Entrega Puntual

- El proyecto es entregado dentro del plazo estipulado.


