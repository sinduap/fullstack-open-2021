import express from 'express'
import mongoose from 'mongoose'
import config from './utils/config.js'
import middlewares from './utils/middlewares.js'
import blogsRouter from './routes/blogs.js'
import usersRouter from './routes/users.js'
import logger from './utils/logger.js'
import loginRouter from './routes/login.js'

logger.info(`connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI, () => {
  logger.info(`connected on ${config.MONGODB_URI}`)
})

const app = express()

app.use(express.json())
app.use(middlewares.tokenExtractor)
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)
app.use('/api/blogs', blogsRouter)
app.use(middlewares.errorHandler)
app.use(middlewares.unknownEndpoint)

export default app
