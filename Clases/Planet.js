export class Planet {
  constructor({ name, terrain, gravity, diameter, population }) {
    this.name       = name;
    this.terrain    = terrain;
    this.gravity    = gravity;
    this.diameter   = diameter;
    this.population = population;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get terrain() {
    return this._terrain;
  }

  set terrain(value) {
    this._terrain = value;
  }

  get gravity() {
    return this._gravity;
  }

  set gravity(value) {
    this._gravity = value;
  }

  get diameter() {
    return this._diameter;
  }

  set diameter(value) {
    this._diameter = value;
  }

  get population() {
    return this._population;
  }

  set population(value) {
    this._population = value;
  }
}
