let dogsDefaultState = {
	randomDog: "",
	isLoading: false,
	error: null
}

const dogsReducer = (state = dogsDefaultState, action) => {
	let stateCopy = {
		...state,
	}
	
	if (action.type == "DOG_SEARCH_INITIATED") {
		stateCopy.randomDog = null;
		stateCopy.isLoading = true;
		stateCopy.error = null;
		return stateCopy;
	} else if (action.type == "DOGS_RETURNED") {
		let { randomDog } = action;
		stateCopy.randomDog = randomDog
		stateCopy.isLoading = false;
		stateCopy.error = null;
		return stateCopy
	} else if (action.type == "DOGS_ERROR") {
		let { error } = action;
		stateCopy.randomDog = null;
		stateCopy.isLoading = false;
		stateCopy.error = error;
		return stateCopy
	}
	return state;
}