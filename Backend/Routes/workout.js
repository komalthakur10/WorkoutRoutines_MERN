// Workout Route Handler 

const express = require('express')

const { createWorkout, 
        getWorkout,
        getWorkouts,
        deleteWorkout,
        updateWorkout
} = require('../controllers/Workout_Controller')

const requireAuth = require('../Middleware/requireAuth')

const router = express.Router()

// Require Auth for all workout routes
router.use(requireAuth)

// To Get all workout
router.get('/', getWorkouts)

// To Get single workout
router.get('/:id', getWorkout)

// To Post new workout
router.post('/', createWorkout)

// To Update new workout
router.patch('/:id', updateWorkout)

// To Delete new workout
router.delete('/:id', deleteWorkout)

module.exports = router