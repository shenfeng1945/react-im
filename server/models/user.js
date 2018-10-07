const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
   username: String,
   avatar: String,
})

module.exports = mongoose.model('User',userSchema);