const express = require("express");
//filesystem lee content json//
const path = require("path");
const dotenv = require("dotenv");
//promises hace el codigo mas prolijo//
const fs = require("fs").promises;
const bodyParser = require("body-parser");
//cargo las variables de entorno (.env)//
dotenv.config();
const app = express();
const port = process.env.PORT || 3008;

//verifico que exista data_path
if (!process.env.data_path) {
  console.error("data path is not defined");
  process.exit(1);
}

//directorio//
const data_path = path.resolve(__dirname, process.env.data_path);
// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname)));
//cargo los datos y el server//
const startServer = async () => {
  let trailerFlix;
  try {
    const fileContent = await fs.readFile(data_path, "utf-8");
    trailerFlix = JSON.parse(fileContent);
  } catch (err) {
    console.error("error al cargar archive json", err);
    process.exit(1);
  }

  //middleware//
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //ruta raiz
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  //endpoint que lista todo el catalogo
  app.get("/catalogo", (req, res) => {
    res.json(trailerFlix);
  });

  //endpoint que busca por titulo
  app.get("/titulo/:title", (req, res) => {
    const { title } = req.params;
    const result = trailerFlix.filter((item) =>
      item.titulo.toLowerCase().includes(title.toLowerCase())
    );
    res.json(result);
  });

  //endpoint que busca por categoria
  app.get("/categoria/:cat", (req, res) => {
    const { cat } = req.params;
    const result = trailerFlix.filter(
      (item) => item.categoria.toLowerCase() === cat.toLowerCase()
    );
    res.json(result);
  });

  //endpoint que busca por reparto
  app.get("/reparto/:act", (req, res) => {
    const { act } = req.params;
    const actorBuscado = act.toLowerCase().trim();
    console.log("actor buscado:", actorBuscado);
    const result = trailerFlix.filter((item) => {
      //hago la cadena de reparto en un array de actores
      const actores = item.reparto
        .split(",")
        .map((actor) => actor.trim().toLowerCase());
      console.log("reparto de la película:", actores);
      //verifico si el actor buscado esta en el reparto de la película
      return actores.includes(actorBuscado);
    });
    console.log("resultados:", result);
    const resultWithActors = result.map((item) => ({
      titulo: item.titulo,
      //devuelvo el reparto como un array de actores
      reparto: item.reparto.split(",").map((actor) => actor.trim()),
    }));
    res.json(resultWithActors);
  });
  //endpoint que obtiene trailer por ID
  app.get("/trailer/:id", (req, res) => {
    const { id } = req.params;
    const result = trailerFlix.find((item) => item.id == id);
    if (result && result.trailer) {
      res.json({
        id: result.id,
        titulo: result.titulo,
        trailer: result.trailer,
      });
    } else {
      res.json({ mensaje: "trailer no disponible" });
    }
  });

  //puerto//
  app.listen(port, () => {
    console.log(`server corriendo en http://localhost:${port}`);
  });
};

//inicio el server//
startServer();
