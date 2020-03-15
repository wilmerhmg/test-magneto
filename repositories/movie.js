import { processCharacters } from './character';
import { processPlanet } from './planet';
import { processStarship } from './starship';
import { movieConverter } from '../converters';

export const processMovie = async (rawMovie) => {
  const name = rawMovie.title;
  console.log(`\nGetting ${name}`);

  console.time('Characters');
  const characters = await processCharacters(rawMovie.characters);
  console.timeEnd('Characters');

  console.time('Planets');
  const planets = await processPlanet(rawMovie.planets);
  console.timeEnd('Planets');

  console.time('Starships');
  const starships = await processStarship(rawMovie.starships);
  console.timeEnd('Starships');

  return movieConverter({ name, planets, starships, characters });
};
