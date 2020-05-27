const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;


const input = {
	one: 1,
	minus_one: -1,
	zero: 0
};

const v = Validator.create(input)

describe('We check for negative', function () {
	it('1 negative false', function() {
		const res = v.setRules([{
			one: 'negative'
		}]).validate();
		assert.strictEqual(res, false);
	});
	it('0 negative false', function() {
		const res = v.setRules([{
			zero: 'negative'
		}]).validate();
		assert.strictEqual(res, false);
	});
	it('-1 negative true', function() {
		const res = v.setRules([{
			minus_one: 'negative'
		}]).validate();
		assert.strictEqual(res, true);
	});
	it('1 negative or zero false', function() {
		const res = v.setRules([{
			one: {negative: true}
		}]).validate();
		assert.strictEqual(res, false);
	});
	it('0 negative or zero true', function() {
		const res = v.setRules([{
			zero: {negative: true}
		}]).validate();
		assert.strictEqual(res, true);
	});
	it('-1 negative or zero true', function() {
		const res = v.setRules([{
			minus_one: {negative: true}
		}]).validate();
		assert.strictEqual(res, true);
	});
});