import React from "react";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import "./App.css";
import Profile from "./pages/profile";
function App() {
	return (
		<Router>
			<Switch>
				<Route  path='/' component={Profile}/>
				
			</Switch>
		</Router>
	);
}

export default App;
