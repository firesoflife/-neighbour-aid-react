import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<Fragment>
			<Router>
				<h1>NeighbourAid</h1>
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route exact path={'/dashboard'} component={Dashboard} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
