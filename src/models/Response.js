const standardCode = 200;

/**
 * Basic HTTP response OK definition
 *
 * @property {string} result
 * @property {number} code
 */
class Response {
	result = standardCode;
	code = standardCode;

	constructor(resultMessage = null, resultCode = standardCode) {
		this.result = resultMessage;
		this.code = resultCode;
	}
}

export default Response;
