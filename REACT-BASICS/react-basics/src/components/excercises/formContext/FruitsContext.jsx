import { createContext, useState, useEffect } from "react";
import Fruits from "./Fruits";
// Create a context for the fruits data
export const FruitsContext = createContext();

function FruitsProvider() {
	const [fruits, setFruits] = useState([
		{ fruitName: "apple", id: 1 },
		{ fruitName: "apple", id: 2 },
		{ fruitName: "plum", id: 3 },
		{ fruitName: "orange", id: 4 },
	]);

	useEffect(() => {
		setFruits(fruits);
	}, [fruits]);

	console.log("this is fruits array:", fruits);
	return (
		<FruitsContext.Provider value={fruits}>
			<Fruits />
		</FruitsContext.Provider>
	);
}

export default FruitsProvider;
