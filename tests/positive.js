const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;


const input = {
	one: 1,
	minus_one: -1,
	zero: 0
};

const v = Validator.create(input)

describe('We check for positive', function () {
	it('1 positive true', function() {
		const res = v.setRules([{
			one: 'positive'
		}]).validate();
		assert.strictEqual(res, true);
	});
	it('0 positive false', function() {
		const res = v.setRules([{
			zero: 'positive'
		}]).validate();
		assert.strictEqual(res, false);
	});
	it('-1 positive false', function() {
		const res = v.setRules([{
			minus_one: 'positive'
		}]).validate();
		assert.strictEqual(res, false);
	});
	it('1 positive or zero true', function() {
		const res = v.setRules([{
			one: {positive: true}
		}]).validate();
		assert.strictEqual(res, true);
	});
	it('0 positive or zero true', function() {
		const res = v.setRules([{
			zero: {positive: true}
		}]).validate();
		assert.strictEqual(res, true);
	});
	it('-1 positive or zero false', function() {
		const res = v.setRules([{
			minus_one: {positive: true}
		}]).validate();
		assert.strictEqual(res, false);
	});
});