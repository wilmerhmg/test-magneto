export class Specie {
	constructor({name, language, average_height}) {
		this._name           = name;
		this._language       = language;
		this._average_height = average_height;
	}


	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get language() {
		return this._language;
	}

	set language(value) {
		this._language = value;
	}

	get average_height() {
		return this._average_height;
	}

	set average_height(value) {
		this._average_height = value;
	}
}
