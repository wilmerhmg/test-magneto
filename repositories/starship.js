import { getStarship } from '../service/swapi';
import { starshipConverter } from '../converters';

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

  return rawStarships.map(starshipConverter);
};
