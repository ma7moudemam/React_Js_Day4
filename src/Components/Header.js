import React from "react";

const Header = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="# ">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="# ">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="# ">
									Link
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link disabled" href="# " tabIndex="-1">
									Disabled
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
