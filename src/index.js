import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import tFileReducer from "./store/reducers/TFileValidator";
import tStringReducer from "./store/reducers/TStringsValidator";

import "./index.css";

const appReducer = combineReducers({ tFileReducer, tStringReducer });
const store = createStore(appReducer);
const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
