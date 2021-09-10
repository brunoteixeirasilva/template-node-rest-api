import Default from 'controllers/Default';
import ErrorManagement from 'controllers/ErrorManagement';
import Authentication from 'controllers/Authentication';
import User from 'controllers/User';
import Token from 'controllers/Token';
// TODO: import YOUR_MODULE_ROUTER from './YOUR_MODULE_ROUTER';

const Router = (app) => {
	try {
		Authentication(app);
		User(app);
		Token(app);
		// TODO: ADD YOUR_MODULE_ROUTER(app);

		Default(app);
	} catch (ex) {
		ErrorManagement(app, ex);
	}
};

export default Router;
