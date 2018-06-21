const renderMovie = (movie) => {
	let { Title, Poster } = movie
	
	return `
		<div>
			<h6>${Title}</h6>
			<div>
				<img src=${Poster} style="width: 100px;" />
			</div>
		</div>
	`
}