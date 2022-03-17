import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'

import personsRoutes from './routes/persons.js'
import infoRoutes from './routes/info.js'
import { unknownEndpoint, errorHandler } from './middleware.js'

const app = express()
app.use(express.json())
app.use(cors())

morgan.token('body', (req, res) => {
  return `REQ:${JSON.stringify(req.body)}`
})
app.use(morgan(':method :url :status :total-time :body'))

app.use(express.static('build'))

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log('Connected with mongodb')
})

app.use('/api/persons', personsRoutes)
app.use('/info', infoRoutes)
app.use(errorHandler)
app.use(unknownEndpoint)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
