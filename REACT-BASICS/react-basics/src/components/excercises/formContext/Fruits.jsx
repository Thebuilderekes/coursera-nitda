import FruitsCounter from "./FruitsCounter";
import { useContext } from "react";
import { FruitsContext } from "./FruitsContext";

function Fruits() {
	const fruits = useContext(FruitsContext); // Access the fruits data from the context
	console.log("fruits from fruits comp", fruits);
	return (
		<div>
			{fruits.map((f) => (
				<p key={f.id}>{f.fruitName}</p>
			))}
			<FruitsCounter fruits={fruits} />
		</div>
	);
}

export default Fruits;
