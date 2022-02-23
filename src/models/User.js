import ObjectModel from 'models/ObjectModel';
import applyHashCode from 'util/applyHashCode';

/**
 * Basic structure of the user stored
 * For purposes of Domain-driven Design
 *
 * @property {number} id
 * @property {Date} createdOn
 * @property {string} fullName
 * @property {string} email
 * @property {string} password
 */
class User extends ObjectModel {
	fullName = null;
	email = null;
	password = null;

	constructor(id, fullName, email, password) {
		super(id);
		this.fullName = fullName;
		this.email = email;
		this.password = applyHashCode(password);
		console.log('encoded-pwd: ' + this.password);
	}

	pipe() {
		return this.cleanup(['password']);
	}
}

export default User;
