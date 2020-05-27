const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;


const input = {
	five: 5,
};

const v = Validator.create(input)
const tests = [
	['1 - 2', {notBetween: [1, 2, false]}, true],
	['1 - 2 inclusive', {notBetween: [1, 2]}, true],
	['6 - 7', {notBetween: [6, 7, false]}, true],
	['6 - 7 inclusive', {notBetween: [6, 7]}, true],
	['2 - 1', {notBetween: [2, 1, false]}, true],
	['2 - 1 inclusive', {notBetween: [2, 1]}, true],
	['4 - 6', {notBetween: [4, 6, false]}, false],
	['4 - 6 inclusive', {notBetween: [4, 6]}, false],
	['4 - 5 inclusive', {notBetween: [4, 5]}, false],
	['5 - 6 inclusive', {notBetween: [5, 6]}, false],
	['5 - 5', {notBetween: [5, 5, false]}, true],
	['5 - 5 inclusive', {notBetween: [5, 5]}, false]
];

describe('notBetween:', function () {
	tests.map(([txt, rule, exp]) => {
		it( txt + ': ' + exp, function() {
			const res = v.setRules([{
				five: rule
			}]).validate();
			assert.strictEqual(res, exp);
		});
	});
});