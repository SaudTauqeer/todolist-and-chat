//Imports
import React, { Component } from 'react';
import 'typeface-roboto';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
//Router Components
import LandingPage from './Components/LandingPage';
import MobileNavbar from './Components/MobileNavbar';
import Navbar from './Components/Navbar';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Router>
					<Switch>
						<Route exact path="/" component={LandingPage} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;
