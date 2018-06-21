let store = Redux.createStore(mainReducer);

const renderApp = () => {
	let navBar = document.getElementById("nav-bar");
	let mainContent = document.getElementById("main-content");

	let state = store.getState();

	navBar.innerHTML = renderNavBar();
	mainContent.innerHTML = renderMainContent();
}

store.subscribe(()=>{
	renderApp();
});

renderApp();