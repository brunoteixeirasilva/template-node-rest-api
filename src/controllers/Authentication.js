import { Tokens, Users } from 'database';
import { Token } from 'models';
import deleted from 'util/deleted';
import forbidden from 'util/forbidden';
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
				// Now, based on the user ID,
				// We need to find the token assigned to it
				let usableToken = Tokens.find(
					(token) => token.userId === foundUser.id
				);

				if (!usableToken || usableToken.revoked) {
					// Fluency on reading: To be sent new
					//                     Response containing
					//                     Users data-set + token assigned
					// Will create a new token to this user
					usableToken = new Token(foundUser.id);
					Tokens.push(usableToken);
				}

				return res.send(
					new Response({ user: foundUser, token: usableToken.id })
				);
			}
		}

		return forbidden(res).send({
			message: 'Sorry, invalid authentication.',
		});
	});
	app.delete('/auth/:token', (req, res) => {
		let foundTokenIndex, foundToken;

		if (!!req && !!req.params) {
			foundToken = Tokens.find((item, index) => {
				if (item.id === req.params.token && !item.revoked) {
					foundTokenIndex = index;

					return true;
				}
			});

			if (!!foundToken) {
				console.log(
					'* Killing auth for token: ' + Tokens[foundTokenIndex].id
				);

				// Flags the token revoked
				Tokens[foundTokenIndex].revoke();

				return deleted(res).send();
				// return deleted(res).send(new Response('OK', 204));
			}
		}

		return forbidden(res).send({ message: 'Sorry, invalid token.' });
	});
};

export default Authentication;
