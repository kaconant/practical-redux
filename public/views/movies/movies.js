const renderMoviesApp = () => {
	let { movies } = store.getState();
	let { isLoading, movieList, error} = movies;
	
	return `
		<div>
			<h1>SEARCH FOR A MOVIE</h1>
			<input type="text" id="movie-search" onchange="moviesSearchAction(this.value)" />
			${isLoading 
				? `<h1> LOADING... </h1>`
				: error
					? `<h1>${error}</h1>`
					: `<div>
						${movieList.map((movie)=>{
							return renderMovie(movie)
						}).join('')}
						</div>`
			}
		</div>
	`
}