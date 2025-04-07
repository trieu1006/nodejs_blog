const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

// route news
const route = require('./routes')

// body parser
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// static file
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Routes init
route(app) // gọi function route truyền express app vào -> express sẽ là file index

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})