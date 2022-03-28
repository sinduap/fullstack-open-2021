const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((acc, curr) => acc + curr.likes, 0)
}

const favoriteBlog = blogs => {
  const favoriteBlog =
    blogs.length === 0
      ? null
      : blogs.reduce((acc, curr) => {
          return (acc.likes || 0) < curr.likes ? curr : acc
        }, {})
        
  const { title, author, likes } = favoriteBlog
  return { title, author, likes }
}

const mostBlogs = blogs => {
  const mappedAuthorCount = {}

  blogs.forEach(({ author }) => {
    mappedAuthorCount[author] = mappedAuthorCount[author]
      ? mappedAuthorCount[author] + 1
      : 1
  })

  const [author, totalBlog] = Object.entries(mappedAuthorCount)
    .sort(([, totalBlogA], [, totalBlogB]) => totalBlogA - totalBlogB)
    .pop()

  return { author, blogs: totalBlog }
}

const mostLikes = blogs => {
  const mappedAuthorLikes = {}

  blogs.forEach(({ author, likes }) => {
    mappedAuthorLikes[author] = mappedAuthorLikes[author]
      ? mappedAuthorLikes[author] + likes
      : likes
  })

  const [author, totalLikes] = Object.entries(mappedAuthorLikes)
    .sort(([, totalLikesA], [, totalLikesB]) => totalLikesA - totalLikesB)
    .pop()

  return { author, likes: totalLikes }
}

export default { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }
