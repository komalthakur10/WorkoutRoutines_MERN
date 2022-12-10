require('dotenv').config() // For .env package/file to hide sensitive data from code
// Importing required libraries
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./Routes/workout')
const userRoutes = require('./Routes/user')

// Express App
const app = express()

// Middleware (fired for each request)
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// Connect to DB 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // Listen To Requests
        app.listen(process.env.PORT, () => {
            console.log("*** Backend DB Server Started ***")
            console.log("Connected to DB and Listening on port", process.env.PORT)
        })

    })
    .catch((error) => {
        console.log(error)
    })

