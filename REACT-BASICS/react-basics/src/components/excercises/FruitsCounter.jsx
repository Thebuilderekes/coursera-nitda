// import { useFruits } from "./CustomHook"; // Import the custom hook
import { useContext } from "react";
import { FruitsContext } from "./FruitsContext";
function FruitsCounter() {
	const fruits = useContext(FruitsContext);
	// Access the fruits data from the context

	console.log("freuits from fruitsCounter", fruits);

	return <h2>Total fruits: {fruits.length}</h2>;
}

export default FruitsCounter;
