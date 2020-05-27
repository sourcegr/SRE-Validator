const assert = require('assert');
const isNumber = require('../src/checks/tools/isNumber');

describe('check isNumber:', function() {
	it ('5e3: should be number', function() {
		assert.strictEqual(isNumber(5e3), true);
	});

	it ("0xff should be number", function() {
		assert.strictEqual(isNumber(0xff), true);
	});

	it ("-1.1 should be number", function() {
		assert.strictEqual(isNumber(-1.1), true);
	});

	it ("0 should be number", function() {
		assert.strictEqual(isNumber(0), true);
	});

	it ("1 should be number", function() {
		assert.strictEqual(isNumber(1), true);
	});

	it ("1.1 should be number", function() {
		assert.strictEqual(isNumber(1.1), true);
	});

	it ("10 should be number", function() {
		assert.strictEqual(isNumber(10), true);
	});

	it ("10.10 should be number", function() {
		assert.strictEqual(isNumber(10.10), true);
	});

	it ("100 should be number", function() {
		assert.strictEqual(isNumber(100), true);
	});

	it ("'-1.1' should be number", function() {
		assert.strictEqual(isNumber('-1.1'), true);
	});

	it ("'0' should be number", function() {
		assert.strictEqual(isNumber('0'), true);
	});

	it ("'012' should be number", function() {
		assert.strictEqual(isNumber('012'), true);
	});

	it ("'0xff' should be number", function() {
		assert.strictEqual(isNumber('0xff'), true);
	});

	it ("'1' should be number", function() {
		assert.strictEqual(isNumber('1'), true);
	});

	it ("'1.1' should be number", function() {
		assert.strictEqual(isNumber('1.1'), true);
	});

	it ("'10' should be number", function() {
		assert.strictEqual(isNumber('10'), true);
	});

	it ("'10.10' should be number", function() {
		assert.strictEqual(isNumber('10.10'), true);
	});

	it ("'100' should be number", function() {
		assert.strictEqual(isNumber('100'), true);
	});

	it ("'5e3' should be number", function() {
		assert.strictEqual(isNumber('5e3'), true);
	});

	it ("parseInt('012') should be number", function() {
		assert.strictEqual(isNumber(parseInt('012')), true);
	});

	it ("parseFloat('012') should be number", function() {
		assert.strictEqual(isNumber(parseFloat('012')), true);
	});

	it("Infinity should be a number", function() {
		assert.strictEqual(isNumber(Infinity), true);
	});

	it("NaN should NOT be a number", function() {
		assert.strictEqual(isNumber(NaN), false);
	});

	it("null should NOT be a number", function() {
		assert.strictEqual(isNumber(null), false);
	});

	it("undefined should NOT be a number", function() {
		assert.strictEqual(isNumber(undefined), false);
	});

	it("'' should NOT be a number", function() {
		assert.strictEqual(isNumber(''), false);
	});

	it("'   ' should NOT be a number", function() {
		assert.strictEqual(isNumber('   '), false);
	});

	it("'foo' should NOT be a number", function() {
		assert.strictEqual(isNumber('foo'), false);
	});

	it("'1foo' should NOT be a number", function() {
		assert.strictEqual(isNumber('1foo'), false);
	});

	it("Array[1] should NOT be a number", function() {
		assert.strictEqual(isNumber([1]), false);
	});

	it("Array[] should NOT be a number", function() {
		assert.strictEqual(isNumber([]), false);
	});

	it("function () {} should NOT be a number", function() {
		assert.strictEqual(isNumber(function () {
		}), false);
	});

	it("{} should NOT be a number", function() {
		assert.strictEqual(isNumber({}), false);
	});
	it("Set should NOT be a number", function() {
		const x = new Set(); assert.strictEqual(isNumber(x), false);
	});
	it("Map should NOT be a number", function() {
		const x = new Map(); assert.strictEqual(isNumber(x), false);
	});
});
