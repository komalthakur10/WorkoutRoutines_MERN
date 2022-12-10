const express = require ('express')
const { signupUser, loginUser } = require('../controllers/User_Controller')
const router = express.Router()

// Login Route
router.post('/login', loginUser)

// Signup Route
router.post('/signup', signupUser)

module.exports = router;