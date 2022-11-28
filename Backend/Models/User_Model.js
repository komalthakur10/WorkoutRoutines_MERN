const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Static Signup Method
userSchema.statics.signup = async function (email, password) {

    // Validation of email and password 
    // First Checking if email and password both given
    if ( !email || !password ) {
        throw Error("All Fields must be filled!")
    }
    // Checking if email is valid or give error
    if ( !validator.isEmail(email) ) {
        throw Error('Email is not Valid!')
    }
    // Checking if password is valid and strong password or give error
    if ( !validator.isStrongPassword(password) ) {
        throw Error('Password not strong enough')
    }

    // Checking if email already used then give custom error 
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error("Email already Used!")
    }

    // Hashing Passwords with salts (salts are random string genrated to get diffreent hash of even same passwords)
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // Saving in DB
    const user = await this.create({ email, password: hash })

    return user
}

module.exports = mongoose.model('User', userSchema)