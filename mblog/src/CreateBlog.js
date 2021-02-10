import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateBlog = () => {
  // The state is kept in sync with the value of the input
  // Controlled Inputs means the value of the input field will be what is in the state
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('isaac')
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, content, author }
    setIsLoading(true)
    // console.log(blog)
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added')
      setIsLoading(false)
      //   history.go(-1)
      history.push('/')
    })
  }
  return (
    <div className="create">
      <h2>Create new Blog</h2>
      {title && (
        <p style={{ color: '#333' }}>
          You entered: <span style={{ color: '#fe396d' }}>{title}</span>
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="">Blog body</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <label htmlFor="">Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="isaac">isaac</option>
          <option value="jacob">jacob</option>
        </select>
        {!isLoading && <button type="submit">Add Blog</button>}
        {isLoading && (
          <button type="submit" disabled>
            Adding Blog...
          </button>
        )}
      </form>
    </div>
  )
}

export default CreateBlog
