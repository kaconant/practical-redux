let moviesSearchAction = (searchString) => {
	// Before any search happens, we tell the reducer that we're starting a search
	store.dispatch({
		type: "MOVIE_SEARCH_INITIATED"
	})

	$.ajax({
		method: "GET",
		url: "https://www.omdbapi.com/?apikey=3430a78&s="+encodeURIComponent(searchString)
	}).then( (movieData) => {
		// Asynchronously dispatch another action when the movies come back from the API
		if (movieData.Error) {
			store.dispatch({
				type: "MOVIES_ERROR",
				error: movieData.Error
			});
		} else {
			store.dispatch({
				type: "MOVIES_RETURNED",
				movies: movieData.Search
			});
		}	

		
	} )
	
}