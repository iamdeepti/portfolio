import React from "react";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import "./App.css";
import Profile from "./pages/profile";
import About from "./components/About";
import Projects from "./components/Projects";
function App() {
	return (
		// <div className="App">
		// 	<Profile />
		// </div>
		<Router>
			<Switch>
				<Route  path='/' component={Profile}/>
				
			</Switch>
		</Router>
	);
}

export default App;
