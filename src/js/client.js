import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import AboutMe from "./components/Pages/AboutMe";
import ContactUs from "./components/Pages/ContactUs";
import Resume from "./components/Pages/Resume";
import Bootstrap from "../../vendor/bootstrap-without-jquery";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.getElementById('app');
ReactDOM.render(<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={AboutMe}></IndexRoute>
			<Route path="resume" component={Resume}></Route>
			<Route path="contactus" component={ContactUs}></Route>
		</Route>
		
	</Router>, app);