import express from 'express'
import { createUser, getUser } from '../controllers/users.js'

const usersRouter = express.Router()

usersRouter.post('/', createUser)
usersRouter.get('/:id', getUser)

export default usersRouter
