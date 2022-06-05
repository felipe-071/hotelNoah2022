var express = require('express');
var router = express.Router();
const {body, validationResult} = require("express-validator");

router.get("/", (req, res) => {
    res.render("pages/index")
});

router.get("/cadastro-login", (req,res)=>{
    res.render("pages/cadastro-login", {"errors": null, "valores": {"nome":"", "sobrenome": "", "telefone":"", "celular":"", "email":"", "cpf":"",
        "select":"", "cidade":"", "rua": "", "casa-apto":""}})
});

router.get("/reserva", (req,res)=>{
    res.render("pages/reserva")
});

router.post("/cadastro-login", 

    body("nome").isLength({min: 2, max: 30}),
    body("sobrenome").isLength({min: 2, max: 30}),
    body("telefone").isLength({min: 2, max: 30}),
    body("celular").isLength({min: 2, max: 30}),
    body("email").isEmail(),
    body("cpf").isLength({min: 11, max: 14}),
    /*select??*/
    body("cidade").isLength({min: 15, max: 40}),
    body("rua").isLength({min: 10, max: 70}),
    body("rua").isLength({min: 1, max: 3}),

    function (req,res){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log(errors);
            return res.render("pages/cadastro-login", {"errors": errors, "valores": req.body});
        }
    console.log(req.body)
});



module.exports = router;