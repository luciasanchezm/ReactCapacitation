import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "../App";
import {VideoPlayer} from "../components/VideoPlayer/index";

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/VideoPlayer' component={VideoPlayer} />
					<Route path='/' component={App} />
				</Switch>
			</div>
		</Router>
	);
};
