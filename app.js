const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/error')
const colors = require('colors')
const { connect } = require('mongoose')
const exphbs = require('express-handlebars')
const app = express()
const morgan = require('morgan')
const formatDate = require('./helpers/hbs.js')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const {log} = require('mercedlogger')
const cors = require('cors')


connectDB()
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))
// Handlebars
app.engine(
    '.hbs',
    exphbs.engine({
      helpers: {
        formatDate
      },
      defaultLayout: 'main',
      extname: '.hbs',
    })
  );
app.set('view engine', '.hbs');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    dbName: 'mydatabase',
    stringify: false,
  })
}));


app.use(errorHandler)

app.use('/', require('./routes/sightingRoutes.js'))


app.listen(port, () => console.log(`Server started on port ${port}`))