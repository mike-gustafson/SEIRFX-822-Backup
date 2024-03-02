function isPalindrome(string) {
	const letters = string.split('');
	for (let i = 0; i < string.length / 2; i++) {
		if (letters[i] !== letters[letters.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

module.exports = isPalindrome;
