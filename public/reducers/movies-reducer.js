let moviesDefaultState = {
	movieList: [],
	isLoading: false,
	error: null
}

const moviesReducer = (state = moviesDefaultState, action) => {
	let stateCopy = {
		...state,
		movieList: state.movieList.map(movie => {
			return {...movie}
		})
	}

	if (action.type == "MOVIE_SEARCH_INITIATED") {
		stateCopy.isLoading = true;
		stateCopy.error = null;
		return stateCopy;
	} else if (action.type == "MOVIES_RETURNED") {
		let { movies } = action;
		stateCopy.movieList = movies
		stateCopy.isLoading = false;
		stateCopy.error = null;
		return stateCopy
	} else if (action.type == "MOVIES_ERROR") {
		let { error } = action;
		stateCopy.movieList = [];
		stateCopy.isLoading = false;
		stateCopy.error = error;
		return stateCopy;
	}
	return state;
}