import { Tokens } from 'database';
// import deleted from 'util/deleted';
import forbidden from 'util/forbidden';
import { HttpMessage, Response } from 'models';

/**
 * Controller for accessing Tokens
 *
 * @param {Express.Application} app
 */
const Token = (app) => {
	app.get('/token', (req, res) => {
		// TODO: implementation of req.params / req.body reading
		// TODO: include password validation process

		// Fluency on reading: To be sent new
		//                     Response containing
		//                     tokens data-set
		return res.send(new Response(Tokens));
	});
	app.get('/token/:tokenId', (req, res) => {
		// TODO: implementation of req.params / req.body reading
		// TODO: include password validation process

		if (!!req && !!req.params) {
			const foundToken = Tokens.find(
				(item) => item.id === parseInt(req.params.tokenId)
			);

			if (!!foundToken) {
				// Fluency on reading: To be sent new
				//                     Response containing
				//                     tokens data-set
				return res.send(new Response(foundToken));
			}
		}

		return forbidden(res).send(new HttpMessage('Sorry, invalid token.'));
	});
};

export default Token;
