const Router = require('express')
const usuarioPfRota = require('./controller/usuarioPfRota')

const rotas = Router()

rotas.use('/api', usuarioPfRota)
rotas.use((request, response) => {
  response.send(404)
})

module.exports = rotas
