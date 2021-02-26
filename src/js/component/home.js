import React from "react";
import Card from "./Card";
//import SecondsCounter from "./SecondsCounter";

//create your first component
export function Home() {
	return (
		<div className="d-flex justify-content-center">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}
