import ServiceConfig from 'models';
const fetch = require('node-fetch');

function BaseConnector(url = '', config = new ServiceConfig()) {
	const urlParams = new URLSearchParams(config.defaultURLParams).toString();

	try {
		return fetch(
			`${config.baseURL}${url}?${urlParams}`,
			config.fetchConfig
		).then((response) => response.json());
	} catch (ex) {
		console.log('Oops! Error while processing your service request.');
		console.log('Error: ' + ex);
	}
}

export default BaseConnector;
