let tryRequire = require('../utils/try_require.js');
let assert = require('assert');
let isMonotonic = tryRequire('../problems/monotonic-array.js');

describe('isMonotonic() 1', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]), true);
	});
});

describe('isMonotonic() 2', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([]), true);
	});
});

describe('isMonotonic() 3', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([1]), true);
	});
});

describe('isMonotonic() 4', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([1, 2]), true);
	});
});

describe('isMonotonic() 5', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([2, 1]), true);
	});
});

describe('isMonotonic() 6', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([1, 5, 10, 1100, 1101, 1102, 9001]), true);
	});
});

describe('isMonotonic() 7', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([-1, -5, -10, -1100, -1101, -1102, -9001]), true);
	});
});

describe('isMonotonic() 8', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001]), false);
	});
});


describe('isMonotonic() 9', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([1, 2, 0]), false);
	});
});


describe('isMonotonic() 10', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11]), false);
	});
});

describe('isMonotonic() 11', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11]), false);
	});
});

describe('isMonotonic() 12', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11]), true);
	});
});

describe('isMonotonic() 13', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([-1, -1, -1, -1, -1, -1, -1, -1]), true);
	});
});

describe('isMonotonic() 14', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([1, 2, -1, -2, -5]), false);
	});
});

describe('isMonotonic() 15', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([-1, -5, 10]), false);
	});
});

describe('isMonotonic() 16', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([2, 2, 2, 1, 4, 5]), false);
	});
});

describe('isMonotonic() 17', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([1, 1, 1, 2, 3, 4, 1]), false);
	});
});

describe('isMonotonic() 18', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([1, 2, 3, 3, 2, 1]), false);
	});
});

describe('isMonotonic() 19', function () {
	it('should return a boolean', function () {
		assert.deepEqual(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]), true);
	});
});