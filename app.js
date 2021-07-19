const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


//middleware
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { titulo: "Titulo Dinámico Ejs" });
});

app.get("/servicios", (req, res) => {
    res.render("servicios", { tituloServicios: "Titulo Dinámico desde Servicios" });
  });

app.use((req, res, next) => {
   // res.status(404).send("Sorry cant find that!");
   res.status(404).render("404",{
     titulo: "404",
     descripcion: "Página 404"
   });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});