import React, { useState, useEffect } from 'react';

// Import images
import Poster from '../assets/images/JPGs/WarDogs.jpg';

const MovieCard = (props) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(Poster);

	useEffect(() => {
		if (props.movie) {
			setTitle(props.movie.title);
			setDescription(props.movie.description);
			setImage(props.movie.poster);
		}
    }, [props]);

	return (
		<div className="movie-card margin-bottom">
			<img className="poster margin-right" src={image} alt="Movie Poster" />
			<div>
				<h1 className="margin-bottom-half">{ title }</h1>
				<p className="margin-bottom-half">{ description }</p>
				
				<button>Add DVD</button>
			</div>
		</div>
	);
}

export default MovieCard;
