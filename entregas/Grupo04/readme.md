# Trabajo N° 1 Obligatorio: TrailerFlix
## Grupo 4:

* Silvina Figueroa
* Daniela Ramírez
* Rocio Ibañez
* Amaranta Villegas

## Instrucciones para Ejecutar el Código

1. Clonar el repositorio

2. Instalar dependencias:
    ```npm install```
3. Ejecutar la aplicación:
    ```npm start```

## Descripción de Endpoints

### Endpoint `/catalogo`

Este endpoint devuelve una lista de todo el contenido disponible en el catálogo.

P.S: Para probar este endpoint en el navegador usa la siguiente ruta:

```http://localhost:3008/api/catalogo```

### Endpoint `/titulo/:title`

Este endpoint devuelve una lista de películas y/o series que se aproximan al título enviado como parámetro. Realiza una búsqueda parcial, lo que significa que encuentra coincidencias incluso si solo se proporciona parte del título.

P.S: Para probar este endpoint en el navegador usa la siguiente ruta, reemplazando ```:titulo``` por el titulo que desea buscar:

```http://localhost:3008/api/titulo/:titulo```


### Endpoint `/categoria/:cat`

Este endpoint devuelve todo el contenido del catálogo que corresponde a la categoría enviada como parámetro. Las categorías pueden ser "serie" o "película".

P.S: Para probar este endpoint en el navegador usa la siguiente ruta, reemplazando ```:cat``` por la seria o película que desea busca.

```http://localhost:3008/api/categoria/:cat```

### Endpoint `/reparto/:act`

Este endpoint devuelve una lista del catálogo que incluye al actor o actriz indicado por el nombre enviado como parámetro. Realiza una búsqueda parcial del nombre, lo que significa que encuentra coincidencias incluso si solo se proporciona parte del nombre del actor o actriz.

P.S: Para probar este endpoint en el navegador usa la siguiente ruta, reemplazando ```:act``` por el actor o actriz que desea buscar.

```http://localhost:3008/api/reparto/:act```

### Endpoint `/trailer/:id`

Este endpoint devuelve la URL del tráiler de la película o serie correspondiente al ID proporcionado como parámetro. Si la película o serie no tiene un video asociado, devuelve un mensaje notificando la no disponibilidad del mismo.

P.S: Para probar este endpoint en el navegador usa la siguiente ruta, reemplazando ```:id``` por el id que desea buscar.

```http://localhost:3008/api/trailer/:act```

