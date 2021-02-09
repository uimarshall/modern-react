import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./customHooks/useFetch";


const Home = () => {
	const{data:blogs, isLoading,error}=useFetch('http://localhost:8000/blogs')
	// Array destructuring
	// const [blogs, setBlogs] = useState(null);
	// const [isLoading, setIsLoading] = useState(true)
	// const [error, setError] = useState(null)
	
	// useEffect is a func that runs on first render and re-render to the DOM
	// useEffect(() => {
	// 	console.log("use effect runs on first render and re-render");
	// 	fetch("http://localhost:8000/blogs")
	// 	.then(res=> {
	// 		if (!res.ok) {
	// 			throw Error("Unable to fetch the data for this resource!")
				
	// 		}
	// 		return res.json()
	// 	})
	// 	  .then(data=>{
	// 		  setBlogs(data);
	// 		//   After loading the data setIsLoading to false
	// 		setIsLoading(false)
	// 		setError(null)
	// 		}).catch(err=>{
	// 			setIsLoading(false)
	// 			// console.log(err.message);
	// 			setError(err.message)
	// 		})
		
	// }, []);

	return (
		<div className="home">
			{/* Conditional loading */}
			{isLoading && <div>Loading...</div>}
			{error && <h1>{error}</h1>}
		{blogs && <BlogList blogs={blogs} title="All blogs" />}	
		
			
		</div>
	);
};


// const Home = () => {
// 	const [blogs, setBlogs] = useState(null);
// 	const [name, setName] = useState("Daddy");
// 	// useEffect is a func that runs on first render and re-render to the DOM
// 	useEffect(() => {
// 		console.log("use effect runs on first render and re-render");
// 		fetch("http://localhost:8000/blogs")
// 		.then(res=> {return res.json()})
// 		.then(data=>{setBlogs(data);})
		
// 	}, []);

// 	// keep the blogs that is not equsl to the 'id' received as params
// 	const handleRemove = (id) => {
// 		const newBlog = blogs.filter((blog) => blog.id !== id);
// 		setBlogs(newBlog);
// 	};
// 	// const page = "Homepage";
// 	// Array destructuring
// 	const [page, setPage] = useState("Homepage");
// 	const handleClick = () => {
// 		setPage("New Homepage");
// 	};
// 	// const handleClick = () => {
// 	// 	alert("Hello");
// 	// };
// 	const handleClick2 = (name, e) => {
// 		alert("Hello " + name, e.timeStamp);
// 	};
// 	return (
// 		<div className="home">
// 		{blogs && <BlogList blogs={blogs} title="All blogs" handleRemove={handleRemove} />}	
// 		{blogs && <BlogList
// 				blogs={blogs.filter((blog) => blog.author === "Abel")}
// 				title="Abel's blogs"
// 				handleRemove={handleRemove}
// 			/>}	
// 			<h2>{page}</h2>
// 			<button onClick={handleClick}>Click</button>
// 			<button onClick={(e) => handleClick2("Marshall", e)}>Click Me</button>
// 			{/* <button onClick={() => setName("Mummy")}>Change Name</button> */}
// 			{/* <p>{name}</p> */}
// 		</div>
// 	);
// };

export default Home;

