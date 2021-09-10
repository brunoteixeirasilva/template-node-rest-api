import ObjectModel from 'models/ObjectModel';

/**
 * Basic structure of the token stored
 * For purposes of Domain-driven Design
 *
 * @property {string} id
 * @property {Date} createdOn
 * @property {Date} validTo
 * @property {boolean} revoked
 * @property {Date} revokedOn
 */
class Token extends ObjectModel {
	userId = null;
	validTo = null;
	revokedOn = null;
	revoked = false;

	constructor(userId) {
		super();

		this.userId = userId;
		this.revoked = false;

		// For the validity, adds the days to the current generated date
		this.validTo = new Date();
		this.validTo.setDate(this.validTo.getDate() + 1);
	}

	revoke() {
		this.revoked = true;
		this.revokedOn = new Date();

		return this.revokedOn;
	}
}

export default Token;
