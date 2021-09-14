import { Movies } from 'database';
// import deleted from 'util/deleted';
import forbidden from 'util/forbidden';
import { HttpMessage, Response } from 'models';

// For giving more examples on abstraction
const modelName = 'movie';

/**
 * Controller for accessing Movies
 *
 * @param {Express.Application} app
 */
const Movie = (app) => {
	/**
	 * Gets All of the movies from the database
	 */
	app.get(`/${modelName}`, (req, res) => {
		// TODO: implementation of req.params / req.body reading
		// TODO: include password validation process

		// Fluency on reading: To be sent new
		//                     Response containing
		//                     movies data-set
		return res.send(new Response(Movies));
	});
	/**
	 * Gets A SPECIFIC movie from the database
	 */
	app.get(`/${modelName}/:movieId`, (req, res) => {
		// TODO: implementation of req.params / req.body reading
		// TODO: include password validation process

		if (!!req && !!req.params) {
			const foundMovie = Movies.find(
				(item) => item.id === req.params.movieId
			);

			if (!!foundMovie) {
				// Fluency on reading: To be sent new
				//                     Response containing
				//                     movies data-set
				return res.send(new Response(foundMovie));
			}
		}

		return forbidden(res).send(new HttpMessage('Sorry, invalid movie.'));
	});
};

export default Movie;
