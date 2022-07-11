const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/error')
const colors = require('colors')
const { connect } = require('mongoose')
const exphbs = require('express-handlebars')
const hbs = require('hbs')
const app = express()
const morgan = require('morgan')

connectDB()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// Handlebars
app.engine(
    '.hbs',
    exphbs.engine({
      defaultLayout: 'main',
      extname: '.hbs',
    })
  );
  app.set('view engine', '.hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat'))
app.use(errorHandler)

app.use('/', require('./routes/sightingRoutes.js'))

app.listen(port, () => console.log(`Server started on port ${port}`))