function catBuilder(name, color, toys) {
    
    console.log(arguments);
}

catBuilder('Garfield', 'blue', ['furball', 'stuff animal']);

function add(num1, num2) {
    let result = 0;
    if (arguments.length > 2) {
        for (key in arguments) {
            result += arguments[key]
        }
        return result;
    }

    return num1 + num2;
    // console.log(arguments);
}

console.log('result of add', add(1,2,3,4,5));
console.log('result of add', add(3,4));