import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const createUser = async (req, res) => {
  const { password, username, name } = req.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const createdUser = await User.create({ username, name, passwordHash })

  res.status(201).json(createdUser)
}

export const getUser = async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id).populate('blogs', {
    title: 1,
    author: 1,
    url: 1,
  })

  res.json(user)
}
