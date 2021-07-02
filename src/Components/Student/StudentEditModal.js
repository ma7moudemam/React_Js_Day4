import React, { Component } from "react";

export default class StudentEditModal extends Component {
	render() {
		return (
			<>
				<div className="modal fade" id="editModal" tabIndex="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title" id="editModalLabel">
									Edit
								</h4>
								<span role="button" className="btn-close" data-bs-dismiss="modal">
									{" "}
									&times;{" "}
								</span>
							</div>
							<div className="modal-body">
								<form className="row gx-3 gy-2 align-items-center">
									<div className="col-12 position-relative form-input-div">
										<label className="visually-hidden" htmlFor="editStudentName">
											Name
										</label>
										<input
											type="text"
											className="form-control"
											id="editStudentName"
											placeholder="Jane Doe"
										/>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label className="visually-hidden" htmlFor="editStudentAge">
											Age
										</label>
										<input
											type="number"
											className="form-control"
											id="editStudentAge"
											placeholder="20"
										/>
									</div>

									<div className="col-12 position-relative form-input-div">
										<select className="form-select" id="editStudentCourses" size="2" multiple>
											<option disabled>Courses</option>
											<option value="HTML">HTML</option>
											<option value="CSS">CSS</option>
											<option value="JS">JS</option>
											<option value="React">React</option>
											<option value="Angular">Angular</option>
										</select>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label className="visually-hidden" htmlFor="editStudentTrack">
											Track Name
										</label>
										<input
											type="text"
											className="form-control"
											id="editStudentTrack"
											placeholder="Web Development"
										/>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label className="visually-hidden" htmlFor="editStudentDateOfBirth">
											Date of birth
										</label>
										<input
											type="number"
											className="form-control"
											id="editStudentDateOfBirth"
											placeholder="1999"
											min="1990"
											max="2005"
										/>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label className="visually-hidden" htmlFor="editStudentAddress">
											Address
										</label>
										<input
											type="text"
											className="form-control"
											id="editStudentAddress"
											placeholder="Mansoura, St.12"
										/>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button
									type="submit"
									className="btn btn-primary w-100"
									form="editForm"
									id="editFormBtn"
									data-bs-dismiss="modal"
									onClick={() => {
										console.log(this.props);
										this.props.confirmEditOfStudent(this.props.studentIndex);
									}}
								>
									Confirm Edit
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
