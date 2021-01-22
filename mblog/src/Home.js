import React from "react";
import { useState } from "react";

const Home = () => {
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
			<h2>{page}</h2>
			<button onClick={handleClick}>Click</button>
			<button onClick={(e) => handleClick2("Marshall", e)}>Click Me</button>
		</div>
	);
};

export default Home;
