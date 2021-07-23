const express = require("express");
const app = express();
require('dotenv').config();


const port = process.env.PORT || 3000;

//Conexion a base de datos
const mongoose = require('mongoose');



const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.g6hmk.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))



// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


//middleware
app.use(express.static(__dirname + "/public"));

//Rutas de la aplicación
app.use("/", require("./Routes/routeSite"));

app.use("/mascotas", require("./Routes/mascotas"));

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