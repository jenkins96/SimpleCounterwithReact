import React from "react";
import Card from "./Card";
import SecondsCounter from "./SecondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="d-flex justify-content-start">
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
