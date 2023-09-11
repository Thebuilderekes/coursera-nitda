import { useState } from "react";

function CheckState() {
	const [date, setDate] = useState(null);

	const handleClick = () => setDate("hello");

	return (
		<div>
			<h1>{date}</h1>

			<button onClick={handleClick}>Show</button>
		</div>
	);
}

export default CheckState;
