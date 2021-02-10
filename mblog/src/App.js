import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateBlog from "./CreateBlog";


// A Component is a function, the function returns a JSX,
// The JSX is compiled into html by Babel and injected to the DOM

function App() {
	const title = "JavaScript cleaner code";
	const author = "Doctor Who";
	const claps = 75;
	return (
		<Router>
			<div className="App">
			<Navbar />
			<div className="content">
				
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/create">
						<CreateBlog />
					</Route>
				</Switch>
			</div>
			
		</div>
		</Router>
	);
}

export default App;
