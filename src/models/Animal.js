import ObjectModel from 'models/ObjectModel';

/**
 * Holds an animal's meta-data
 */
class Animal extends ObjectModel {
	name = '';
	age = 0;
	gender = 'female';

	constructor(name, age = 0, gender = 'female') {
		super();

		// setting construction data
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

export default Animal;
