// DISCLAIMER: Please, head to https://dummyapi.io/ and follow these steps:
//				1. Create your account
//				2. Generate your app-id
//				3. Replace your app-id within the const *dummyApiAppID*

import BaseConnector from './BaseConnector';
import { ServiceConfig } from 'models';

const dummyApiAppID = '61415d1b835ef856e3c5aeb1'; // Your API ID from https://dummyapi.io/account

const serviceConfig = new ServiceConfig(
	'https://dummyapi.io/data/v1/',
	{
		method: 'GET',
		headers: {
			'app-id': dummyApiAppID,
			'content-type': 'application/json',
		},
	},
	{
		page: 1,
		limit: 10,
	}
);

class DummyAPI {
	Comments = {
		get: () => {
			return BaseConnector('comment', serviceConfig);
		},
	};
}

export default DummyAPI;
