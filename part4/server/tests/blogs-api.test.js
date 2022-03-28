import supertest from 'supertest'
import mongoose from 'mongoose'
import app from '../app.js'

import Blog from '../models/Blog.js'

const api = supertest(app)

beforeEach(async () => {
  await Blog.deleteMany({})
})

describe('a valid blog can be added', () => {
  const blogs = {
    title: 'My Blog 3',
    author: 'Sindu Andita Pratama',
    url: 'http://facebook.com',
  }

  test('should first', async () => {
    await api
      .post('/api/blogs')
      .send(blogs)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    expect(response.body[0].id).toBeDefined()
  })
})

afterAll(() => {
  mongoose.connection.close()
})
