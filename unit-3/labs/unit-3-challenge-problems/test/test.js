let tryRequire = require('../utils/try_require.js');
let assert = require('assert');

let isPalindrome = tryRequire('../problems/palindrome.js');
let isPalindrome1 = tryRequire('../problems/palindrome_1.js');
let isPalindrome2 = tryRequire('../problems/palindrome_2.js');
let isPalindrome3 = tryRequire('../problems/palindrome_3.js');
let isPalindrome4 = tryRequire('../problems/palindrome_4.js');

// Original solution

describe('isPalindrome()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome('abcdcba'), true);
	});
});

describe('isPalindrome()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome('a'), true);
	});
});

describe('isPalindrome()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome('ab'), false);
	});
});

describe('isPalindrome()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome('aba'), true);
	});
});

describe('isPalindrome()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome('abb'), false);
	});
});

describe('isPalindrome()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome('abba'), true);
	});
});

describe('isPalindrome()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome('abcdefghhgfedcba'), true);
	});
});

describe('isPalindrome()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome('abcdefghihgfedcba'), true);
	});
});

describe('isPalindrome()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome('abcdefghihgfeddcba'), false);
	});
});

// Solution 1
describe('isPalindrome1()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome1('abcdcba'), true);
	});
});

describe('isPalindrome1()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome1('a'), true);
	});
});

describe('isPalindrome1()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome1('ab'), false);
	});
});

describe('isPalindrome1()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome1('aba'), true);
	});
});

describe('isPalindrome1()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome1('abb'), false);
	});
});

describe('isPalindrome1()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome1('abba'), true);
	});
});

describe('isPalindrome1()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome1('abcdefghhgfedcba'), true);
	});
});

describe('isPalindrome1()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome1('abcdefghihgfedcba'), true);
	});
});

describe('isPalindrome1()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome1('abcdefghihgfeddcba'), false);
	});
});

// Solution 2
describe('isPalindrome2()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome2('abcdcba'), true);
	});
});

describe('isPalindrome2()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome2('a'), true);
	});
});

describe('isPalindrome2()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome2('ab'), false);
	});
});

describe('isPalindrome2()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome2('aba'), true);
	});
});

describe('isPalindrome2()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome2('abb'), false);
	});
});

describe('isPalindrome2()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome2('abba'), true);
	});
});

describe('isPalindrome2()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome2('abcdefghhgfedcba'), true);
	});
});

describe('isPalindrome2()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome2('abcdefghihgfedcba'), true);
	});
});

describe('isPalindrome2()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome2('abcdefghihgfeddcba'), false);
	});
});

// Solution 3
describe('isPalindrome3()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome3('abcdcba'), true);
	});
});

describe('isPalindrome3()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome3('a'), true);
	});
});

describe('isPalindrome()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome('ab'), false);
	});
});

describe('isPalindrome3()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome3('aba'), true);
	});
});

describe('isPalindrome3()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome3('abb'), false);
	});
});

describe('isPalindrome3()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome3('abba'), true);
	});
});

describe('isPalindrome3()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome3('abcdefghhgfedcba'), true);
	});
});

describe('isPalindrome3()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome3('abcdefghihgfedcba'), true);
	});
});

describe('isPalindrome3()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome3('abcdefghihgfeddcba'), false);
	});
});

// Solution 4
describe('isPalindrome4()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome4('abcdcba'), true);
	});
});

describe('isPalindrome4()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome4('a'), true);
	});
});

describe('isPalindrome4()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome4('ab'), false);
	});
});

describe('isPalindrome4()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome4('aba'), true);
	});
});

describe('isPalindrome4()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome4('abb'), false);
	});
});

describe('isPalindrome4()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome4('abba'), true);
	});
});

describe('isPalindrome4()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome4('abcdefghhgfedcba'), true);
	});
});

describe('isPalindrome4()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome4('abcdefghihgfedcba'), true);
	});
});

describe('isPalindrome4()', function () {
	it('should return a boolean representing whether the string is a palindrome', function () {
		assert.equal(isPalindrome4('abcdefghihgfeddcba'), false);
	});
});
