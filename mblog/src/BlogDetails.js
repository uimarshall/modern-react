import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './customHooks/useFetch'


const BlogDetails = () => {
    const {route_params} = useParams()
    const {data:blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + route_params)
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
                </article>
            ) }
            
        </div>
    )
}

export default BlogDetails
