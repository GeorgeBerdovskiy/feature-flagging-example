import React from 'react';
import MovieCard from '../components/MovieCard';

// Import images
import WarDogs from '../assets/images/JPGs/WarDogs.jpg';
import MisterFox from '../assets/images/JPGs/MisterFox.jpg';
import HacksawRidge from '../assets/images/JPGs/HacksawRidge.jpg';
import SisterAct from '../assets/images/JPGs/SisterAct.jpg';
import Stripes from '../assets/images/JPGs/Stripes.jpg';

const Home = (props) => {
	const movies = [
		{
			title: "War Dogs",
			poster: WarDogs,
			description: "Jonah Hill and Miles Teller become unlikely gun runners for the government during the Iraq War in this fact-based story."
		},
		{
			title: "Fantastic Mr. Fox",
			poster: MisterFox,
			description: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation."
		},
		{
			title: "Hacksaw Ridge",
			poster: HacksawRidge,
			description: "Andrew Garfield stars as pacifistic WWII hero Desmond T. Doss, who saved 75 men at the Battle of Okinawa without ever firing a weapon."
		},
		{
			title: "Sister Act",
			poster: SisterAct,
			description: "When a nightclub singer is forced to take refuge from the mob in a convent, she ends up turning the convent choir into a soulful chorus complete with a Motown repertoire, until the sudden celebrity of the choir jeopardizes her identity."
		},
		{
			title: "Stripes",
			poster: Stripes,
			description: "Two friends (Bill Murray and Harold Ramis) who are dissatisfied with their jobs decide to join the army for a bit of fun."
		}
	];

	return (
		<main className="padded">
			<div className="small-width">
				<h1 className="margin-bottom">Browse DVDs</h1>

				{movies.map((object, i) => <MovieCard movie={object}/>)}
			</div>
		</main>
	);
}

export default Home;
