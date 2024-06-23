# Feedback sobre el Trabajo N1 Obligatorio, Equipo 1

## Evaluación General

## README.md

- Me encanta el readme y la organización del mismo. Excelentemente explicado con la imagen y su presentación, el about en ingles también excelente, recomendaría que lo agreguen en español. Que herramientas se utilizan agregado y muy bien. Sobre la instalación en vez de escribir "recomendaciones" pueden agregar directamente "instalación", muy bien explicado y detallado. Muy bien los endpoints para saber que se espera. El final con cada integrante del equipo es excelente, pueden ir directo a su linkedIn si están en busqueda laboral activa.

## Uso de Variables de Entorno

- Se evalua el uso de variables de entorno para la configuración del servidor y la ruta del archivo de datos correctamente.

## Archivo de Datos JSON

- Contiene correctamente los datos del catálogo de películas y series que la API maneja pero también tiene datos.json lo cual esa estructura no fue pedida, limpiaría lo que no es necesario.

## Archivo server.js y trailerflixControlador.js

- Separación de configuraciones y middleware: El código en server.js está organizado adecuadamente, primero configurando dotenv, luego Express y finalmente el middleware, lo que mejora la legibilidad y mantenibilidad.
- Inicialización de base de datos: La inicialización de DB en cada solicitud puede ser ineficiente si la base de datos no cambia con frecuencia pueden considerar cargarla una vez al inicio si los datos son estáticos.
- Nombres de funciones descriptivos: Los nombres de las funciones importadas son muy claros y descriptivos, facilitando la comprensión de su propósito sin necesidad de ver su implementación.
- En general, el código está bien estructurado y sigue buenas prácticas de desarrollo.
- Pueden definir const app = express(); después de cargar las configuraciones de entorno, estoy asegura que todas las variables de entorno están disponibles desde el principio.
- Lectura de Datos: Leer los datos de la base de datos en cada solicitud (app.use((req,res,next)=>{ DB = leerTrailerFlix(); next(); })) puede ser ineficiente, consideren leer los datos una vez y actualizar cuando sea necesario.
- Endpoint / (Raíz): Se verifica que existe una respuesta de bienvenida en formato texto plano o HTML.
- Endpoint /catalogo :Se comprueba que liste todo el contenido del archivo JSON.
    - Pueden considerar paginar los resultados si la lista es muy larga para mejorar la eficiencia, también corroboren el orden del resultado, la misma devuelve random, ej empieza por el ID 88.
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

- Debería estar el package-lock.json

## Entrega Puntual

- El proyecto es entregado dentro del plazo estipulado.


