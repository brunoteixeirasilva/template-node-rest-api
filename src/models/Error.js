const standardCode = 500;

/**
 * Basic HTTP response ERROR definition
 *
 * @property {string} errorMessage
 * @property {number} code
 */
class Error {
	errorMessage = standardCode;
	code = standardCode;

	constructor(errorMessage = null, errorCode = standardCode) {
		this.errorMessage = errorMessage;
		this.code = errorCode;
	}
}

export default Error;
