import {Specie} from "./Specie";

export class Character {
	constructor({name, gender, hair_color, skin_color, eye_color, height, homeworld, specie}) {
		this._name       = name;
		this._gender     = gender;
		this._hair_color = hair_color;
		this._skin_color = skin_color;
		this._eye_color  = eye_color;
		this._height     = height;
		this._homeworld  = homeworld;
		if(specie && specie instanceof Specie) {
			this._specie = specie
		} else if(specie) {
			throw new Error("The value not is a instance of Specia Class");
		}
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
		this._homeworld = value;
	}

	get specie() {
		return this._specie;
	}

	set specie(value) {
		if(value instanceof Specie) {
			this._specie = value;
		} else {
			throw new Error("The value not is a instance of Specia Class");
		}
	}
}
