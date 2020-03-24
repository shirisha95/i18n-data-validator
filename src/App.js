import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TFilesValidator from "./container/TFilesValidator/TFilesValidator";
import TStringsValidator from "./container/TStringsValidator/TStringsValidator";
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
						<Route path="/" exact component={TFilesValidator} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
