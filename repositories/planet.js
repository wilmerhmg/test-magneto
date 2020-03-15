import { getPlanet } from '../service/swapi';
import { planetConverter } from '../converters';

export const processPlanet = async (planetList) => {
  const allEntries   = planetList.entries();
  const rawPlanets   = [];
  const bulkPromises = [];

  for(const [index, rawPlanet] of allEntries) {
    if(!(index % 3) && index) {
      rawPlanets.push(... await Promise.all(bulkPromises));
      bulkPromises.splice(0, 3);
    }
    bulkPromises.push(getPlanet(rawPlanet));
  }

  rawPlanets.push(... await Promise.all(bulkPromises));

  return rawPlanets.map(planetConverter);
};
