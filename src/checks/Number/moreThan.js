const lessThan = require('./lessThan');

/**
 * moreThan, check if input is more than a number
 *
 * @param {*} input - the input (will be casted to Number()
 *
 * @param {[number, ?boolean]|number} params - the number to check against, or an array with the number and a Boolean to indicate whether to incude nuber or not
 *
 * @return {boolean} result - true / false
 */
module.exports = function moreThan (input, params) {
	params = Array.isArray(params) ? params : [params, false];
	if (params.length === 1) params = [...params, false];

	return lessThan(params[0], [input, params[1]]);
}