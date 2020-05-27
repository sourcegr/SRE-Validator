/**
 * minLength, check for min Length
 *
 * @param {string} input - the input
 *
 * @param {[number, ?boolean]|number} params - the min length of the input, or an array with min length and a Boolean to indicate whether to incude limits or not
 *
 * @return {boolean} result - true / false
 */
module.exports = function minLength (input, params) {
	params = Array.isArray(params) ? params : [params, false];

	if (params.length === 1) params = [...params, true];
	let [len, include_limits] = params;

	len = Number(len);
	input = String(input);

	return include_limits ?
		input.length >= len :
		input.length > len;
}