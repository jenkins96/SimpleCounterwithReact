import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card mx-2 mt-2">
			<div className="card-body">
				<h4 className="card-title display-2"> {props.title}</h4>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.number
};
export default Card;
