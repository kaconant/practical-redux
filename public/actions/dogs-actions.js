let dogsSearchAction = (searchString) => {
	// Before any search happens, we tell the reducer that we're starting a search
	store.dispatch({
		type: "DOG_SEARCH_INITIATED"
	})

	$.ajax({
		method: "GET",
		url: "https://dog.ceo/api/breeds/image/random"
	}).then( (dogData) => {
		// Asynchronously dispatch another action when the movies come back from the API
		if (dogData.Error) {
			store.dispatch({
				type: "DOGS_ERROR",
				error: dogData.Error
			});
		} else {
			store.dispatch({
				type: "DOGS_RETURNED",
				dogs: dogData.message
			});
		}	
	} )
}