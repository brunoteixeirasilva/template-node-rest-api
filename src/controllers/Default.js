/**
 * Controller for Default (base-url) methods
 *
 * @param {Express.Application} app
 */
const Default = (app) => {
	app.get('/*', (req, res) => {
		return res.send('Hi, welcome to a testing <b>RESTful</b> API.');
	});
};

export default Default;
