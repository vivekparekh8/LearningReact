import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";


export default class Layout extends React.Component{

	render(){
		const { history } = this.props;
		console.log(history.isActive("resume") );
		return(
			<div>
				<h1>Header</h1>
				{this.props.children}
				<Link to="resume" activeClassName="resume" class="btn btn-success">Resume</Link>
				<Link to="contactus"><button class="btn btn-danger">Contact Me</button></Link>
			</div>
		);
	}
}
