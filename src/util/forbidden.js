/**
 * Standard forbidden response to a request
 *
 * @param {Response} res
 * @returns
 */
const forbidden = (res) => res.status(403);

export default forbidden;
