import React from "react";
const Navbar = () => {
	return (
		<div>
			<h1>The M Blog</h1>
			<div className="nav-links">
				<a href="/">Home</a>
				<a href="/create">New Blog</a>
			</div>
		</div>
	);
};

export default Navbar;
