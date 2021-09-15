// import deleted from 'util/deleted';
import jsonToClass from '@mappers/jsonToClass';
import DummyAPI from '@connectors/DummyAPI';
// import forbidden from 'util/forbidden';
import { Response, Comment } from 'models';

// For giving more examples on abstraction
const modelName = 'comment';

/**
 * Controller for accessing Comments
 *
 * @param {Express.Application} app
 */
const CommentController = (app) => {
	const service = new DummyAPI();

	/**
	 * Gets All of the Comments from the database
	 */
	app.get(`/${modelName}`, (req, res) => {
		// TODO: implementation of req.params / req.body reading
		// TODO: include password validation process

		// Fluency on reading: To be sent new
		//                     Response containing
		//                     Comments data-set
		service.Comments.get().then((result) => {
			// UNCOMMENT FOR TESTING CONSOLE DISPLAY
			// console.log(result.data);

			const commentSet =
				!!result.data && Array.isArray(result.data)
					? result.data.map((item) => jsonToClass(Comment, item))
					: [];

			return res.send(new Response(commentSet));
		});
	});
	// TODO: implement the create (POST) method based on documentation from https://dummyapi.io/docs/comment
	/**
	 * NOT AVAILABLE SPECIFIC ITEM LIST
	 * Gets A SPECIFIC Comment from the database
	 */
	// app.get(`/${modelName}/:commentId`, (req, res) => {
	// 	// TODO: implementation of req.params / req.body reading
	// 	// TODO: include password validation process

	// 	if (!!req && !!req.params) {
	// 		const foundComment = Comments.find(
	// 			(item) => item.id === req.params.commentId
	// 		);

	// 		if (!!foundComment) {
	// 			// Fluency on reading: To be sent new
	// 			//                     Response containing
	// 			//                     Comments data-set
	// 			return res.send(new Response(foundComment));
	// 		}
	// 	}

	// 	return forbidden(res).send(new HttpMessage('Sorry, invalid comment.'));
	// });
};

export default CommentController;
