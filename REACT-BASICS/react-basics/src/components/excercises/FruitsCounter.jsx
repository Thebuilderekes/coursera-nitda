function FruitsCounter(props) {
	console.log("fruits from fruitsCounter", props.fruits);

	return <h2>Total fruits: {props.fruits.length}</h2>;
}

export default FruitsCounter;
