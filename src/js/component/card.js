import React from "react";
import PropType from "prop-types";

export const Card = props => {
	return (
		<div className="card p-0 m-0 mb-4" style={{ width: "18rem" }}>
			<img
				className="card-img-top p-3"
				src={props.card_image}
				alt={props.card_image_alt}
			/>
			<div className="card-body p-0">
				<h5 className="card-title text-center px-3 py-0">
					{props.card_title}
				</h5>
				<p className="card-text text-center p-3">{props.card_text}</p>
			</div>
			<div className="card-footer text-center p-3">
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	card_image: PropType.string
};

Card.propTypes = {
	card_image_alt: PropType.string
};

Card.propTypes = {
	card_title: PropType.string
};

Card.propTypes = {
	card_text: PropType.string
};
