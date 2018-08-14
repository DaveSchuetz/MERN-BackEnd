const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const methodOverride = require('method-override')

const app = express()
app.use(methodOverride('_method'))
app.use(parser.json())
app.use(cors())


app.get('/list', (req, res) => {
  Todo.find()
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      console.log(err)
    })
})
app.post('/list', (req, res) => {
  Todo.create(req.body)
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/list/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      console.log(err)
    })
})




app.set('port', process.env.PORT || 3001)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })

