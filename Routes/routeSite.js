const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("index", { titulo: "Titulo Dinámico Ejs" });
});

router.get("/servicios", (req, res) => {
    res.render("servicios", { tituloServicios: "Titulo Dinámico desde Servicios" });
});

module.exports = router;