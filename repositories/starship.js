import { getStarship } from '../service/swapi';
import { sortByCapacity, starshipConverter } from '../converters/starshipConverter';

export const processStarship = async (shipList) => {
  const allEntries   = shipList.entries();
  const rawStarships = [];
  const bulkPromises = [];

  for(const [index, rawStarship] of allEntries) {
    if(!(index % 3) && index) {
      rawStarships.push(... await Promise.all(bulkPromises));
      bulkPromises.splice(0, 3);
    }
    bulkPromises.push(getStarship(rawStarship));
  }

  rawStarships.push(... await Promise.all(bulkPromises));
  const starships     = rawStarships.map(starshipConverter);
  const sortStarships = starships.sort(sortByCapacity);

  return [sortStarships.shift()];
};
