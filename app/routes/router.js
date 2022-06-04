var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/index")
});

router.get("/cadastro-login", (req,res)=>{
    res.render("pages/cadastro-login")
});

router.get("/reserva", (req,res)=>{
    res.render("pages/reserva")
});

module.exports = router;