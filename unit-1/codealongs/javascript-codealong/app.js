console.log('Intro to JavaScript');

// Primitives: covering the different datatypes that exist in JavaScript

/**
 * This is a
 * a multiline 
 * comment
*/

// integers Ex: -1, 0, 17, 200
// floats 2.3, 3.14, .5

// print out 5 + 5
console.log(5 + 5);

// Strings - ex. "Jordan" 'Keya' "0"
console.log('name', 'Rome');

// Operators
// add
console.log('add', 10+10);
// subtract
console.log('subtract', 8-2);
// multiply
console.log('multiply', 10*10);
// modulus
console.log('modulus', 9 % 8);

// Math object
console.log('take the square root of 49', Math.sqrt(49));
// console.log(sqrt(49)); - Uncaught ReferenceError: sqrt is not defined at app.js:35:9
console.log('take the power of a number', Math.pow(4, 2));
console.log('using Math.floor', Math.floor(16.778));
console.log('return a random number', Math.random() * 10);
console.log('return a random number that is floor between 0 and 10:', Math.floor(Math.random() * 10));

// Booleans - true, false
console.log(true);
console.log(false);
// things that are truthy
console.log('truthy', '0');
console.log('truthy', 7);
console.log('truthy', true);
console.log('truthy', Math.pow(3,2));
// things that are falsey
console.log('falsey', '');
console.log('falsey', 0);
console.log('falsey', null);
console.log('falsey', undefined);
console.log('falsey', false);
// exercise 
console.log('truthy', 'zero');
console.log('truthy', ' ');
console.log('truthy', "hello");
console.log('falsey', 8-8);
console.log('truthy', 'undefined');
console.log('truthy', 'null');
console.log('truthy', 'false');

// String - properties and methods
// property - length
console.log('length of hello world ->', 'hello world'.length);
// method - split
console.log('using split on space ->', "hello world software engineers".split(' '));
// method - indexOf()
let jCole = "J Cole".indexOf('C');
console.log('using indexOf ->', jCole);
jCole = "J Cole".indexOf('8');
console.log('using indexOf 8 ->', jCole);

let drake = "Drake".indexOf('K');
console.log('using indexOf ->', drake);
drake  = true;
console.log('printing drake results', drake);
drake = 1;
console.log('drake is a number', drake);
drake = 'Jimmy Cooks';
console.log('song of Drake', drake);
let engineerIndex = "Software Engineers".indexOf('e');
console.log('using indexOf ->', engineerIndex); // 7

// I wanted to change the variable engineerIndex
engineerIndex = "Software Engineers".indexOf('s');
console.log('check for index of s ->', engineerIndex);

// method - replace('old', 'new')

let engineers = "Software Engineers".replace("Software", "Frontend");
console.log('using replace ->', engineers); // "Frontend Engineers"
// method - toUpperCase()
let bigHello = 'hello'.toUpperCase();
console.log('using toUpperCase ->', bigHello);
// method - toLowerCase()
let world = 'WORLD'.toLowerCase(); // "world"
console.log('using toLowerCase ->', world);
// scenario - capitalize only the first letter
let name = 'rome';
console.log('capitalize the first letter of the word ->', name.charAt(0).toUpperCase() + name.slice(1));

// Exercise - Number 
// @todo Show 1-3 properties that exist with Number
// @todo use 4 methods that exist with Number 7 and NaN
console.log('is 7 equal to NaN ->', Number.isNaN(7)); // false
console.log('is hello equal to NaN ->', Number.isNaN('hello')); // false
console.log('is NaN equal to NaN ->', Number.isNaN(NaN)); // true
console.log('is 7 a integer ->', Number.isInteger(7));
console.log('change to integer ->', Number.parseInt('77'));

console.log('use world again ->', world);
console.log('use bigHello again ->', bigHello);
console.log('use engineers again ->', engineers);

// To declare a variable that we want to be able to change to another datatype or same datatype

/**
 * To make a variable that we can't change the datatype, we use "const"
 */

const salesTax = 0.13;
const capitalOfKentucky = 'Frankfort';
const keyaSocial = 323137795;
const usCitizen = true;

// Arrays
const numbers = [6, 13, 6, 77, 12, 10, 1];
const someEngineers = [
    "osita",
    "tiffany",
    "darren",
    "douglas",
    "susan",
    "mike",
    "daniel",
    "layla",
]
const randomStuff = [1, true, undefined, 'zero', '0', "james", 1, 'b', "hello".toUpperCase()];
console.log('randomStuff array', randomStuff);

const items = [
    "hello".split(),
    "1",
    "james".toUpperCase(),
    Number.isInteger('8'),
    Number.parseFloat(9),
    null,
    7,
    3.14,
    "Matt".toLowerCase(),
    "help".slice(2),
    undefined,
    Number.isNaN('NaN'),
    "people".indexOf('6'),
    "fred".charAt(1),
    false,
    [1, "two", 3],
    1
];

console.log('print at index 2', items[2]);
console.log('print at index 16', items[16]);
console.log('print at index 55', items[55]);

// Array properties
// items.length // 17
console.log('amount of elements in items', items.length);

// Array methods
// using pop() - removes the last element in the array and returns it to you
console.log('remove the last items and return value ->', items.pop());
console.log('see what items look after removing last element ->', items);

// using push() - add an element at the end of the array
console.log('174', items.push(true));
console.log('used push to add an element', items);

// using slice - divides an array up by the index selected
console.log('slice items at index 10', items.slice(10));
console.log('print items again', items);
const newItems = items.slice(10);
console.log('new items', newItems);

// using forEach - this method allows us to execute an [activity/activities] on each element
// print each element in the array on a seperate line
items.forEach(function(element) {
    // print the element
    console.log('element ->', element);
});

const spaceships = ['Falcon 9', 'Enterprise', 'M Falcon', 'Voyager', 'Tiefighter', 'Pillar of Autumn'];
spaceships.forEach(function(spaceship) {
    // print the element
    console.log('element ->', spaceship);
});

numbers.forEach(function(num) {
    // print the element
    console.log('element ->', num);
});

someEngineers.forEach(function(engineer) {
    // print the element
    console.log('element ->', engineer);
});