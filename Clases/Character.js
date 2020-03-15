import { Specie } from './Specie';

export class Character {
  constructor({ name, gender, hair_color, skin_color, eye_color, height, homeworld, species }) {
    this.name       = name;
    this.gender     = gender;
    this.hair_color = hair_color;
    this.skin_color = skin_color;
    this.eye_color  = eye_color;
    this.height     = height;
    this.homeworld  = homeworld;
    this.species    = species;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value;
  }

  get hair_color() {
    return this._hair_color;
  }

  set hair_color(value) {
    this._hair_color = value;
  }

  get skin_color() {
    return this._skin_color;
  }

  set skin_color(value) {
    this._skin_color = value;
  }

  get eye_color() {
    return this._eye_color;
  }

  set eye_color(value) {
    this._eye_color = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  get homeworld() {
    return this._homeworld;
  }

  set homeworld(value) {
    if(typeof value !== 'string') throw new Error('Field {homeworld} typeof is required');
    const idMatch   = value.match(/[0-9]+/gm) || [];
    this._homeworld = parseInt(idMatch.join(''));
  }

  get species() {
    return this._species;
  }

  set species(value) {
    if(!Array.isArray(value)) {
      throw new Error('The value is not array');
    }

    const isSpecie    = Item => Item instanceof Specie;
    const trueSpecies = value.filter(isSpecie);

    if(trueSpecies.length !== value.length) {
      throw new Error('Some elements of the array are not an instance of the evaluated class');
    }

    this._species = value;
  }
}
