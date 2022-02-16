import Animal from 'models/Animal';

/**
 * Holds a Pet's meta-data
 */
class Pet extends Animal {
	race = 'NA';
	colours = [];

	constructor(name, age = 0, gender = 'female', race = 'NA', colours = []) {
		super(name, age, gender);

		// setting construction data
		this.race = race;
		this.colours = colours;
	}
}

export default Pet;
