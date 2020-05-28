const isNumber = require('../tools/isNumber');
/**
 * notEqualTo checks if input is number and not zero
 *
 * @param {*} input - the input (will be casted to Number)
 * @param {?number|?string} check - the number to check against (default 0)
 *
 * @return {boolean}
 *
 */
module.exports = function notEqualTo(input, check = 0) {
	if (!isNumber(check)) throw new Error('check should be a number');
	input = Number(input);
	return input !== check ;
}

