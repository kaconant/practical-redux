const renderMainContent = () => {
	let {navigation} = store.getState();

	if (navigation == "COUNTER") {
		return renderCounterApp()
	} else if (navigation == "MOVIES") {
		return renderMoviesApp();
	} else if (navigation == "DOGS") {
		return renderDogsApp()
	}
	return `
		<h1>hmm, you shouldn't be able to see this...</h1>
	`
}