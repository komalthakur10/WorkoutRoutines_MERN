require('dotenv').config() // For .env package/file to hide sensitive data from code
const express = require('express')
const workoutRoutes = require('./Routes/workout')

// Express App
const app = express()

// Middleware (fired for each request)
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workout', workoutRoutes)

// Listen To Requests
app.listen(process.env.PORT, () => {
    console.log("Listening on port 5000.")
})