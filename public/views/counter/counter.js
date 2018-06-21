const renderCounterApp = () => {
	let { counter } = store.getState();
	return `
		<div>
			<h1>${counter}</h1>
			<div>
				<button onclick="decrementAction()">DECREMENT</button>
				<button onclick="incrementAction()">INCREMENT</button>
			</div>
		</div>
	`
}