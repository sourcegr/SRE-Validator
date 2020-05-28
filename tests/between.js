const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;

const input = {
	five: 5,
};

const v = Validator.create(input)
const tests = [
	['1 < 5 < 2', {between: [1, 2, false]}, false],
	['1 ≤ 5 ≤ 2', {between: [1, 2]}, false],
	['6 < 5 < 7', {between: [6, 7, false]}, false],
	['6 ≤ 5 ≤ 7', {between: [6, 7]}, false],
	['2 < 5 < 1', {between: [2, 1, false]}, false],
	['2 ≤ 5 ≤ 1', {between: [2, 1]}, false],
	['4 < 5 < 6', {between: [4, 6, false]}, true],
	['4 ≤ 5 ≤ 6', {between: [4, 6]}, true],
	['4 ≤ 5 ≤ 5', {between: [4, 5]}, true],
	['5 ≤ 5 ≤ 6', {between: [5, 6]}, true],
	['5 < 5 < 5', {between: [5, 5, false]}, false],
	['5 ≤ 5 ≤ 5', {between: [5, 5]}, true]
];

describe('between:', function () {
	tests.map(([txt, rule, exp]) => {
		it( txt + ': ' + exp, function() {
			const res = v.setRules([{
				five: rule
			}]).validate();
			assert.strictEqual(res, exp);
		});
	});
});