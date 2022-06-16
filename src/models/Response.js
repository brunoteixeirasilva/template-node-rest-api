const standardCode = 200;

/**
 * Basic HTTP response OK definition
 *
 * @property {string} data
 * @property {number} code
 */
class Response {
	data = standardCode;
	code = standardCode;

	constructor(resultMessage = null, resultCode = standardCode) {
		this.data = resultMessage;
		this.code = resultCode;
	}
}

export default Response;
