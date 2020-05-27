const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;


const input = {
	five: 5,
};

const v = Validator.create(input)
const tests = [
	['5 > 6', {moreThan: 6}, false],
	['5 > 5', {moreThan: 5}, false],
	['5 > 4', {moreThan: 4}, true],
	['5 ≥ 6', {moreThan: [6, true]}, false],
	['5 ≥ 5', {moreThan: [5, true]}, true],
	['5 ≥ 4', {moreThan: [4, true]}, true],
];






describe('We check moreThan on ' + input.five, function () {
	tests.map(([txt, rule, exp]) => {
		it( txt + ': ' + exp, function() {
			const res = v.setRules([{
				five: rule
			}]).validate();
			assert.strictEqual(res, exp);
		});
	});

});