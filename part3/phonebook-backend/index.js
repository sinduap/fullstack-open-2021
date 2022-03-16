import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

morgan.token('body', req => {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :total-time :body'))

app.use(express.static('build'))

let data = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
]

app.get('/api/persons', (req, res) => {
  res.json(data)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number.parseInt(req.params.id)
  const person = data.find(person => person.id === id)
  if (!person) {
    return res.status(404).send('No id found')
  }
  res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number.parseInt(req.params.id)
  const person = data.find(person => person.id === id)

  if (!person) {
    return res.status(404).send('No person with that id')
  }
  data = data.filter(person => person.id !== id)
  res.json({ id })
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

  res.json(newPerson)
})

app.put('/api/persons/:id', (req, res) => {
  const updatedPerson = req.body
  if (!updatedPerson) {
    return res.status(404).json({ error: 'No data' })
  }

  const id = Number.parseInt(updatedPerson.id)
  data = data.filter(person => person.id !== id)
  data = [...data, updatedPerson]

  return res.json(updatedPerson)
})

app.get('/info', (req, res) => {
  const response = `<p>Phonebook has info for ${
    data.length
  } people</p><p>${new Date()}</p>`
  res.send(response)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
