import React, { Component } from "react";

export default class StudentAdd extends Component {
	state = {
		studentsData: [],
	};
	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		return { [name]: value };
	}
	handleAddChange(event) {
		let newData = this.handleChange(event);
		this.state.studentsData.push(newData);
	}

	handleAddSubmit(event) {
		event.preventDefault();
		const studentDataArr = this.state.studentsData;

		let studentObj = {};
		for (var i = 0; i < studentDataArr.length; i++) {
			studentObj[Object.keys(studentDataArr[i])[0]] = Object.values(studentDataArr[i])[0];
		}

		studentObj.courses = [];

		console.log(studentObj);
		this.props.addToAppState(studentObj);
	}

	// addStudent = () => {
	// 	let newStudent = {
	// 		name: document.getElementById("studentName").value,
	// 		age: document.getElementById("studentAge").value,
	// 		courses: Array.from(
	// 			document.getElementById("studentCourses").querySelectorAll("option:checked"),
	// 			(opt) => opt.value
	// 		),
	// 		trackName: document.getElementById("studentTrack").value,
	// 		dateOfBirth: document.getElementById("studentDateOfBirth").value,
	// 		address: document.getElementById("studentAddress").value,
	// 	};

	// 	this.props.addToAppState(newStudent);
	// };
	render() {
		return (
			<div className="my-5">
				<form className="row gx-3 gy-2 align-items-center" onSubmit={this.handleAddSubmit.bind(this)}>
					<div className="col-md-2">
						<label className="visually-hidden" htmlFor="studentName">
							Name
						</label>
						<input
							type="text"
							name="name"
							className="form-control"
							id="studentName"
							placeholder="Jane Doe"
							onChange={this.handleAddChange.bind(this)}
						/>
					</div>

					<div className="col-md-2">
						<label className="visually-hidden" htmlFor="studentAge">
							Age
						</label>
						<input
							type="number"
							name="age"
							className="form-control"
							id="studentAge"
							placeholder="20"
							onChange={this.handleAddChange.bind(this)}
						/>
					</div>

					<div className="col-md-2">
						<select
							className="form-select"
							id="studentCourses"
							size="1"
							multiple
							// onChange={(e) => {
							// 	this.state.studentsData.push(e.target.value);

							// 	this.setState({
							// 		studentsData: this.state.studentsData,
							// 	});
							// 	console.log(this.state);
							// }}
						>
							<option disabled>Courses</option>
							<option value="HTML">HTML</option>
							<option value="CSS">CSS</option>
							<option value="JS">JS</option>
							<option value="React">React</option>
							<option value="Angular">Angular</option>
						</select>
					</div>

					<div className="col-md-2">
						<label className="visually-hidden" htmlFor="studentTrack">
							Track Name
						</label>
						<input
							type="text"
							name="trackName"
							className="form-control"
							id="studentTrack"
							placeholder="Web Development"
							onChange={this.handleAddChange.bind(this)}
						/>
					</div>

					<div className="col-md-2">
						<label className="visually-hidden" htmlFor="studentDateOfBirth">
							Date of birth
						</label>
						<input
							type="number"
							name="dateOfBirth"
							className="form-control"
							id="studentDateOfBirth"
							placeholder="1999"
							min="1990"
							max="2005"
							onChange={this.handleAddChange.bind(this)}
						/>
					</div>

					<div className="col-md-2">
						<label className="visually-hidden" htmlFor="studentAddress">
							Address
						</label>
						<input
							type="text"
							name="address"
							className="form-control"
							id="studentAddress"
							placeholder="Mansoura, St.12"
							onChange={this.handleAddChange.bind(this)}
						/>
					</div>

					<div className="col-auto m-auto mt-3">
						<button type="submit" className="btn btn-success">
							Add Student
						</button>
					</div>
				</form>
			</div>
		);
	}
}
