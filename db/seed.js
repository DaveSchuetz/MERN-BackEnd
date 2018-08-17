const Todo = require('./todo')
const mongoose = require('./connection')
mongoose.Promise = Promise

Todo.find({}).remove(() =>{
    Todo.create({
        name: "Groceries",
        info: "Tomatoes, Sausage, Pasta, Paper Towels, Mushrooms"
    })
    Todo.create({
        name: "Make Dinner",
        info: "Pasta with sausage, mushrooms and tomato"
    })
})