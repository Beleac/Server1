const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
username: {
type: String,
required: [true, 'Please Enter a Username']
},
created: {
type: Date,
required: [true, 'Created date is required']
}
})

module.exports = userSchema