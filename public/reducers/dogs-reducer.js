let dogsDefaultState = {
	dogList: [],
	isLoading: false,
	error: null
}

const dogsReducer = (state = dogsDefaultState, action) => {
	let stateCopy = {
		...state,
		dogList: state.dogList.map(dog => {
			return{...dog}
		})
	}
	
	if (action.type == "DOG_SEARCH_INITIATED") {
		stateCopy.isLoading = true;
		stateCopy.error = null;
		return stateCopy;
	} else if (action.type == "DOGS_RETURNED") {
		let { dogs} = action;
		stateCopy.dogList = dogs
		stateCopy.isLoading = false;
		stateCopy.error = null;
		return stateCopy
	} else if (action.type == "DOGS_ERROR") {
		let { error } = [];
		stateCopy.dogList = dogs
		stateCopy.isLoading = false;
		stateCopy.error = null;
		return stateCopy
	}
	return state;
}