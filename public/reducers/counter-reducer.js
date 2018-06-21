const counterReducer = (state = 0, action) => {
	if (action.type == "DECREMENT_COUNTER") {
		return state - 1;
	} else if (action.type == "INCREMENT_COUNTER") {
		return state + 1;
	}
	return state;
}