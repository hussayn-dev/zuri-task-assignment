require('dotenv').config();
const express = require('express')
const taskRouter = require('./routes/task')
const {errorHandler, notFound} = require('./middleware/error-handler')
const connectDB = require('./config/db')
const app = express()

app.use(express.json())
app.use('/api/v1/task', taskRouter)



app.use([errorHandler, notFound])
const port = process.env.PORT || 4500
app.listen(port, async () => {
    await connectDB(process.env.MONGO_URL)
    console.log(`app is running on port ${port}`)
})