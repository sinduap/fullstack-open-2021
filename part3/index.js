import express from 'express'

const app = express()
app.use(express.json())

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2022-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2022-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2022-05-30T19:20:14.298Z',
    important: true,
  },
]

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(note => note.id)) : 0

  return maxId + 1
}

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
  const id = Number.parseInt(req.params.id)
  const note = notes.find(note => note.id === id)
  if (!note) {
    return res.status(404).send('No id found')
  }
  res.json(note)
})

app.post('/api/note', (req, res) => {
  const body = req.body
  console.log(body)
  if (!body.content) {
    return res.status(404).json({ error: 'content missing' })
  }

  const newNote = {
    id: generateId(),
    content: body.content,
    important: body.important || false,
    date: new Date(),
  }

  notes = [...notes, newNote]

  console.log(notes)
  res.json(notes)
})

app.delete('/api/notes/:id', (req, res) => {
  const id = Number.parseInt(req.params.id)
  const note = notes.find(note => note.id === id)
  if (!note) {
    return res.status(404).send('No id found')
  }
  notes = notes.filter(note => note.id !== id)
  res.status(204).send(`Post ${id} has been successfully deleted`)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
