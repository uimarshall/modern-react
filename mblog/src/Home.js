import React from "react";

const Home = () => {
	const handleClick = () => {
		alert("Hello");
	};
	const handleClick2 = (name, e) => {
		alert("Hello " + name, e.timeStamp);
	};
	return (
		<div className="home">
			<h2>Homepage</h2>
			<button onClick={handleClick}>Click</button>
			<button onClick={(e) => handleClick2("Marshall", e)}>Click Me</button>
		</div>
	);
};

export default Home;
