import {Movie} from "./Clases/Movie";
import {Planet} from "./Clases/Planet";
import {getFilms, getCharacter, getPlanet, getStarship} from "./Repository/Swapi";
import {Character} from "./Clases/Character";
import {Starship} from "./Clases/Starship";

const characterTransform = Item => new Character(Item);
const planetTransform    = Item => new Planet(Item);
const starshipTransform  = Item => new Starship(Item);

+async function Autorun() {
	try {
		const Films    = [];
		const RawFilms = await getFilms();
		for(const RawFilm of RawFilms.results) {
			const Title = RawFilm.title;

			console.log(`Getting ${Title}`);

			const characterBulkPromises = [];
			const planetBulkPromises    = [];
			const starshipBulkPromises  = [];

			for(const rawCharacter of RawFilm.characters) {
				characterBulkPromises.push(getCharacter(rawCharacter));
			}
			for(const rawPlanet of RawFilm.planets) {
				planetBulkPromises.push(getPlanet(rawPlanet));
			}
			for(const rawStarship of RawFilm.starships) {
				starshipBulkPromises.push(getStarship(rawStarship));
			}

			const rawCharacters = await Promise.all(characterBulkPromises);
			const characters    = rawCharacters.map(characterTransform);

			const rawPlanets = await Promise.all(planetBulkPromises);
			const planets    = rawPlanets.map(planetTransform);

			const rawStarships = await Promise.all(starshipBulkPromises);
			const starships    = rawStarships.map(starshipTransform);

			const movie = new Movie({
				name: Title,
				planets: planets,
				starships: starships,
				characters: characters
			});
			
			Films.push(movie);
		}
		console.log(JSON.stringify(Films));
	} catch (e) {
		console.warn(e);
	}

}();
