const express = require('express')
const mongoose = require('mongoose')
const routes = require('./rotas')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  console.warn('Servidor iniciado.')
})

mongoose
  .connect('mongodb://localhost:27017/oliveiratrade', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.warn('Servidor do mongo db iniciou.')
  })
  .catch(erro => {
    console.warn('Erro ao conectar com o banco de dados: ' + erro)
  })
