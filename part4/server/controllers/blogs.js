import jwt from 'jsonwebtoken'
import Blog from '../models/Blog.js'
import User from '../models/User.js'

export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find().populate('user', { username: 1, name: 1 })

    res.json(blogs)
  } catch (error) {
    next(error)
  }
}

export const getBlog = async (req, res, next) => {
  const { id } = req.params
  try {
    const blog = await Blog.findById(id).populate('user', {
      username: 1,
      name: 1,
    })

    res.json(blog)
  } catch (error) {
    next(error)
  }
}

export const createBlog = async (req, res, next) => {
  const blog = req.body

  if (!(blog.url && blog.title)) {
    res.status(400).end()
  }

  try {
    const user = await User.findById(req.user.id)

    const createdBlog = await Blog.create({
      ...blog,
      user: user._id,
    })

    await User.findByIdAndUpdate(user._id, {
      blogs: [...user.blogs, createdBlog],
    })

    console.log(createdBlog)

    res.status(201).json(createdBlog)
  } catch (error) {
    next(error)
  }
}

export const deleteBlog = async (req, res, next) => {
  const { id } = req.params

  try {
    const tobeDeletedBlog = await Blog.findById(id).populate('user', {
      _id: 1,
    })

    const isAuthorized = req.user.id === tobeDeletedBlog.user._id.toString()

    if (!isAuthorized) {
      return res.status(401).json({ message: 'unauthorized user' })
    }

    await Blog.findByIdAndDelete(tobeDeletedBlog._id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
}

export const deleteBlogs = async (req, res, next) => {
  try {
    await Blog.deleteMany()
    res.send(204).end()
  } catch (error) {
    next(error)
  }
}

export const editBlog = async (req, res, next) => {
  const { id } = req.params
  const blog = req.body
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true })
    res.json(updatedBlog)
  } catch (error) {
    next(error)
  }
}
