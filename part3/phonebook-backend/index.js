import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { unknownEndpoint, errorHandler } from './middleware.js'
import 'dotenv/config'
import Person from './models/Person.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(cors())

morgan.token('body', req => {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :total-time :body'))
app.use(express.static('build'))
mongoose.connect(process.env.MONGODB_URI)

let data = []

app.get('/api/persons', async (req, res) => {
  data = await Person.find()
  res.status(201).json(data)
})

app.get('/api/persons/:id', (req, res) => {
  const { id } = req.params
  const person = data.find(person => person.id === id)
  if (!person) {
    return res.status(404).send('No id found')
  }
  res.status(201).json(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const { id } = req.params
  const person = data.find(person => person.id === id)

  if (!person) {
    return res.status(404).send('No person with that id')
  }
  data = data.filter(person => person.id !== id)
  res.status(201).json({ id })
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  const person = data.find(person => person.name === body.name)
  if (!body.name || !body.number) {
    return res.status(404).json({ error: 'The name or number is missing' })
  }

  if (person) {
    return res.status(404).json({ error: 'Name must be unique' })
  }
  const newPerson = {
    name: body.name,
    number: body.number,
    id: Math.trunc(Math.random() * 100000),
  }

  data = [...data, newPerson]

  res.status(201).json(newPerson)
})

app.put('/api/persons/:id', (req, res) => {
  const updatedPerson = req.body
  if (!updatedPerson) {
    return res.status(404).json({ error: 'No data' })
  }

  const { id } = updatedPerson
  data = data.filter(person => person.id !== id)
  data = [...data, updatedPerson]

  res.status(201).json(updatedPerson)
})

app.get('/info', (req, res) => {
  const response = `<p>Phonebook has info for ${
    data.length
  } people</p><p>${new Date()}</p>`
  res.status(201).send(response)
})

app.use(errorHandler)
app.use(unknownEndpoint)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
