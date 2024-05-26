const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const { read } = require("./src/helpers/file.manager");
const PORT = process.env.PORT || 3008;
let trailerflix = [];

/*    MIDLEWARE     */
dotenv.config(); // Cargar variables de entorno
app.use(bodyParser.json());
app.use((req, res, next) => {
  try {
    trailerflix = read();
    next();
  } catch (error) {
    error.message = `Error al leer el archivo JSON: ${error.message}`;
    res.status(500).send(error.message);
  }
});

/*    WEB SERVER     */
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

/*    ENDPOINTS     */
app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("<html><body><h1>Bienvenid@s a HOME</h1></body></html>");
});

// Endpoint GET para listar todos los contenidos
app.get("/catalogo", (req, res) => {
  const sortedByName = trailerflix.sort((a, b) => {
    if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) {
      return -1;
    }
    if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  if (sortedByName.length === 0) {
    res.status(404).json({ error: "Error 404", description: "No hay contenido disponible" });
  }

  res.status(200).json(sortedByName);
  
});

app.get("/titulo/:titulo", (req, res) => {
  let parametro = req.params.titulo.trim().toLowerCase();

  let totalTitles = [];
  if (parametro !== "") {
    const total = trailerflix.filter(catalogo =>
      catalogo.titulo.trim().toLowerCase()
        .includes(parametro.trim().toLowerCase()));

    totalTitles = total;
  }

  totalTitles.length > 0 ? res.status(200).json(totalTitles) : 
    res.status(404).json({error: 'Error 404', description:`No se encontraron resultados para ${parametro}`});
});


// Endpoint GET para obtener un contenido por su categoria
app.get("/categoria/:cat", (req, res) => {
  const { cat } = req.params;
  const validCategories = ["serie", "pelicula"];

  if (!validCategories.includes(cat.toLowerCase())) {
    return res.status(400).send("Categoría no válida. Debe ser 'serie' o 'pelicula'.");
  }

  const filteredContent = trailerflix.filter(item => item.categoria.toLowerCase() === cat.toLowerCase());
  res.status(200).json(filteredContent);
});

// Endpoint GET para obtener un contenido por los actores que participan
app.get("/reparto/:act", (req, res) => {
  const repartoByAct = trailerflix.filter(catalogo =>
    catalogo.reparto.trim().toLowerCase()
      .includes(req.params.act.trim().toLowerCase()))
      .map(catalogo =>({
        id: catalogo.id,
        titulo: catalogo.titulo,
        reparto: catalogo.reparto
      }));
  
  if (repartoByAct.length > 0) {
    res.status(200).json(repartoByAct)
  } else {
    res.status(404).json({error: 'Error 404', description: `No se encontraron resultados para ${req.params.act}`});
  }
});


//Endpoint GET para obtener un contenido por el trailer
app.get("/titulo:title", (req, res) =>{
  const id = parseInt(req.params.id);
  const trailerId = trailerflix.filter(catalogo => catalogo.trailer(req.params.trailer))
  .maps(catalogo => ({
    id : catalogo.id,
    titulo : catalogo.titulo,
    trailer : catalogo.trailer 
  }));
   
  trailerId.lenght>0?res.status(200).json(trailerId):
  res.status(404).json({error:'Error 404', descrpcion:`No se encontraron resultados para ${ parámetro } `})
  res.status(400).send("NO IMPLEMENTADO");
  });

//Endpoint NOT FOUND
app.get("*", (req, res) => {
  res.status(404).send("Lo siento, la página que buscas no existe.");
});