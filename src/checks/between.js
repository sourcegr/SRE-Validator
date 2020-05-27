const isNumber = require('./tools/isNumber');

/**
 * between checks if the number is between two values
 * @param {number} input - the number to check against
 * @param {[number, number, ?boolean]} params - An array with the [min, max, include_limits=true] values
 *
 * @return {boolean} true if the number is between the limits
 *
 */
module.exports = function between (input, params) {
	if (!Array.isArray(params) || params.length < 2 || params.length > 3) {
		throw new Error('minLength parameter should be an array with 2 or three members');
	}

	if (params.length === 2) params = [...params, true];
	let [min, max, include_limits] = params;

	input = Number(input);
	min = Number(min);
	max = Number(max);

	return isNumber(input) && include_limits ?
		min <= input && input <= max :
		min < input && input < max ;
}