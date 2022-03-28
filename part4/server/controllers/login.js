import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/User.js'

export const login = async (req, res, next) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }

    const isPassword = await bcrypt.compare(password, user.passwordHash)

    if (!isPassword) {
      return res.status(404).json({ message: 'invalid password' })
    }

    const userTobeSigned = {
      username: user.username,
      name: user.name,
      id: user._id,
    }

    const token = jwt.sign(userTobeSigned, 'supersecret')

    res.json({ ...userTobeSigned, token })
  } catch (error) {
    next(error)
  }
}
