import listHelper from '../utils/listHelper.js'

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
]

const listWithTwoBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 2,
    __v: 0,
  },
]

const listWithFiveBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 7,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Sindu A. Pratama',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 2,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Sindu A. Pratama',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 3,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Sindu A. Pratama',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
]

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    const totalLikes = listWithOneBlog[0].likes
    expect(result).toBe(totalLikes)
  })

  test('when list has two blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithTwoBlog)
    const totalLikes = listWithTwoBlog[0].likes + listWithTwoBlog[1].likes
    expect(result).toBe(totalLikes)
  })
})

describe('favourite blog', () => {
  test('when list has two blog, equals most favourites of that', () => {
    const result = listHelper.favoriteBlog(listWithTwoBlog)
    const { title, author, likes } = listWithTwoBlog[0]
    expect(result).toEqual({ title, author, likes })
  })
})

describe('most blogs', () => {
  test('when list has five blog, equals most blogs of that', () => {
    const result = listHelper.mostBlogs(listWithFiveBlog)
    const answer = { author: 'Sindu A. Pratama', blogs: 3 }
    expect(result).toEqual(answer)
  })
})

describe('most likes', () => {
  test('when list has five blog, equals most likes of that', () => {
    const result = listHelper.mostLikes(listWithFiveBlog)
    const answer = { author: 'Edsger W. Dijkstra', likes: 12 }
    expect(result).toEqual(answer)
  })
})
