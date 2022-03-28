import express from 'express'
import {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlogs,
  deleteBlog,
  editBlog,
} from '../controllers/blogs.js'
import middlewares from '../utils/middlewares.js'

const blogRouter = express.Router()

blogRouter.get('/', getBlogs)
blogRouter.get('/:id', getBlog)
blogRouter.post('/', middlewares.userExtractor, createBlog)
blogRouter.delete('/', deleteBlogs)
blogRouter.delete('/:id', deleteBlog)
blogRouter.patch('/:id', editBlog)

export default blogRouter
