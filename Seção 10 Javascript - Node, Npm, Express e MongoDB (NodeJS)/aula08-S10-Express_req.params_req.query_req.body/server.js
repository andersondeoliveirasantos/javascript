const express = require('express')
const app = express()

// http://facebook.com/profiles/12345:campanha=googleads&nome_campanha=master

app.get('/', (req, res) => {
  res.send(`
  <from action="/" mothod="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Enviar formulário</button>
  </from>
  `)
})

app.get('/testes/:idUsuarios', (req, res) => {
  console.log(req.params)
  res.send('Hi')
})

app.post('/', (req, res) => {
  res.send('Recebi o formulário')
})

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('Servidor executando na porta 3000')
})
