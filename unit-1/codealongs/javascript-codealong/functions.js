console.log('functions on the way.................');

// function with a return value
function addTwoPlusTwo() {
    return 2 + 2;
}

console.log('result', addTwoPlusTwo());

// function with a return value that includes parameters(arguments)
function add(num1, num2) {
    return num1 + num2;
}

console.log('result of add', add(8, 30));

function greeting(name) {
    return `Welcome to the real world, ${name}`;
}

console.log('result of greetings', greeting('Susan'));
console.log('result of greetings', greeting('Neko-linda'));

// function without a return value
function run() {
    console.log('left foot move');
    console.log('right foot move');
}

// since there is no return value, we can run the function
run();

// function with or without a return value
const person = [
    { name: 'Johnny', age: 37 },
    { name: 'Bertha', age: 55 },
    { name: 'James', age: 40 },
    { name: 'Patrick', age: 70 }
]
function findOldestPerson(array) {
    // return the name of the oldest person
    // if statements, iterate through elements of array, set some variable to compare ages
    let oldest;
    let oldestPerson;
    for (let i = 0; i < array.length; i++) {
        // compare the age of the each person and modify oldest based on age
        // set up a intermediate variable
        let person = array[i];
        if (oldest === undefined) {
            oldest = person.age; // 37
            oldestPerson = person.name; // Johnny

            console.log('1: who is now the oldest', oldestPerson);
        } else if (person.age > oldest) {
            oldest = person.age;
            oldestPerson = person.name;

            console.log('2: who is now the oldest', oldestPerson);
        }
    }

    return oldestPerson;
}

console.log('oldest person', findOldestPerson(person));