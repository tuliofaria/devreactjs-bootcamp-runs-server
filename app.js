const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json({ extended: true }))

const routes = require('./routes')
app.use(routes)

module.exports = app
