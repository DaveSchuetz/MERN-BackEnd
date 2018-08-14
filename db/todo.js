const mongoose = require('./connection')
const Schema = mongoose.Schema

const Todo = new Schema({
    name:String,
    info: String,
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Todo', Todo)