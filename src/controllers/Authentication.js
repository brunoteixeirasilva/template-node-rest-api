import Users from 'database/Users';
import Response from '/models/Response';

/**
 * Controller for Authentication methods
 *
 * @param {Express.Application} app
 */
const Authentication = (app) => {
	app.post('/auth', (req, res) => {
		// TODO: implementation of req.params / req.body reading
		// TODO: include password validation process

		if (!!req && !!req.body) {
			const foundUser = Users.find(
				(item) => item.email === req.body.email
			);

			if (!!foundUser) {
				// Fluency on reading: To be sent new
				//                     Response containing
				//                     Users data-set
				return res.send(new Response(foundUser));
			}
		}

		return res
			.status(403)
			.send({ message: 'Sorry, invalid authentication.' });
	});
	app.delete('/auth/:token', (req, res) => {
		if (
			!!req &&
			!!req.params &&
			Users.find((item) => item.token === req.params.token)
		) {
			return res.send(new Response('OK', 204));
		}

		return res.status(403).send({ message: 'Sorry, invalid token.' });
	});
};

export default Authentication;
