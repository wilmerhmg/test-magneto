export class Starship {
  constructor({ name, model, manufacturer, passengers }) {
    this.name         = name;
    this.model        = model;
    this.manufacturer = manufacturer;
    this.passengers   = passengers;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get model() {
    return this._model;
  }

  set model(value) {
    this._model = value;
  }

  get manufacturer() {
    return this._manufacturer;
  }

  set manufacturer(value) {
    this._manufacturer = value;
  }

  get passengers() {
    return this._passengers;
  }

  set passengers(value) {
    this._passengers = value;
  }
}
