function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

//export these funtions - if more than one, we need object
module.exports = {
    add, 
    sub, 
    multiply, 
    divide
}