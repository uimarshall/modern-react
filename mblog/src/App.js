import "./App.css";

// A Component is a function, the function returns a JSX,
// The JSX is compiled into html by Babel and injected to the DOM

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>My blog is good!</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
