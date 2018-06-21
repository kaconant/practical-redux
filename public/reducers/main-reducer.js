let mainReducer = Redux.combineReducers({
	counter: counterReducer,
	dogs: dogsReducer,
	movies: moviesReducer,
	navigation: navigationReducer
});