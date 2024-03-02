// Accessing Elements
const form = document.querySelector('form');
console.log(form);

const nameForm = document.querySelector('#nameform');
console.log(nameForm);

const fname = document.querySelector('#fname');
console.log(fname);

const table2 = document.querySelector('.table2');
const centerDiv = document.querySelector('.center');

console.log(table2);
console.log(centerDiv);

// get all elements by a tagname
const allTables = document.getElementsByTagName('table');
console.log(allTables);
// copy all elements from HTMLCollection to Array
const allTablesArray = [...allTables];
console.log(allTablesArray);

// TODO: Print all elements in allTablesArray with forEach
allTablesArray.forEach(function (element) {
    console.log(element);
});

// get all tables using querySelectorAll
const allTablesAgain = document.querySelectorAll('table');
console.log(allTablesAgain);
// copy of all elements from NodeList to Array
const allTablesAgainArray = [...allTablesAgain];
console.log(allTablesAgainArray);

// Traversing the DOM tree
// get childNodes for table2
// console.log('table 2 child nodes', table2.childNodes[1].children);
const table2RowsArray = [...table2.childNodes[1].children];
console.log('table 2 rows array', table2RowsArray);
console.log('first child', table2.firstElementChild.firstChild.nextElementSibling);

// what is table2 parentnode
console.log('table 2 parent node', table2.parentElement);

// [3] Creating/removing elements
const newRow = document.createElement('tr');
const itemOne = document.createElement('td'); // create element
itemOne.textContent = 'Osita'; // add text content
const itemTwo = document.createElement('td'); // create element
itemTwo.textContent = 'Enweronye'; // add text content
const itemThree = document.createElement('td'); // create element
itemThree.textContent = 999; // add text content

// add each item a child node to newRow
newRow.appendChild(itemOne);
newRow.appendChild(itemTwo);
newRow.appendChild(itemThree);

console.log('new row', newRow);

const newRow2 = document.createElement('tr');
const itemOne2 = document.createElement('td'); // create element
itemOne2.textContent = 'Rome'; // add text content
const itemTwo2 = document.createElement('td'); // create element
itemTwo2.textContent = 'Bell'; // add text content
const itemThree2 = document.createElement('td'); // create element
itemThree2.textContent = 999; // add text content

// add each item a child node to newRow
newRow.appendChild(itemOne2);
newRow.appendChild(itemTwo2);
newRow.appendChild(itemThree2);

console.log('new row', newRow2);

// append the newRow to table2
table2.appendChild(newRow2);



// Object
const user = { name: 'Johnny Dane', age: 50 };
const address = { city: 'New York', street: '123 Main St' };
const patient = { ...user, heartRate: '...', bmi: 10, ...address };

console.log(patient); // { name: '', age: '', heartRate: '', bmi: '', city: '', street: '' }

// create 3 objects - relate each to object to each other
const breakItems = {
    food: 'omelette',
    drink: 'coffee'
};

const lunchItems = {
    beverage: 'soda',
    sandwhich: 'blt',
};

const dinnerItems = {
    mainCourse: 'steak',
    appetizer: 'chips and guac',
};

const meals = {
    ...breakItems,
    ...lunchItems,
    ...dinnerItems,
};

console.log('meals', meals);

const array = [1, 23, 'four'];

const arrayCopy = [
    2,
    3,
    'hello',
    ...array
];

console.log(arrayCopy);

const users = [
    { name: 'Jordan', occupation: 'software engineer' },
    { name: 'Keya', occupation: 'software engineer' },
    { name: 'Susan', occupation: 'software engineer' },
    { name: 'Tiffany', occupation: 'software engineer' },
    { name: 'Mike', occupation: 'software engineer' }
];

const patientLog = {
    jordan: [12, 13, 14],
    keya: [99, 77, 88],
    susan: null,
    mike: [44, 55, 66],
};

// how would we get
console.log(patientLog.keya[1]);
console.log(patientLog.mike[2]);

