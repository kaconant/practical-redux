let navigateAction = (destination) => {
	store.dispatch({
		type: "NAV_CLICKED",
		destination: destination
	})
}