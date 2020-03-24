import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TFileValidator from "./components/TFileValidator/TFileValidator";
import TStringsValidator from "./components/TStringsValidator/TStringsValidator";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route
							path="/string-validator"
							component={TStringsValidator}
						/>
						<Route path="/" exact component={TFileValidator} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