// get back Tiffany
console.log(users[3].name);

// style the body by chanaging backgroundColor
const bodyElement = document.querySelector('body');
// bodyElement.style.background = 'purple';
bodyElement.onclick = function () {
    if (bodyElement.style.background === 'cadetblue') {
        bodyElement.style.background = 'purple';
    } else {
        bodyElement.style.background = 'cadetblue';
    }
};

// toggle the color of table2 between colors 'pink' and 'yellow'
table2.onclick = function () {

    // updating jill smith to betty white
    table2.children[0].children[1].children[0].textContent = 'Betty';
    table2.children[0].children[1].children[1].textContent = 'White';

    // updating the color of table
    if (table2.style.background === 'pink') {
        table2.style.background = 'yellow';
    } else {
        table2.style.background = 'pink';
    }
};

// what do we know
console.log('jill', table2.children[0].children[1].children[0]);
console.log('smith', table2.children[0].children[1].children[1]);

// Grab all tables
const tableRows = document.getElementsByTagName('table')[2].children[0].children;


const numberTable = document.getElementsByTagName('table')[2];
console.log('number table', numberTable);
// use a for loop to print each row
// for (let i = 0; i < tableRows.length; i++) {
//     let row = tableRows[i];

//     let itemOne = row.children[0];
//     let itemTwo = row.children[1];
//     let itemThree = row.children[2];

//     console.log('item 1', itemOne);
//     console.log('item 2', itemTwo);
//     console.log('item 1', itemThree);

//     itemOne.textContent = itemOne.textContent * 10;
//     itemTwo.textContent = itemTwo.textContent * 10;
//     itemThree.textContent = itemThree.textContent * 10;
// }

numberTable.onclick = function () {
    // use a for loop to print each row
    for (let i = 0; i < tableRows.length; i++) {
        let row = tableRows[i];

        let itemOne = row.children[0];
        let itemTwo = row.children[1];
        let itemThree = row.children[2];

        itemOne.textContent = itemOne.textContent * 10;
        itemTwo.textContent = itemTwo.textContent * 10;
        itemThree.textContent = itemThree.textContent * 10;
    }
};

// const ageLabel = document.createElement('label');
// set "for" attribute to be age
// ageLabel.setAttribute('for', 'age');
// ageLabel.textContent = 'Age';

// const breakElement = document.createElement('br');
// const ageInput = document.createElement('input');
// ageInput.setAttribute('id', 'age');
// ageInput.setAttribute('name', 'age');
// ageInput.setAttribute('type', 'text');
// ageInput.setAttribute('value', '21');
// console.log(ageInput);

// form.prepend(ageLabel, breakElement, ageInput);
// console.log('form previous child', form.lastElementChild)
// form.lastElementChild.prepend(ageInput)
// form.insertBefore(ageInput, form.children[8])
// form.insertBefore(breakElement, form.children[8])
// form.insertBefore(ageLabel, form.children[8])


// form submission
form.onsubmit = function (e) {
    e.preventDefault();
    const firstNameInput = document.querySelector('#fname');
    const lastNameInput = document.querySelector('#lname');
    const ageInput = document.querySelector('#age');
    console.log('this works....', firstNameInput.value, lastNameInput.value);
    
    
    // solution to adding input to table
    const table2Tbody = table2.children[0];
    // create a new row
    const formRow = document.createElement('tr');
    const submitFName = document.createElement('td');
    const submitLName = document.createElement('td');
    const submitAge = document.createElement('td');

    // add textContent to each one
    submitFName.textContent = firstNameInput.value;
    submitLName.textContent = lastNameInput.value;
    submitAge.textContent = ageInput.value;

    // append all td(s) to the tr
    formRow.append(submitFName, submitLName, submitAge);

    // test - print formRow
    console.log(formRow);

    // append formRow to table2Tbody
    table2Tbody.append(formRow);

};

// 
