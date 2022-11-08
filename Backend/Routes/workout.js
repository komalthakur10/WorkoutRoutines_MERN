// Workout Route Handler 

const express = require('express')
const router = express.Router()

// *** Handler Functions ***

// To Get all workout
router.get('/', (req, res) => {
    res.json({msg: 'Get all workouts'})
})
// To Get single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'Get a single workout'})
})
// To Post new workout
router.post('/:id', (req, res) => {
    res.json({msg: 'Post a new workout'})
})
// To Update new workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'Update a new workout'})
})
// To Delete new workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a new workout'})
})

module.exports = router