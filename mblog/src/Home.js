import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";

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
			author: "Abel",
			id: 3,
		},
	]);

	// keep the blogs that is not equsl to the 'id' received as params
	const handleRemove = (id) => {
		const newBlog = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlog);
	};
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
			<BlogList blogs={blogs} title="All blogs" handleRemove={handleRemove} />
			<BlogList
				blogs={blogs.filter((blog) => blog.author === "Abel")}
				title="Abel's blogs"
			/>
			<h2>{page}</h2>
			<button onClick={handleClick}>Click</button>
			<button onClick={(e) => handleClick2("Marshall", e)}>Click Me</button>
		</div>
	);
};

export default Home;
