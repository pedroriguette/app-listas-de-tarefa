const path = require('node:path')
const express = require('express')
const router = require('./routes')


const app = express()

// Configurações do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuração de arquivos estaticos
app.use(express.static('public'))

// Configuração para ler dados da requisição
app.use(express.urlencoded({ extended: true }))

// Rotas da aplicação 
app.use(router)

const PORT = 3000

app.listen(PORT, () => console.log(`Iniciando em: http://localhost:${PORT}`))