import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div class="w-full max-w-xs m-auto">
        <div class="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="nome">
              Nome
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nome" type="text" placeholder="Nome" />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="senha">
              Senha
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="senha" type="password" placeholder="******************" />
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Logar
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Esqueceu sua Senha?
            </a>
          </div>
        </div>
        <p class="text-center text-gray-500 text-xs pt-4">
          &copy;2020 Guri Corp. Todos direitos reservados.
        </p>
      </div>
    )
  }
}

export default Login;