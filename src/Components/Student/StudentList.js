import React, { Component } from "react";
//import StudentEdit from "./StudentEdit";
import StudentEditModal from "./StudentEditModal";

class StudentList extends Component {
	state = {
		studentIndex: 0,
	};
	render() {
		return (
			<div className="my-5">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Age</th>
							<th scope="col">Courses</th>
							<th scope="col">Track Name</th>
							<th scope="col" colSpan="3">
								Address
							</th>
						</tr>
					</thead>
					<tbody>
						{this.props.students.map((student) => {
							return (
								<tr key={student.id}>
									<th scope="row">{student.id}</th>
									<td>{student.name}</td>
									<td>{student.age}</td>
									<td>{student.courses.join(" ")}</td>
									<td>{student.trackName}</td>
									<td>{student.address}</td>
									<td>
										<button
											type="button"
											className="btn btn-success"
											data-bs-toggle="modal"
											data-bs-target="#editModal"
											onClick={() => {
												this.setState({ studentIndex: this.props.students.indexOf(student) });
												this.props.fillEditModal(this.props.students.indexOf(student));
											}}
										>
											Edit
										</button>
									</td>
									<td>
										<button
											className="btn btn-danger"
											onClick={() =>
												this.props.deleteFromAppState(this.props.students.indexOf(student))
											}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<StudentEditModal
					studentIndex={this.state.studentIndex}
					confirmEditOfStudent={this.props.confirmEditOfStudent}
				/>
			</div>
		);
	}
}

export default StudentList;
