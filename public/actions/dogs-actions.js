let dogsSearchAction = () => {
	// Before any search happens, we tell the reducer that we're starting a search
	store.dispatch({
		type: "DOG_SEARCH_INITIATED"
	})

	$.ajax({
		method: "GET",
		url: "https://dog.ceo/api/breeds/image/random"
	}).then( (randomDog) => {
		// Asynchronously dispatch another action when the movies come back from the API
		if (randomDog.error) {
			store.dispatch({
				type: "DOGS_ERROR",
				error: randomDog.error
			});
		} else {
			store.dispatch({
				type: "DOGS_RETURNED",
				randomDog: randomDog.message
			});
		}	
	} )
}