//importando o arquivo conexão que criamos na pasta config
require('./config/conexao')
const express = require('express')
const app = express()
const port = 3000

//utilizar arquivos no formato json
app.use(express.json())

//criando uma variavel para armazenar todas as rotas definidas no arquivo rotas.js
const rotasContas = require('./rotas')
//para todas as rotas vindas ou definidas no arquivo rotas.js, deve ser considerado o caminho /contas
app.use('/contas', rotasContas)

app.listen(port, ()=>{
    console.log("servidor on")
})