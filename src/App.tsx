//Imports
import React, { Component } from 'react';
import 'typeface-roboto';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
//Router Components
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import Guest from './Components/Guest';
import Todo from './Components/todo';
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Router>
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/guest" component={Guest} />
						<Route exact path="/todo" component={Todo} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;
