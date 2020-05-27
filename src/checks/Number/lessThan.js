const isNumber = require('../tools/isNumber');

/**
 * lessThan, check if input is less than a number
 *
 * @param {*} input - the input (will be casted to Number()
 *
 * @param {[number, ?boolean]|number} params - the number to check against, or an array with the number and a Boolean to indicate whether to incude nuber or not
 *
 * @return {boolean} result - true / false
 */
module.exports = function lessThan (input, params) {
	params = Array.isArray(params) ? params : [params, false];
	if (params.length === 1) params = [...params, false];

	let [limit, include_limit] = params;

	input = Number(input);
	// dd(input + (include_limit ? '≤': '<') + limit);
	return isNumber(input) && (include_limit ?
		input <= limit :
		input < limit);
}