const express = require('express'); //Requisição do express
const app = express(); //Uso do express
const port = 3000; //Estabelecimento da porta do servidor

app.use(express.static('app/public')); //Comando para o express usar arquivos estáticos dentro da pasta app/public

app.set('view engine', 'ejs'); //Comando para usar a view engine "ejs"
app.set('views', './app/views'); //Configurando o caminho para a pasta de views, onde o ejs atuará

app.use(express.json());
app.use(express.urlencoded({extended: true}));

var rotas = require('./app/routes/router');
app.use('/', rotas);

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
});