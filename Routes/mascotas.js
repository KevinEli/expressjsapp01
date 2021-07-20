const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: "1", nombre:"Rex", descripcion:"descripción de mascotas Rex"},
            {id: "2", nombre:"Toto", descripcion:"descripción de mascotas Toto"},
            {id: "3", nombre:"Brandy", descripcion:"descripción de mascotas Brandy"}
        ]
    });
});


module.exports = router;