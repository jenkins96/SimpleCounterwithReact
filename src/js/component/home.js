import React from "react";
import Card from "./Card";
import CardIcon from "./CardIcon";
//import SecondsCounter from "./SecondsCounter";

//create your first component
export function Home() {
	return (
		<div className="d-flex justify-content-center">
			<CardIcon icon="https://cdn.iconscout.com/icon/free/png-256/clock-1605637-1360989.png" />
			<Card title="0" />
			<Card title="0" />
			<Card title="0" />
			<Card title="0" />
			<Card title="0" />
			<Card title="0" />
		</div>
	);
}
