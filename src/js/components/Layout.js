import React from "react";
import Header from "./Header";
import Footer from "./Footer"

export default class Layout extends React.Component{
	render(){
		const name = "Vivek";
		return(
			<div>
				<Header />
				<Footer />
			</div>
		);
	}
}