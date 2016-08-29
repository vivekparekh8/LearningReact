import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";


export default class Layout extends React.Component{
	render(){
		return(
			<div>
				<h1>Header</h1>
				{this.props.children}
				<Link to="resume" class="btn btn-success">Resume</Link>
				<Link to="contactus"><button class="btn btn-danger">Contact Me</button></Link>
			</div>
		);
	}
}