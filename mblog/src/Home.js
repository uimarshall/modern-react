import React from "react";
import { useState } from "react";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			title: "play wright",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
			author: "Abel",
			id: 1,
		},
		{
			title: "anchor man",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
			author: "Cain",
			id: 2,
		},
		{
			title: "develop good",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
			author: "Isaac",
			id: 3,
		},
	]);
	// const page = "Homepage";
	// Array destructuring
	const [page, setPage] = useState("Homepage");
	const handleClick = () => {
		setPage("New Homepage");
	};
	// const handleClick = () => {
	// 	alert("Hello");
	// };
	const handleClick2 = (name, e) => {
		alert("Hello " + name, e.timeStamp);
	};
	return (
		<div className="home">
			{blogs.map((blog) => {
				return (
					<div className="blog-preview" key={blog.id}>
						<h1>{blog.title}</h1>
						<p>Author: {blog.author}</p>
					</div>
				);
			})}
			<h2>{page}</h2>
			<button onClick={handleClick}>Click</button>
			<button onClick={(e) => handleClick2("Marshall", e)}>Click Me</button>
		</div>
	);
};

export default Home;
