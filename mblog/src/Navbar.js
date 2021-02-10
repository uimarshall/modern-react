import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>The M Blog</h1>
			<div className="nav-links">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/create">New Blog</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
