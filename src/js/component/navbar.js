import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark px-5 py-2">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-link active"
							aria-current="page"
							href="#">
							Home
						</a>
						<a className="nav-link" href="#">
							About
						</a>
						<a className="nav-link" href="#">
							Services
						</a>
						<a className="nav-link" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
