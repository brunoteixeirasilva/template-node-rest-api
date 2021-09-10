import ErrorModel from 'models/Error';

/**
 * Controller for system-level error management
 *
 * @param {Express.Application} app
 */
const ErrorManagement = (app, error) => {
	// This should return an error purely to the consumer
	return new ErrorModel('An error ocurred. ' + error.toString());
	// app
	// 	.status(500)
	// 	.send(new ErrorModel('An error ocurred. ' + error.toString()));
	// So, what is wrong in this line?
	// return new Error('An error ocurred');
};

export default ErrorManagement;
