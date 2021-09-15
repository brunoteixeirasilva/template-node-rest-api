// System-wide controllers
import Default from 'controllers/Default';
import ErrorManagement from 'controllers/ErrorManagement';
import Authentication from 'controllers/Authentication';

// Model-based controllers
import Comment from 'controllers/Comment';
import Movie from 'controllers/Movie';
import User from 'controllers/User';
import Token from 'controllers/Token';
// TODO: import YOUR_MODULE_ROUTER from './YOUR_MODULE_ROUTER';

const Router = (app) => {
	try {
		// First controller (safety purposes)
		Authentication(app);

		// Our controllers
		Comment(app);
		Movie(app);
		User(app);
		Token(app);
		// TODO: ADD YOUR_MODULE_ROUTER(app);

		// Do not mess around with this :)
		Default(app);
	} catch (ex) {
		ErrorManagement(app, ex);
	}
};

export default Router;
