const { default: generateToken } = require('util/generateToken');

/**
 * Base abstraction for objects inheritance
 *
 * @property {number} id
 * @property {Date} createdOn
 * @property {boolean} deleted
 * @property {Date} deletedOn
 */
class ObjectModel {
	id = null;
	createdOn = null;
	deleted = false;
	deletedOn = null;

	constructor(id = generateToken(), createdOn = new Date()) {
		this.id = id;
		this.createdOn = createdOn;
	}

	delete(deletionDate = new Date()) {
		this.deleted = true;
		this.deletedOn = deletionDate;
	}

	cleanup(propNames = []) {
		if (propNames.length == 0) {
			return this;
		}

		let newInstance = {};

		// 1. It is important to know the object props
		// 2. Is is necessary to remove (not consider) the given properties by name, repeatedly
		const objectKeys = Object.keys(this).filter(
			(propName) => !propNames.includes(propName)
		);

		// 3. Produce the new object, using reducer
		newInstance = objectKeys.reduce((finalObject, currentProperty) => {
			if (!finalObject.hasOwnProperty(currentProperty)) {
				finalObject[currentProperty] = this[currentProperty];
			}

			return finalObject;
		}, {});

		return newInstance;
	}
}

export default ObjectModel;
