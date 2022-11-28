const User = require('../Models/User_Model')
const jwt = require('jsonwebtoken')

// General JWT Token Logic
const createToken = (_id) => {
    return jwt.sign({ _id}, process.env.SECRET, { expiresIn: '3d' })
}


// Login User
const loginUser = async (req, res) => {
    res.json({ msg: 'Login User' })
}

// SignUp User
const signupUser = async (req, res) => {

    // Grabbing email and password from request
    const {email, password} = req.body
    // Actual SignUp Logic
    try {
        const user = await User.signup(email, password)

        // Create a Token to login automaticaly after creating a account
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { loginUser, signupUser }