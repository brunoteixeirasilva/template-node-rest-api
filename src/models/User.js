import ObjectModel from 'models/ObjectModel';
import Token from 'models/Token';

/**
 * Basic structure of the user stored
 * For purposes of Domain-driven Design
 *
 * @property {number} id
 * @property {Date} createdOn
 * @property {string} fullName
 * @property {string} email
//  * @property {Token} token
 */
class User extends ObjectModel {
	fullName = null;
	email = null;
	// token = null;

	constructor(id, fullName, email) {
		super(id);
		this.fullName = fullName;
		this.email = email;
		//this.token = !token ? new Token(this.id) : token;
	}
}

export default User;
