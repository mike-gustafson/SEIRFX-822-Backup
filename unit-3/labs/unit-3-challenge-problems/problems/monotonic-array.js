function isMonotonic(array) {
    if (array.length <= 2) return true;  // length of array being 2 or less
    let direction = array[1] - array[0]; // determine a direction ---> -4

    for (let i = 2; i < array.length; i++) {
        if (direction === 0) {
            direction = array[i] - array[i - 1]; // getting another direction
            continue;
        }
        if (breaksDirection(direction, array[i - 1], array[i])) {
            return false; // if direction breaks, then the array is not monotonic
        }
    }
    // once we iterate through the for loop and false is not returned, 
    // then we return true; which makes this array monotonic.
    return true;
}

function breaksDirection(direction, previousInt, currentInt) {
    const difference = currentInt - previousInt;
    if (direction > 0) return difference < 0;
    return difference > 0;
}

module.exports = isMonotonic;

// test case 1
// array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]