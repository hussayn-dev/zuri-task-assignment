const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/task-ass')

const connectDB = (url) => {
    return mongoose.connect(url)
  }
  module.exports = connectDB