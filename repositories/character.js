import { getCharacter } from '../service/swapi';
import { characterConverter, mergeWithSpecie } from '../converters/characterConverter';
import { processSpecies } from './specie';

export const processCharacters = async (characterList) => {
  const allEntries    = characterList.entries();
  const rawCharacters = [];
  const bulkPromises  = [];

  for(const [index, rawCharacter] of allEntries) {
    if(!(index % 3) && index) {
      rawCharacters.push(... await Promise.all(bulkPromises));
      bulkPromises.splice(0, 3);
    }
    bulkPromises.push(getCharacter(rawCharacter));
  }

  rawCharacters.push(... await Promise.all(bulkPromises));

  const rawSpecies      = await processSpecies(rawCharacters);
  const mergeCharacters = rawCharacters.map(mergeWithSpecie.bind(null, rawSpecies));

  return mergeCharacters.map(characterConverter);
};
