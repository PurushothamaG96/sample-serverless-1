const mongoose = require('mongoose')

//schema create
const UserSchema = mongoose.Schema({
    name: String,
    password: String
})

module.exports = mongoose.model('users', UserSchema)