const { default: generateToken } = require('util/generateToken');

/**
 * Base abstraction for objects inheritance
 *
 * @property {number} id
 * @property {Date} createdOn
 */
class ObjectModel {
	id = null;
	createdOn = null;

	constructor(id = generateToken(), createdOn = new Date()) {
		this.id = id;
		this.createdOn = createdOn;
	}
}

export default ObjectModel;
