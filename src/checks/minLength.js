/**
 * minLength, check for min Length
 *
 * @param {string} input - the input
 *
 * @param {{max_length:number, include_limits:boolean}|number} params - the min length of the input, or an array with min length and a Boolean to indecate whether to incude limits or not
 *
 * @return {boolean} result - true / false
 */
module.exports = function minLength (input, params) {
	input = String(input);
	params = Array.isArray(params) ? params : [params, false];

	const [l, include_limits] = params;

	return include_limits ?
		input.length >= l :
		input.length > l;
}