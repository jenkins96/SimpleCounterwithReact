import React, { useEffect, useState } from "react";
import { SecondsCounter } from "./SecondsCounter";

let i = 0;

const Clock = () => {
	const [secs, setTime] = useState(i);
	useEffect(() => {
		setInterval(() => setTime(i++), 1000);
	}, []);

	return <SecondsCounter seconds={secs.toString()} />;
};
//create your first component
export function Home() {
	return (
		<div className="text-white p-5">
			<Clock />
		</div>
	);
}
