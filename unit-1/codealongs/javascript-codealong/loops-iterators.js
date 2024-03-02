console.log('Loops and Iterators');

// while loop
// 1. We are going to make a rocket countdown

let countDown = 10;
while (countDown >= 0) {
    console.log('lift off in', countDown);

    if (countDown === 0) {
        console.log('Takeoff 🚀');
    }

    // so that we don't an infinite loop, what do we to solve that?
    countDown--;
}

const numbers = [12, 23, 34, 45, 56, 67, 78];

// use for loop print each number
for (let i = 0; i < numbers.length; i++) {
    // print each number - create an intermediate variable
    let keya = numbers[i];
    console.log(i, '-', keya);
}
// this for loop is going backwards
for (let i = numbers.length - 1; i >= 0; i--) {
    // print each number - create an intermediate variable
    let keya = numbers[i];
    console.log(i, '-', keya);
}

// exercise - Create an array that takes all numbers inside
// of "numbers" array and adds 10 to each number. 
// Print the new array of numbers
const result = [];
for (let i = 0; i < numbers.length; i++) {
    // create a variable
    let element = numbers[i];
    // create a variable that store the result of adding 10 to element 
    let newNumber = element + 10;
    // push the variable into the result array
    result.push(newNumber);
}

console.log('array of new numbers', result);

// const resultTwo = [];
// for (let i = 0; i < numbers.length; i++) {
//     resultTwo.push(numbers[i] + 10);
// }

// console.log('array of new numbers', resultTwo);

/**
 * [use for loop] 
 * Create an array of prime numbers that include the first 6 prime numbers 
 * */

/**
 * [use while loop] 
 * const nums = [18, 27, 33, 66, 99, 150, 300];
 * Create an array of numbers that give the result of dividing each number in array by 3.
 * */

/**
 * [use for loop] 
 * const nums = [18, 27, 33, 66, 99, 150, 300];
 * Create an array of numbers that give the result of dividing each number in array by 3.
 * */

/**
 * [use for loop] 
 * const players = [
    {
        firstName: 'John',
        lastName: 'Smith',
        position: 'guard',
        number: 12
    },
    {
        firstName: 'Anthony',
        lastName: 'Smith',
        position: 'guard',
        number: 1
    }, 
    {
        firstName: 'Kevin',
        lastName: 'Smith',
        position: 'guard',
        number: 3
    }
]
 * Create a variable that gives the result of add all numbers inside each object.
 * Answer should be 16 .
 * */

/**
 * [use for loop] 
 const humans = [
     {
         firstName: 'Moe',
         lastName:  'Doe',
         age: 31,
         street: '1234 Park St'
     },
     {
         firstName: 'Larry',
         lastName:  'Doe',
         age: 36,
         street: '1234 Spark St'
     },
     {
         firstName: 'Curly',
         lastName:  'Doe',
         age: 36,
         street: '1239 Park St'
     },
     {
         firstName: 'Jane',
         lastName:  'Doe',
         age: 32,
         street: '1239 Spark St'
     },
     {
         firstName: 'Emma',
         lastName:  'Doe',
         age: 34,
         street: '1235 Spark St'
     },
     {
         firstName: 'Elizabeth',
         lastName:  'Doe',
         age: 36,
         street: '1234 Park St'
     },
     {
         firstName: 'Elinor',
         lastName:  'Doe',
         age: 35,
         street: '1230 Park St'
     },
     {
         firstName: 'Mary',
         lastName:  'Doe',
         age: 31,
         street: '1231 Park St'
     },
     {
         firstName: 'Darcy',
         lastName:  'Doe',
         age: 32,
         street: '1224 Park St'
     },
     {
         firstName: 'Grey',
         lastName:  'Doe',
         age: 34,
         street: '1214 Park St'
     },
     {
         firstName: 'Lydia',
         lastName:  'Doe',
         age: 30,
         street: '1294 Park St'
     },
     {
         firstName: 'Harriet',
         lastName:  'Doe',
         age: 32,
         street: '1324 Park St'
     }
 ]
 * Create a array that deletes the lastName of each human object and prints the result
 * Example
 * const result = [
 {
    firstName: 'Harriet',
    age: 32,
    street: '1324 Park St'
     }
 * ] .
 * */

