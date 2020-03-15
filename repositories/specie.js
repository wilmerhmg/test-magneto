import { speciesExtractor } from '../converters/characterConverter';
import { getSpecie } from '../service/swapi';

export const processSpecies = async (rawCharacters) => {
  const plainSpecies   = rawCharacters.map(speciesExtractor);
  const flattenSpecies = plainSpecies.flat(1);
  const uniqSpecies    = [... new Set(flattenSpecies)];
  const rawSpecies     = [];

  for(const urlSpecie of uniqSpecies) {
    rawSpecies.push(await getSpecie(urlSpecie));
  }

  return rawSpecies;
};
