import React from "react";
import Header from "./Header";
import Footer from "./Footer"

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {name:"Vivek"};
	}
	
	render(){
		this.state = {name: "viv",lastName:"par"};
		const title = "Hello world";
		return(
			<div>
				{this.state.name}
				<Header title={title}/>
				<Footer />
			</div>
		);
	}
}