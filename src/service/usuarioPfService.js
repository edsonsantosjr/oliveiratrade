const UsuarioPf = require('../models/UsuarioPf')

const signUp = async (request, response) => {
  try {
    const { nmUsuario, nmCpf, nmSenha } = request.body

    const usuarioPf = await new UsuarioPf({
      nmUsuario,
      nmCpf,
      nmSenha
    }).save()

    return response.status(201).json({
      mensagem: 'Usuário PF criado com sucesso.',
      usuarioPf: {
        _id: usuarioPf._id,
        nmUsuario: usuarioPf.nmUsuario
      }
    })
  } catch (e) {
    console.error('Erro ao inserir usuarioPf: ' + e)
  }
}

const signIn = async (request, response) => {
  try {
    const { nmCpf, nmSenha } = request.body

    const usuarioPf = await UsuarioPf.findOne().where({ nmCpf, nmSenha })
    console.log(usuarioPf)
    if (!usuarioPf) {
      return response.status(401).json({ mensagem: 'Usuário não encontrado.' })
    }
    return response.status(200).json({
      mensagem: 'Usuário logado.',
      usuarioPf: {
        _id: usuarioPf._id,
        nmUsuario: usuarioPf.nmUsuario
      }
    })
  } catch (e) {
    console.error('Erro ao inserir usuarioPf: ' + e)
  }
}

exports.signUp = signUp
exports.signIn = signIn