/**
 * [use for loop] 
 * Create an array of prime numbers that include the first 6 prime numbers 
 * */

// const primes = [];
// const myObject = {
//     isPrime: function(number) {
//         if (number <= 1) {
//             return false;
//         }

//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 return false;
//             }
//         }

//         return true;
//     }
// }
// console.log(myObject.isPrime(7))

// for (let i = 2; primes.length <= 6; i++) {
//     if (myObject.isPrime(i)) {
//         primes.push(i);
//     }
// }

// console.log(primes);



// what is a prime number?
// Example 2, 3, 5, 7, 11, 13, 17
// const primes = [2, 3, 5, 7, 11, 13] ANSWER

const primes = [];

// we want to make a function/method of some sort to check to see if number is prime
const myObject = {
    isPrime: function(number) {
        // want to return true or false based if number is prime
        if (number <= 1) {
            return false;
        }

        for (let i = 2; i < number; i++) {
            // check to see if number % i equals 0
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }
}

console.log('is 0 prime', myObject.isPrime(0));
console.log('is 1 prime', myObject.isPrime(1));
console.log('is 2 prime', myObject.isPrime(2));
console.log('is 7 prime', myObject.isPrime(7));

// write a for loop that will count up until primes.length <= 6
for (let i = 2; primes.length <= 6; i++) {
    if (myObject.isPrime(i)) {
        // push i into the primes array
        primes.push(i);
    }
}

console.log('primes ->', primes);

// Array Methods
// forEach

const countries = ['USA', 'China', 'Canada', 'Russia', 'Mexico'];
countries.forEach(function(country, idx) {
    // print each country
    console.log(idx, country);
});

// map
const longNumbers = [8899, 3355, 2234, 9900, 7788, 5464];
const add100 = longNumbers.map(function(num) {
    // add 100 to each number
    return num + 100;
});

console.log('long numbers', longNumbers);
console.log('add 100', add100);

// use map to make an object that has { country: 'USA', currency: 'USD' }
const currencyArray = countries.map(function(country) {
    if (country === 'USA') {
        // const currency = 'USD';
        // return the object with the key/value needed
        return { country: country, currency: 'USD' }
    } else if (country === 'China') {
        // return country with China and currency with RMB
        return { country: country, currency: 'RMB' }
    } else if (country === 'Canada') {
        // return the country with Canada and currency with CAD
        return { country: country, currency: 'CAD' }
    } else if (country === 'Mexico') {
        // return the country with Canada and currency with CAD
        return { country: country, currency: 'MXN' }
    } else if (country === 'Russia') {
        // return the country with Canada and currency with CAD
        return { country: country, currency: 'RUB' }
    }
});

console.log('currency array', currencyArray);

// filter
// get all numbers that are divisible by 2 (with a remainder of 0)
const evenNumbers = longNumbers.filter(function(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log('even numbers', evenNumbers);

// TODO: Create a array called shortCountryNames that filters through 
// countries and check for all countries with length of 5 or less
const shortCountryNames = countries.filter(function(country) {
    if (country.length <= 5) {
        return true;
    } else {
        return false;
    }
});

console.log('short countries list', shortCountryNames);

// TODO: Create a array called oldEnough that filters through 
// the age of a patron to make sure that they are 21 or above
const patrons = [
    { name: 'Jeff', age: 23 },
    { name: 'Same', age: 21 },
    { name: 'Tiffany', age: 20 },
    { name: 'Ronnie', age: 19 },
    { name: 'Steven', age: 25 },
    { name: 'Brice', age: 26 },
    { name: 'Jay', age: 18 },
    { name: 'Lala', age: 26 },
]
// make a add commit and push to Github
const oldEnough = patrons.filter(function(person) {
    // return person.age >= 21

    if (person.age >= 21) {
        return true;
    } else {
        return false;
    }
});

console.log('old enough', oldEnough);

// using reduce
const finalNumber = longNumbers.reduce(function(sum, currentValue) {
    return sum + currentValue;
});

console.log('final number', finalNumber);

const myName = ['b', 'e', 'l', 'l']
let answer = myName.reduce(function(final, element) {
    return final + element;
},'rome ');

console.log('answer', answer);