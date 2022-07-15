const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    mongoose.set('debug', true)

    mongoose.connection
    .on("open", () => log.green("DATABASE STATE", "Connection Open"))
    .on("close", () => log.magenta("DATABASE STATE", "Connection Open"))
    .on("error", (error) => log.red("DATABASE STATE", error))
    console.log(`MongoDB Connected Successfully: ${conn.connection.host}`)
    
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB