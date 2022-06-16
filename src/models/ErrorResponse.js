const standardCode = 500;

/**
 * Basic HTTP ErrorResponse OK definition
 *
 * @property {string} data
 * @property {number} code
 * @property {boolean} error
 */
class ErrorResponse {
	message = standardCode;
	error = true;
	code = standardCode;

	constructor(resultMessage = null, resultCode = standardCode) {
		this.message = resultMessage;
		this.code = resultCode;
	}
}

export default ErrorResponse;
