// import React from 'react'
// import PropTypes from 'prop-types'

const BlogList = ({ blogs, title }) => {
	// const blogs = props.blogs;
	// const title = props.title;
	return (
		<div className="blog-list">
			<h1>{title}</h1>
			{blogs.map((blog) => {
				return (
					<div className="blog-preview" key={blog.id}>
						<h1>{blog.title}</h1>
						<p>Author: {blog.author}</p>
					</div>
				);
			})}
		</div>
	);
};

BlogList.propTypes = {};

export default BlogList;
