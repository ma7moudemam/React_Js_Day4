import React, { Component } from "react";

export default class StudentShowAdd extends Component {
	render() {
		return (
			<>
				<button className="btn btn-primary mt-3" onClick={this.props.showAdd}>
					Add
				</button>
			</>
		);
	}
}
