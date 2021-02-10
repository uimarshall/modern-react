import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from './customHooks/useFetch'

const BlogDetails = () => {
  const { route_params } = useParams()
  const { data: blog, error, isLoading } = useFetch(
    'http://localhost:8000/blogs/' + route_params,
  )

  const history = useHistory()

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      // setIsLoading(false)
      //   history.go(-1)
      history.push('/')
    })
  }
  return (
    <div className="blog-details">
      <h2>Blog details - {route_params}</h2>
      {isLoading && <div>Loading...</div>}
      {error && <h1>{error}</h1>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>Author: {blog.author}</p>
          <div>{blog.content}</div>
          <button type="button" onClick={handleDelete}>
            delete blog
          </button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
