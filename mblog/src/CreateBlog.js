import React, { useState } from 'react'

const CreateBlog = () => {
  // The state is kept in sync with the value of the input
  // Controlled Inputs means the value of the input field will be what is in the state
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('isaac')
  return (
    <div className="create">
      <h2>Create new Blog</h2>
      {title && (
        <p style={{ color: '#333' }}>
          You entered: <span style={{ color: '#fe396d' }}>{title}</span>
        </p>
      )}
      <form action="">
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
        <button type="submit">Add Blog</button>
      </form>
    </div>
  )
}

export default CreateBlog
