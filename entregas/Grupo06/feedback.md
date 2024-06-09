# Feedback sobre el Trabajo N1 Obligatorio, Equipo 6

## Evaluación General

## README.md

- Empieza muy bien el readme pero luego parece que se repite todo lo mismo en Pasos, me gustaría que lo relean y corroboren esos pasos y también cambiaría el título, pasos ¿De ustedes? ¿Para la persona que usa el proyecto?
- Sobre la instalación: Utilizaría npm install para instalar todas las dependencias listadas en el package.json, esto no solo es más sencillo, sino que también asegura que todas las dependencias requeridas se instalen correctamente.
- Sobre estructura acomodaría bien los ítems

## Uso de Variables de Entorno

- Se evalua el uso de variables de entorno para la configuración del servidor y la ruta del archivo de datos correctamente.

## Archivo de Datos JSON

- Contiene correctamente los datos del catálogo de películas y series que la API maneja pero también tiene datos.json lo cual esa estructura no fue pedida, limpiaría lo que no es necesario.

## Carpeta SRC: Recomendaciones Específicas:
- Al tener los archivos de ayuda en src/helpers, se mejora la modularidad del código, lo que facilita su mantenimiento y reutilización, las felicito por esa decisión
- Concatenación de rutas: Están concatenando __dirname con process.env.TRAILERFLIX para obtener la ruta del archivo. Esto puede ser propenso a errores si process.env.TRAILERFLIX no comienza con una barra diagonal,opueden connsiderar usar path.join(__dirname, process.env.TRAILERFLIX) para construir la ruta de manera más segura y manejable.

## Archivo index.js

- dotenv.config(); debería estar antes de acceder a process.env.PORT para asegurarse de que todas las variables de entorno estén cargadas correctamen
- Prestar atención a la identación y los espacios de más.

- Endpoint / (Raíz): Se verifica que existe una respuesta de bienvenida en formato texto plano o HTML.

- Endpoint /catalogo :Se comprueba que liste todo el contenido del archivo JSON.
    - Uso de Sort: La función sort modifica el array original trailerflix, si no desean modificar el array original pueden utilizar slice() antes de sort() para trabajar con una copia.
    - Manejo de Errores: La verificación if (sortedByName.length === 0) debería hacerse antes de intentar ordenar para evitar operaciones innecesarias.
    - Convertir los títulos a minúsculas en cada comparación puede ser costoso en términos de rendimiento, pueden considerar normalizar los datos al cargar.
    - Status Codes: El uso de res.status(404) es correcto para manejar la falta de contenido pero debería ir acompañado de un return para evitar enviar múltiples respuestas.

- Endpoint /titulo/:title: Se asegura que permita búsquedas parciales y normalizadas por título.
    -  La conversión a minúsculas y el uso de trim() se realiza varias veces, lo cual es redundante y afecta el rendimiento.
    - Pueden comprobar si el parametro no está vacío antes de filtrar es una buena práctica igual se puede simplificar y combinar con la lógica de filtro.
    - Important! Respuesta Condicional: Utilizar un return después de enviar la respuesta para evitar que el código continúe ejecutándose.
    - La lógica puede ser más concisa al combinar el filtro y la respuesta en un solo paso, mejorando la legibilidad.

- Endpoint /categoria/:cat
    -   Se verifica que liste el contenido según la categoría (serie o película).

- Endpoint /reparto/:act
    - Se confirma que permite búsquedas parciales y que retorne sólo el reparto y el título.

- Endpoint /trailer/:id
    - Se comprueba que retorne la URL del trailer y maneje correctamente los casos en que no haya trailer disponible.


## Archivo file.maneger.js

- Pueden incluir el manejo de errores en la función write para capturar y manejar posibles fallos durante la escritura del archivo.
- Pueden verificar si el archivo existe antes de intentar leerlo para evitar errores inesperados.

## Archivo package.json:

- El archivo package.json contiene información sobre las dependencias del proyecto y los scripts disponibles, como start para iniciar el servidor

## Entrega Puntual

- El proyecto es entregado dentro del plazo estipulado.


