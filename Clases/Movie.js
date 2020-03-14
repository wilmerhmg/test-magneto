import {Planet} from "./Planet";
import {Character} from "./Character";
import {Starship} from "./Starship";

export class Movie {
	constructor({name, planets, characters, starships}) {
		this._name = name;

		if(this.arrayContentInstanceOf(planets, Planet))
			this._planets = planets;

		if(this.arrayContentInstanceOf(characters, Character))
			this._characters = characters;

		if(this.arrayContentInstanceOf(starships, Starship))
			this._starships = starships;
	}

	arrayContentInstanceOf(array, classValue) {
		if(!Array.isArray(array)) {
			throw new Error('The value is not array');
		}


		const fTrueInstances = Item => Item instanceof classValue;
		const trueInstances  = array.filter(fTrueInstances);

		if(trueInstances.length !== array.length) {
			throw new Error('Some elements of the array are not an instance of the evaluated class');
		}
		return true;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get planets() {
		return this._planets;
	}

	set planets(value) {
		if(this.arrayContentInstanceOf(value, Planet))
			this._planets = value;
	}

	get characters() {
		return this._characters;
	}

	set characters(value) {
		if(this.arrayContentInstanceOf(value, Character))
			this._characters = value;
	}

	get starships() {
		return this._starships;
	}

	set starships(value) {
		if(this.arrayContentInstanceOf(value, Starship))
			this._starships = value;
	}
}
