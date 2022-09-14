// const mod1 = require('./mod1')
// const falaNome = mod1.falaNome

// console.log(nome, sobrenome)
// console.log(falaNome())

const path = require('path')
const axios = require('axios')
const { Pessoa } = require('./mod1')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then(response => console.log(response.data))
  .catch(e => console.log(e))
