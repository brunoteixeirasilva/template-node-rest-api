var admin = require('firebase-admin');

var serviceAccount = require('../FIREBASE_JSON_CONFIG_FILE');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://FIREBASE_APP.firebaseio.com',
	serviceAccountId: 'FIREBASE_SERVICE_ACCOUNT'
});

export default admin;
