# Feedback sobre el Trabajo N1 Obligatorio, Equipo 8

## Evaluación General

## README.md

- Pueden mejorar el readme haciendo capturas, explicando en detalle que hace cada endpoint, por favor lean el de otros equipos como para tener un ejemplo.

## Uso de Variables de Entorno

- Se evalua el uso de variables de entorno para la configuración del servidor y la ruta del archivo de datos correctamente.

## Archivo de Datos JSON

- Contiene correctamente los datos del catálogo de películas y series que la API maneja pero también tiene datos.json lo cual esa estructura no fue pedida, limpiaría lo que no es necesario.

## Archivo index.js y trailerflix.controlador.js

- Orden y Organización: Cargar las configuraciones de entorno y middlewares (como bodyParser) al inicio del archivo ayuda a mantener el código organizado y legible.
- Pueden definir const app = express(); después de cargar las configuraciones de entorno, estoy asegura que todas las variables de entorno están disponibles desde el principio.
- Lectura de Datos: Leer los datos de la base de datos en cada solicitud (app.use((req,res,next)=>{ DB = leerTrailerFlix(); next(); })) puede ser ineficiente, consideren leer los datos una vez y actualizar cuando sea necesario.
- Sobre el const en mi caso lo haría uno abajo del otro para la facilidad de la lectura.

- Endpoint / (Raíz): Se verifica que existe una respuesta de bienvenida en formato texto plano o HTML.

- Endpoint /catalogo :Se comprueba que liste todo el contenido del archivo JSON.
    - Pueden considerar paginar los resultados si la lista es muy larga para mejorar la eficiencia y la experiencia del usuario.

- Endpoint /titulo/:title: Se asegura que permita búsquedas parciales y normalizadas por título.
    - Manejo de Errores: El uso de == [] en la comparación no es tan efectivo, pueden considerar usar length === 0 para verificar si el resultado está vacío.

- Endpoint /categoria/:cat
    - Se verifica que liste el contenido según la categoría (serie o película).
    - Acá pueden mejorar la comparación: Utilizar resultadoPorCategoria.length === 0 en lugar de == [] para verificar si no se encontraron elementos.

- Endpoint /reparto/:act
    - Se confirma que permite búsquedas parciales y que retorne sólo el reparto y el título.
    - En el array en lugar de == [] pueden utilizar resultadoPorReparto.length === 0 para verificar si no se encontraron elementos en el resultado.
    - Pueden mejorar el manejo de errores proporcionando un mensaje claro cuando no se encuentran resultados y asegurando de que el resultado devuelto sea un array vacío en lugar de un objeto si no se encontraron elementos.

- Endpoint /trailer/:id
    - Se comprueba que retorne la URL del trailer y maneje correctamente los casos en que no haya trailer disponible.
    - Acá probe con 3.5 y deberían validar la Entrada entonces hay asegurarse de validar que el parámetro de ID sea un número entero antes de buscar en la base de datos y si los IDs son únicos, tienen que considerar utilizar find en lugar de filter para mejorar la eficiencia.


## Archivo package.json:

- El archivo package.json contiene información sobre las dependencias del proyecto y los scripts disponibles, como start para iniciar el servidor

## Archivo .gitignore

- Debería estar el package-lock.json

## Entrega Puntual

- El proyecto es entregado dentro del plazo estipulado.


