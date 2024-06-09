# Feedback sobre el Trabajo N1 Obligatorio, Equipo 4

## Evaluación General

## README.md

- Excelente descripción del equipo en dónde incluye información de cada alumna, recomendación: Si el github lo tienen sin tanta información puede redirigir el link a linkedin.
- Excelente descripción de Contenidos
- Excelente descripción de Endpoints
- Excelente instrucciones para ejecutar el código
- Perfecto uso de refuerzo con capturas.

## Uso de Variables de Entorno

- Se evalua el uso de variables de entorno para la configuración del servidor y la ruta del archivo de datos correctamente.

## Archivo de Datos JSON

- Contiene correctamente los datos del catálogo de películas y series que la API maneja.

## Carpeta SRC: Recomendaciones Específicas:
- Reorganizar trailerflix.controller.js: Se puede mover trailerflix.controller.js a una nueva carpeta llamada controllers dentro de src. Esto mejora la claridad y la separación de responsabilidades dentro del proyecto.

```plaintext
├── .env
├── .gitignore
├── index.js
├── package.json
├── README.md
└── src
    ├── controllers
    │   └── trailerflix.controller.js
    ├── database
    │   └── trailerflix.json
    └── images
        └── (imágenes del README)
```

## Archivo index.js

- Dividir la declaración de constantes en varias líneas puede mejorar la legibilidad del código, especialmente cuando se tienen muchas importaciones o desestructuraciones. Le muestro cómo podrías dividir la declaración de constantes en varias líneas:

```javascript
const { 
    leerTrailerflix, 
    obtenerTrailerPorId, 
    obtenerTitulo, 
    obtenerCategorias, 
    obtenerReparto 
} =  require('./src/trailerflix.controller');

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

- Conversión de Datos en leerTrailerflix() 
    - Conversión de tags y reparto a arrays:Se podría optimizar utilizando un solo forEach para hacer todas las conversiones de una vez, mejorando así la eficiencia del código.

Por ejemplo en lugar de utilizar múltiples forEach loops, podrían combinar las transformaciones en uno solo, lo cual no solo reduce la cantidad de ciclos, sino que también agrupa lógicamente las transformaciones que se aplican a cada objeto en el array. Esto podría mejorar el rendimiento y la legibilidad del código.

// Feedback para la función obtenerReparto

- Normalización de Parámetros: Se puede normalizar tanto `param` como los valores de `reparto` a minúsculas para asegurar que la búsqueda sea insensible a mayúsculas.

- Uso de Variables Temporales: Se podría usar variables temporales para almacenar resultados intermedios, lo cual puede mejorar la legibilidad del código.

Ejemplo de código optimizado (en texto):
```plaintext
const obtenerReparto = (param, DB) => {
    const normalizedParam = param.trim().toLowerCase();
    
    const result = DB.filter(item => 
        item.reparto.some(reparto => 
            reparto.toLowerCase().includes(normalizedParam)
        )
    ).map(item => ({
        titulo: item.titulo,
        reparto: item.reparto
    }));

    return result;
}
```

## Archivo package.json:

- El archivo package.json contiene información sobre las dependencias del proyecto y los scripts disponibles, como start para iniciar el servidor

## Entrega Puntual

- El proyecto es entregado dentro del plazo estipulado.


