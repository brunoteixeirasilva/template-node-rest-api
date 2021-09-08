/**
 * Basic structure of the user stored
 * For purposes of Domain-driven Design
 *
 * @property {string} fullName
 * @property {string} email
 * @property {string} token
 */
class User {
	fullName = null;
	email = null;
	token = null;

	constructor(fullName, email, token) {
		this.fullName = fullName;
		this.email = email;
		this.token = token;
	}
}

export default User;
