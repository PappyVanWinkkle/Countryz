import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Countries from './Components/countries';
import Africa from './Components/AfricanNations';
import Landing from './Components/Landing';
import Asia from './Components/Asia';
import store from './store';
import Europe from './Components/Europe';
import Error from './Components/Error';
import Ocean from './Components/Oceania';
import Americas from './Components/Americas';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/countries" component={Countries} />
							<Route exact path="/africa" component={Africa} />
							<Route exact path="/europe" component={Europe} />
							<Route exact path="/asia" component={Asia} />
							<Route exact path="/oceania" component={Ocean} />
							<Route exact path="/americas" component={Americas} />
							<Route component={Error} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
