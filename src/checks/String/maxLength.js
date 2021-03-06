const minLength = require('./minLength');
/**
 * maxLength, check for max Length
 *
 * @param {string} input - the input
 *
 * @param {[number, ?boolean]|number} params - the max length of the input, or an array with max length and a Boolean to indicate whether to incude limits or not
 *
 * @return {boolean} result - true / false
 */
module.exports = function maxLength (input, params) {
	params = Array.isArray(params) ? params : [params, false];
	if (params.length === 1) params = [...params, false];
	params[1] = !params[1];

	return !minLength(input, params);
}