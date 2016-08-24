import React from "react";
import Header from "./Header";
import Footer from "./Footer"

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {title:"Vivek"};
	}
	
	changeTitle(title){
		this.setState({title});
	}
	handleChange(e){
		const title = e.target.value;
		this.changeTitle(title);
	}
	render(){
		
		return(
			<div>
				
				<Header changeTitle={this.changeTitle.bind(this)}  title={this.state.title}/>
				<input value={this.state.title} onChange={this.handleChange.bind(this)}/>
				<Footer />
			</div>
		);
	}
}