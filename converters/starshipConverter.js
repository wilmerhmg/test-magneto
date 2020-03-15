import { Starship } from '../clases/Starship';

export const starshipConverter = (rawStarship) => new Starship(rawStarship);
export const sortByCapacity    = (current, next) => {
  const capacityA = current.passengers;
  const capacityB = next.passengers;

  if(capacityA > capacityB) {
    return -1;
  } else if(capacityA < capacityB) {
    return 1;
  }
  return 0;
};
