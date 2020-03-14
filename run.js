import {Movie} from "./Clases/Movie";
import {Planet} from "./Clases/Planet";
import {getFilms, getCharacter} from "./Repository/Swapi";
import {Character} from "./Clases/Character";

+async function Autorun() {
	try {
		const Films    = [];
		const RawFilms = await getFilms();
		for(const RawFilm of RawFilms.results) {
			const Title               = RawFilm.title;
			let characterBulkPromises = [];

			for(const rawCharacter of RawFilm.characters) {
				characterBulkPromises.push(getCharacter(rawCharacter));
			}
			const characterTransform = Item => new Character(Item);
			const rawCharacters      = await Promise.all(characterBulkPromises);
			const characters         = rawCharacters.map(characterTransform);

			console.log('Characters of', Title, characters);
		}
		console.log(Films);
	} catch (e) {
		console.warn(e);
	}

}();
