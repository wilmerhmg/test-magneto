import { Character } from '../clases/Character';
import { searchIndex, specieConverter } from './specieConverter';

export const speciesExtractor = (rawData) => rawData.species;

export const characterConverter = (rawData) => new Character({
  name: rawData.name,
  homeworld: rawData.homeworld,
  height: rawData.height,
  eye_color: rawData.eye_color,
  skin_color: rawData.skin_color,
  hair_color: rawData.hair_color,
  gender: rawData.gender,
  species: rawData.species.map(specieConverter)
});

export const mergeWithSpecie = (rawSpecies, rawCharacter) => {
  const sortSpecies = rawSpecies.sort(sortByUrl);
  const speciesOf   = rawCharacter.species.entries();
  for(const [index, rawSpecie] of speciesOf) {
    const foundIndex = searchIndex(sortSpecies, rawSpecie);

    //Taking advantage of assignment by reference
    rawCharacter.species[index] = sortSpecies[foundIndex];
  }
  return rawCharacter;
};

export const sortByUrl = (current, next) => {
  const UrlA = current.url.toUpperCase();
  const UrlB = next.url.toUpperCase();

  if(UrlA > UrlB) {
    return 1;
  } else if(UrlA < UrlB) {
    return -1;
  }
  return 0;
};




