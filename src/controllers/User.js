import Users from 'database/Users';
import deleted from 'util/deleted';
import forbidden from 'util/forbidden';
import { HttpMessage, Response } from 'models';

// For giving more examples on abstraction
const modelName = 'user';

/**
 * Controller for accessing Users
 *
 * @param {Express.Application} app
 */
const User = (app) => {
	app.get(`/${modelName}`, (req, res) => {
		// TODO: implementation of req.params / req.body reading
		// TODO: include password validation process

		// Fluency on reading: To be sent new
		//                     Response containing
		//                     Users data-set
		return res.send(new Response(Users.map((item) => item.pipe())));
	});
	app.get(`/${modelName}/:userId`, (req, res) => {
		// TODO: implementation of req.params / req.body reading
		// TODO: include password validation process

		if (!!req && !!req.params) {
			const foundUser = Users.find(
				(item) => item.id === parseInt(req.params.userId)
			);

			if (!!foundUser) {
				// Fluency on reading: To be sent new
				//                     Response containing
				//                     Users data-set
				return res.send(new Response(foundUser.pipe()));
			}
		}

		return forbidden(res).send(new HttpMessage('Sorry, invalid user ID.'));
	});
	app.delete(`/${modelName}/:userId`, (req, res) => {
		if (
			!!req &&
			!!req.params &&
			typeof req.params.userId === 'number' &&
			Users.find((item) => item.id === parseInt(req.params.userId))
		) {
			return deleted(res).send(new Response('OK', 204));
		}

		return forbidden(res).send(new HttpMessage('Sorry, invalid user ID.'));
	});
};

export default User;
