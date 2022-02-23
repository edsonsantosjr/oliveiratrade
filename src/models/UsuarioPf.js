const mongoose = require('mongoose')

const UsuarioPf = new mongoose.Schema({
  nmUsuario: {
    type: String,
    require: true
  },
  nmCpf: {
    type: String,
    unique: true,
    require: true
  },
  nmSenha: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('usuarioPf', UsuarioPf)
