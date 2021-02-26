import React from "react";
import PropTypes from "prop-types";

const CardIcon = props => {
	return (
		<div className="card mx-2 mt-2">
			<div className="card-body">
				<img src={props.icon} alt="Card image cap"></img>
			</div>
		</div>
	);
};
CardIcon.propTypes = {
	icon: PropTypes.string
};
export default CardIcon;
