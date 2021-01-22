import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";

// A Component is a function, the function returns a JSX,
// The JSX is compiled into html by Babel and injected to the DOM

function App() {
	const title = "JavaScript cleaner code";
	const author = "Doctor Who";
	const claps = 75;
	return (
		<div className="App">
			<Navbar />
			<div className="content">
				{" "}
				<Home />
			</div>
			{/* <header className="App-header">
				<h1>My Coder Blog!</h1>
				<div>
					<h2>{title}</h2>
					<p>Author: {author}</p>
					<p>The article has {claps} claps</p>
				</div>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;
