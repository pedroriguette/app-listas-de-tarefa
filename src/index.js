const path = require('node:path')
const express = require('express')
const router = require('./routes')


const app = express()

// Configurações do EJS
app.set('view engine', 'ejs')
app.set()