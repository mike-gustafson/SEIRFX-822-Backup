function isPalindrome(string) {
	const letters = string.split('');
	for (let i = 0; i < string.length / 2; i++) {
		if (letters[i] !== letters[letters.length - 1 - i]) {
			return false;
		}
	}
	return true;
	// const first = string.slice(0, string.length / 2);
	// const second = string
	// 	.slice(string.length / 2, string.length)
	// 	.split('')
	// 	.reverse()
	// 	.join('');
	// return second;
	// if (first === second) {
	// 	return true;
	// } else {
	// 	return false;
	// }
}

module.exports = isPalindrome;
