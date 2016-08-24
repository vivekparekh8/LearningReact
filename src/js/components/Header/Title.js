import React from "react";
export default class Title extends React.Component{
	render(){
		// this.props.changeTitle("newT");
		return(
			<h1>{this.props.title}</h1>
		);
	}
}