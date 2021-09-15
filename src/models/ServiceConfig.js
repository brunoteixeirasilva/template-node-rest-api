/**
 * Used as an abstraction for supplying fetch/axios requests to be built up
 *
 * @author brunoteixeirasilva
 * @version 1.0.0
 */
class ServiceConfig {
	baseURL = '';
	fetchConfig = {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
		},
	};
	defaultURLParams = {};

	constructor(baseURL, additionalConfig = {}, URLParams = {}) {
		this.baseURL = baseURL;
		this.fetchConfig = { ...this.fetchConfig, ...additionalConfig };
		this.defaultURLParams = { ...this.defaultURLParams, ...URLParams };
	}
}

export default ServiceConfig;
