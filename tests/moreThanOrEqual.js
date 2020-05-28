const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;


const input = {
	five: 5,
};

const v = Validator.create(input)
const tests = [
	['5 ≥ 6', {moreThanOrEqual: 6}, false],
	['5 ≥ 5', {moreThanOrEqual: 5}, true],
	['5 ≥ 4', {moreThanOrEqual: 4}, true],
];






describe('We check moreThanOrEqual on ' + input.five, function () {
	tests.map(([txt, rule, exp]) => {
		it( txt + ': ' + exp, function() {
			const res = v.setRules([{
				five: rule
			}]).validate();
			assert.strictEqual(res, exp);
		});
	});

});