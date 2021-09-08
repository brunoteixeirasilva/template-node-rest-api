import Authentication from 'controllers/Authentication';
import Default from 'controllers/Default';
import ErrorManagement from 'controllers/ErrorManagement';
// TODO: import YOUR_MODULE_ROUTER from './YOUR_MODULE_ROUTER';

const Router = (app) => {
	try {
		Default(app);

		// TODO: ADD YOUR_MODULE_ROUTER(app);
		Authentication(app);
	} catch (ex) {
		ErrorManagement(app);
	}
};

export default Router;
