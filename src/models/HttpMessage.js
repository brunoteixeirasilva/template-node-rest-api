/**
 * Basic HTTP response message definition
 *
 * @property {string} message
 */
class HttpMessage {
	message = '';

	constructor(message) {
		if (!message || message === '')
			throw Error('Message is compulsory here.');

		this.message = message;
	}
}

export default HttpMessage;
