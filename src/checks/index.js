const between = require('./Number/between');
const notBetween = require('./Number/notBetween');
const lessThan = require('./Number/lessThan');
const moreThan = require('./Number/moreThan');
const negative = require('./Number/negative');
const positive = require('./Number/positive');
const nonZero = require('./Number/nonZero');
const minLength = require('./String/minLength');
const maxLength = require('./String/maxLength');
const required = require('./required');

module.exports = {
	required,

	between,
	notBetween,
	lessThan,
	moreThan,
	negative,
	positive,
	nonZero,

	minLength,
	maxLength,
}
