const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      authSource: 'admin',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    mongoose.set('debug', true)

    console.log(`MongoDB Connected Successfully: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB