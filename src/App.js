import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from './Travel';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>My Travels From Toulouse</h1>
				<Travel 
					photo="https://static.service-voyages.com/photos/vacances-angleterre/londres/generique_381276_pgbighd.jpg"
					destination="London"
					country="United Kingdom"
					distance="1140 km"
				/>
				<Travel 
					photo="https://media-cdn.tripadvisor.com/media/photo-s/12/78/4e/f8/bordeaux.jpg"
					destination="Bordeaux"
					country="France"
					distance="245 km"
				/>
			</div>
		);
	}
}

export default App;
