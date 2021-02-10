import React from 'react'
import { useParams } from 'react-router-dom'


const BlogDetails = () => {
    const {route_params} = useParams()
    return (
        <div className="blog-details">
            <h2>Blog details - {route_params}</h2>
            
        </div>
    )
}

export default BlogDetails
