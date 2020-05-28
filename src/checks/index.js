const between = require('./Number/between');
const notBetween = require('./Number/notBetween');
const lessThan = require('./Number/lessThan');
const lessThanOrEqual = require('./Number/lessThanOrEqual');
const moreThan = require('./Number/moreThan');
const moreThanOrEqual = require('./Number/moreThanOrEqual');
const negative = require('./Number/negative');
const positive = require('./Number/positive');
const notZero = require('./Number/notZero');

const minLength = require('./String/minLength');
const maxLength = require('./String/maxLength');
const exactLength = require('./exactLength');
// const startsWith = require('./startsWith');
// const endsWith = require('./endsWith');
// const contains = require('./contains');
// const alpha = require('./alpha');
// const alphanum = require('./alphanum');
// const alphanumdash = require('./alphanumdash');

const required = require('./required');

module.exports = {
	required,

	between,
	notBetween,
	lessThan,
	lessThanOrEqual,
	moreThan,
	moreThanOrEqual,
	negative,
	positive,
	notZero,

	minLength,
	maxLength,
	exactLength,
}
