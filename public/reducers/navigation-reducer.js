
const navigationReducer = (state = "COUNTER", action) => {
	if (action.type == "NAV_CLICKED") {
		let { destination } = action;
		let validDestinations = [
			"COUNTER",
			"MOVIES",
			"DOGS"
		];
		if (validDestinations.indexOf(destination) > -1){
			return destination
		} else {
			return state
		}
	}
	return state;
}