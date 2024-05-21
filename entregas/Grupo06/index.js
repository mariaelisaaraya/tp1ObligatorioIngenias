const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

require("dotenv").config(); // Cargar variables de entorno

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("<html><body><h1>Bienvenid@s a HOME</h1></body></html>");
});

// ruta del archivo desde .env
const fileJson = process.env.FILESYSTEM;

function leerArchivo(file) {
  const data = fs.readFileSync(file, "utf8");
  return (jsonArray = JSON.parse(data));
}

try {
  leerArchivo(fileJson);
  console.log(jsonArray);

  app.get("/stock/:stock(\\d+)", (req, res) => {
    let stockNumber = parseInt(req.params.stock, 10);

    let totalStock = [];
    if (stockNumber !== 0) {
      let sumarStock = jsonArray.filter((el) => el.stock === stockNumber);

      totalStock = sumarStock;
    }

    totalStock.length > 0 ? res.json(totalStock) : res.json("no hay stock");
  });
} catch (error) {
  console.error("Error al leer o convertir el archivo JSON:", error);
}

try {
  leerArchivo(fileJson);

  app.get("/catalogo", (req, res) => {
    const datosSort = jsonArray.sort((a, b) => {
      if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
        return -1;
      }
      if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    res.json(datosSort);
  });
} catch (error) {
  console.error("Error al leer o convertir el archivo JSON:", error);
}

try {
  leerArchivo(fileJson);
  console.log(jsonArray);

  app.get("/nombre/:nombre", (req, res) => {
    let parametro = req.params.nombre.trim().toLowerCase();
    console.log("soy parametro", parametro);

    if (parametro !== "") {
      let resultado = [];

      for (let producto of jsonArray) {
        if (producto.nombre.toLowerCase().includes(parametro.toLowerCase())) {
          resultado.push(producto);
        }
      }
      if (resultado.length > 0) {
        res.json(resultado);
      } else {
        res.json("no hay coincidencia");
      }
    }
  });
} catch (error) {
  console.error("Error al leer o convertir el archivo JSON:", error);
}

app.get("*", (req, res) => {
  res.status(404).send("Lo siento, la página que buscas no existe.");
});
