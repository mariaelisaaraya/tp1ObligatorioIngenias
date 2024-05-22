# TrailerFlix

## Instrucciones para Ejecutar el Código

1. Clonar el repositorio
2. Instalar dependencias: npm install
3. Ejecutar la aplicación: npm start

## Descripción de Endpoints

### Endpoint `/catalogo`

Este endpoint devuelve una lista de todo el contenido disponible en el catálogo.

### Endpoint `/titulo/:title`

Este endpoint devuelve una lista de películas y/o series que se aproximan al título enviado como parámetro. Realiza una búsqueda parcial, lo que significa que encuentra coincidencias incluso si solo se proporciona parte del título.

### Endpoint `/categoria/:cat`

Este endpoint devuelve todo el contenido del catálogo que corresponde a la categoría enviada como parámetro. Las categorías pueden ser "serie" o "película".

### Endpoint `/reparto/:act`

Este endpoint devuelve una lista del catálogo que incluye al actor o actriz indicado por el nombre enviado como parámetro. Realiza una búsqueda parcial del nombre, lo que significa que encuentra coincidencias incluso si solo se proporciona parte del nombre del actor o actriz.

### Endpoint `/trailer/:id`

Este endpoint devuelve la URL del tráiler de la película o serie correspondiente al ID proporcionado como parámetro. Si la película o serie no tiene un video asociado, devuelve un mensaje notificando la no disponibilidad del mismo.

Grupo:

- Silvina Figueroa
- Daniela Ramírez
- Rocio Ibañez
- Amaranta Villegas
