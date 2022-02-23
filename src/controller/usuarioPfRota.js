const Router = require('express')
const { signUp, signIn } = require('../service/usuarioPfService')

const usuarioPfRota = Router()

usuarioPfRota.post('/usuarioPfRota/signup', signUp)
usuarioPfRota.post('/usuarioPfRota/signin', signIn)

module.exports = usuarioPfRota
