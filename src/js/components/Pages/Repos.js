import React from "react";

export default class Repos extends React.Component{
	render(){
		const { query } = this.props.location;
		const { params } = this.props;
		const { repo } = params;
		const { date, filter } = query;
		return(
			<div>
				<h1>Repos {repo} on {date}</h1>
			</div>
		);
	}
}
