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
}

export default ObjectModel;
