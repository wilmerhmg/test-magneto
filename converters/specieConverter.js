import { Specie } from '../clases/Specie';

export const specieConverter = (rawSpecie) => new Specie(rawSpecie);

export const searchIndex = (rawSpecies, rawSpecie) => {
  let low  = 0;
  let high = rawSpecies.length - 1;
  while(low <= high) {
    const middle = Math.floor((low + high) / 2);
    const guess  = rawSpecies[middle];

    if(guess.url < rawSpecie) {
      low = middle + 1;
    } else if(guess.url > rawSpecie) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
