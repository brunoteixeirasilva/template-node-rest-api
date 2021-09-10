/**
 * Internal use token fragments generator function
 * ref from
 * https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details
 *
 *
 * @returns {string} token with 36bytes
 */
const rand = function () {
	return Math.random().toString(36).substr(2); // remove `0.`
};

/**
 * Generates a random token for testing purposes
 *
 * @returns {string} generated token
 */
const generateToken = function () {
	return `${rand() + '-' + rand() + '-' + rand()}`; // to make it longer
};

export default generateToken;
