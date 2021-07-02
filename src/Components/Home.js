import React, { Component } from "react";

export default class Home extends Component {
	state = {
		studentsData: [],
		loginEmail: "",
		loginPassword: "",
	};
	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		return { [name]: value };
	}
	handleRegisterChange(event) {
		let newData = this.handleChange(event);
		this.state.studentsData.push(newData);
	}

	handleRegisterSubmit(event) {
		event.preventDefault();
		const studentDataArr = this.state.studentsData;

		let studentObj = {};
		for (var i = 0; i < studentDataArr.length; i++) {
			studentObj[Object.keys(studentDataArr[i])[0]] = Object.values(studentDataArr[i])[0];
		}

		if (!localStorage.getItem("studentsData")) {
			let studentsData = [];
			studentsData.push(studentObj);
			localStorage.setItem("studentsData", JSON.stringify(studentsData));
		} else {
			let studentsDataInLS = JSON.parse(localStorage.getItem("studentsData"));
			studentsDataInLS.push(studentObj);
			localStorage.setItem("studentsData", JSON.stringify(studentsDataInLS));
		}
	}
	handleLoginSubmit(event) {
		event.preventDefault();
		console.log("loginEmail: ", this.state.loginEmail);
		console.log("loginPassword: ", this.state.loginPassword);

		const credentialsDataStored = JSON.parse(localStorage.getItem("studentsData"));
		const userData = credentialsDataStored.find((student) => student.email === this.state.loginEmail);
		console.log(userData);
		if (!userData) {
			alert("email is incorrect");
			return;
		} else if (userData.password !== this.state.loginPassword) {
			alert("password is incorrect");
			return;
		} else {
			sessionStorage.setItem("loginId", 1);
			console.log(this.props);
			this.props.history.push("/main");
		}
	}
	render() {
		return (
			<div className="container">
				<div className="row pt-5 g-4 align-items-center justify-content-center">
					<div className="col-12 col-md-6 my-5 text-center">
						<button
							type="button"
							className="btn btn-lg btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#loginModal"
						>
							Login
						</button>
					</div>

					<div className="col-12 col-md-6 my-5 text-center">
						<button
							type="button"
							className="btn btn-lg btn-outline-primary"
							data-bs-toggle="modal"
							data-bs-target="#registerModal"
						>
							Register
						</button>
					</div>
				</div>

				<div className="modal fade" id="loginModal" tabIndex="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title" id="loginModalLabel">
									Login
								</h4>
								<span role="button" className="btn-close" data-bs-dismiss="modal">
									{" "}
									&times;{" "}
								</span>
							</div>
							<div className="modal-body">
								<form
									className="row g-3 needs-validation"
									id="loginForm"
									noValidate
									onSubmit={this.handleLoginSubmit.bind(this)}
								>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipUserEmail" className="form-label">
											Email
										</label>
										<input
											type="email"
											name="email"
											className="form-control"
											id="validationTooltipUserEmail"
											placeholder="Enter your email."
											required
											onChange={(e) => {
												this.setState({ loginEmail: e.target.value });
											}}
										/>
										<div className="valid-tooltip">Looks good!</div>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipUserPassword" className="form-label">
											Password
										</label>
										<input
											type="password"
											name="password"
											className="form-control"
											id="validationTooltipUserPassword"
											placeholder="*********"
											required
											onChange={(e) => {
												this.setState({ loginPassword: e.target.value });
											}}
										/>
										<div className="valid-tooltip">Looks good!</div>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button
									type="submit"
									className="btn btn-primary mx-auto"
									form="loginForm"
									id="loginFormBtn"
									data-bs-dismiss="modal"
								>
									Login
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="registerModal" tabIndex="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title" id="registerModalLabel">
									Register
								</h4>
								<span role="button" className="btn-close" data-bs-dismiss="modal">
									{" "}
									&times;{" "}
								</span>
							</div>
							<div className="modal-body">
								<form
									className="row g-3 needs-validation"
									id="registerForm"
									noValidate
									onSubmit={this.handleRegisterSubmit.bind(this)}
								>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipFname" className="form-label">
											First name
										</label>
										<input
											type="text"
											name="firstName"
											className="form-control"
											id="validationTooltipFname"
											placeholder="Mahmoud"
											required
											onChange={this.handleRegisterChange.bind(this)}
										/>
										<div className="valid-tooltip">Looks good!</div>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipLname" className="form-label">
											Last name
										</label>
										<input
											type="text"
											name="lastName"
											className="form-control"
											id="validationTooltipLname"
											placeholder="Hamdy"
											required
											onChange={this.handleRegisterChange.bind(this)}
										/>
										<div className="valid-tooltip">Looks good!</div>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipAddress" className="form-label">
											Address
										</label>
										<input
											type="text"
											name="address"
											className="form-control"
											id="validationTooltipAddress"
											placeholder="Gharbia, Tanta, Nahas St., Building no. 123"
											required
											onChange={this.handleRegisterChange.bind(this)}
										/>
										<div className="invalid-tooltip">Please provide a valid address.</div>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipEmail" className="form-label">
											Email
										</label>
										<div className="input-group has-validation">
											<input
												type="email"
												name="email"
												className="form-control"
												id="validationTooltipEmail"
												placeholder="email@corporate.org"
												required
												onChange={this.handleRegisterChange.bind(this)}
											/>
											<div className="invalid-tooltip">Please enter a valid email.</div>
										</div>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipAge" className="form-label">
											Age
										</label>
										<div className="input-group has-validation">
											<input
												type="number"
												name="age"
												className="form-control"
												id="validationTooltipAge"
												min="18"
												max="65"
												placeholder="Must be between 15 and 99"
												required
												onChange={this.handleRegisterChange.bind(this)}
											/>
											<span className="input-group-text">Years</span>
											<div className="invalid-tooltip">Please provide a valid age.</div>
										</div>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipNewPassword" className="form-label">
											Password
										</label>
										<input
											type="password"
											name="password"
											className="form-control"
											id="validationTooltipNewPassword"
											placeholder="*********"
											required
											onChange={this.handleRegisterChange.bind(this)}
										/>
										<div className="valid-tooltip">Looks good!</div>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button
									className="btn btn-primary w-100"
									type="submit"
									form="registerForm"
									id="registerFormBtn"
									data-bs-dismiss="modal"
								>
									Register
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
