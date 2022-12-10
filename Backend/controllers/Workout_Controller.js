// *** Handler Functions ***

const Workout = require('../Models/Workout_Model')
const mongoose = require('mongoose')

// To Get all workouts
const getWorkouts = async(req, res) => {
    const user_id = req.user._id
    const workouts = await Workout.find({ user_id }).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// To Get single workout
const getWorkout = async(req, res) => {
    // Grabbing ID from request
    const{ id } = req.params
    // Checking if given ID is Valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Workout Found!'})
    }
    const workout = await Workout.findById(id)
    // Handling if workout not found condition
    if(!workout){
        return res.status(404).json({error: 'No Such Workout Found!'})
    }
    res.status(200).json(workout)
}

// To create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    let emptyFields = []
    if (!title) {
        emptyFields.push('title')
    }
    if (!load) {
        emptyFields.push('load')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // Add Doc to DB
    try {
        const user_id = req.user._id
        const workout = await Workout.create({title, load, reps, user_id}) 
        res.status(200).json(workout)
    }
    catch(error) {
        res.status(400).json({error: error.message}) 
    }
}

// To Update new workout
const updateWorkout = async(req, res) => {
    // Grabbing ID from request
    const{ id } = req.params
    // Checking if given ID is Valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Workout Found!'})
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: 'No Such Workout Found!'})
    }
    res.status(200).json(workout)
}

// To Delete new workout
const deleteWorkout = async(req, res) => {
    // Grabbing ID from request
    const{ id } = req.params
    // Checking if given ID is Valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Workout Found!'})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    // Handling if workout not found condition
    if(!workout){
        return res.status(404).json({error: 'No Such Workout Found!'})
    }
    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}