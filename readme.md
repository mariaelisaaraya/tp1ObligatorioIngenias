<<<<<<< HEAD
Rama de desarrollo dev

Rama de entrega final master


Grupo:

- Andrea Ayelén Diaz
- Daniela Soto
- Ana Santos
- Magalí Giles
=======

## 🆕 Fecha y Horario de Entrega

Lunes 27/05 a las 18hs

# 🏃‍♀️ Trabajo N1 Obligatoio

A partir de un set de datos en formato array de objetos, deberás crear una API rest para consultar diferente tipo de información que este contiene.

### El set de datos Trailerflix contiene información de películas y series, como ser:

- codigo
- titulo
- categoría
- reparto
- genero
- sinopsis
- trailer (URL con el link al video en Youtube)

Con toda esta información, deberás crear diferentes Endpoint que permitan consultar estos datos. Debes crear la estructura básica de un servidor web utilizando Express JS. Incluye el archivo .ENV donde debes almacenar en una variable de entorno con la ruta parcial + nombre del archivo de datos JSON, además del puerto de ejecución del servidor web.

- El archivo JSON debes guardarlo en una subcarpeta del proyecto llamada /database/
- El número de puerto del servidor web debe ser 3008
- Carga en una constante llamada TRAILERFLIX el contenido del archivo JSON en formato Array de objetos (usando fileSystem API + JSON.parse para obtener y transformar los datos)
- Crea un contenido en formato texto de bienvenida para la ruta raíz del proyecto “/”. El mensaje a mostrar puede ser texto plano, o contenido HTML. (Mejor si es este último)

### 👩🏻‍⚕️ Con la estructura base del proyecto ya desarrollada, deberás crear los endpoints necesarios para listar el catálogo de películas y series por diferentes posibles búsquedas.

- Crea un endpoint llamado /catalogo que liste todo el contenido de trailerflix JSON
- Crea un endpoint llamado /titulo/:title que liste el catálogo de películas y/o series que se aproxime al título enviado. (la búsqueda del nombre debe ser parcial)
- Crea un endpoint llamado /categoria/:cat que liste todo el contenido del archivo JSON de acuerdo a la categoría enviada como parámetro (serie o película)
- Crea un endpoint llamado /reparto/:act que liste el catálogo que incluya a la actriz o actor indicado por el nombre. (la búsqueda del nombre debe ser parcial)
- Crea un endpoint llamado /trailer/:id que retorne la URL del trailer de la película o serie. Si ésta no posee video asociado, que retorne un mensaje en formato JSON notificando la no disponibilidad del mismo.

### ⚙️ Recomendaciones:

1. Para el endpoint /catalogo debes retornar todo el contenido del archivo
2. Para el endpoint /titulo/:title deberás utilizar rutas dinámicas recibiendo como parámetro el título o parte de este, aplicando la función de orden superior .filter() junto al método .includes() y el método toUpperCase() o toLowerCase() para normalizar los textos de búsqueda correspondiente
3. Para el endpoint /categoria/:cat utiliza también .filter() y retorna todos los resultados encontrados. (Aquí son dos posibles valores solamente)
4. Para el endpoint /reparto/:act aplica también la misma lógica utilizada en el endpoint/titulo/:title. (Como resultado, retorna solo un array con la propiedad “reparto” y la propiedad “titulo” y sus respectivos datos (no devuelvas todo el contenido) ¿recuerdas a .map()?
5. Para el endpoint /trailer/:id debes retornar las propiedades “id”, “titulo”, “trailer”. (cuidado, porque no todas las películas/series poseen la propiedad tráiler, por lo tanto debes aplicar el operador de acceso condicional {objeto?.trailer})

## 🆕 Pull Request

Por favor utiliza Pull Request y ubicate en tu carpeta para realizar la subida de tu TP. Gracias! Si no pudiste realizar Tu PR deja tu proyecto copiado en el campus especificando rama que hay que leer, nombre del grupo. personas del grupo.



>>>>>>> cbf4daff7b54f9c941157200bf2496374f8d8db2
