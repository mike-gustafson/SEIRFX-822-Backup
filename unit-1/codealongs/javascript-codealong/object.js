console.log('object file is connected! 😎');

// Object store data but they store with key-value pairs

/**
 With array that has names in it, for example
 const names = ['John', 'Mike', 'Chris']
 names[0] -> "John"
 * */ 

// How to make an object
const user = { firstName: 'Barry', lastName: 'Jones' } 

// print the firstName
console.log('print first name', user.firstName);

const address = {
    street: '123 Main St',
    city: 'New York',
    state: 'New York',
    zipcode: 10001,
    majorCity: true,
    nearbyStreets: ['Central Ave', 'Eighth Ave', '43st St'],
    printAddress: function() {
        console.log('street', this.street);
    },
    printState: function() {
        console.log('state', this.state);
    },
    printCentralAve: function() {
        console.log('central ave', this.nearbyStreets[0]);
    },
    // make a function that is called printCity
    printCity: function() {
        console.log('city', this.city);
    },
}

// print zipcode
console.log('zipcode ->', address.zipcode);

// print nearby streets
console.log('nearby streets', address.nearbyStreets);

// use the printAddress function
address.printAddress();

// use the printState function
address.printState();

// use the printCentralAve function
address.printCentralAve();
// use the printCity function
address.printCity();

const players = [
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
] // array of objects

const allFacebookUser = [
    { name: 'markz', email: 'markz@facebook.com', city: 'San Francisco' },
    { 
        name: 'denzel washington', 
        email: 'denzel@email.com', 
        city: 'Los Angeles',
        favoriteTvShows: ['Suits', 'Peaky Blinder', 'Formula 1'],
        likes: ['fighting', 'acting', 'watching sports']
    },
    // .... about 2.99 billion +
]

// modify an object
const favoriteBook = {
    title: 'Harry Potter and The Sourcer Stone',
    author: 'JK Rowling',
    movie: true,
    bestSeller: true
}

favoriteBook.title = 'Harry Potter and The Chamer of Secrets';
favoriteBook.favoriteCharacter = 'Sirius Black';

console.log('what is my favorite book????', favoriteBook);

// remove a property movie
delete favoriteBook.movie;
console.log('after removing movie-----', favoriteBook);

// print author
console.log(favoriteBook['author'], '<---- the author ---->', favoriteBook.author);

// add a method
favoriteBook.displayBestSeller = function() {
    // point out [this]
    console.log('what is THIS --->', this.author);
}

// run that method
favoriteBook.displayBestSeller();

// make a object call car
const porschePanarama = {
    color: 'Black',
    year: 2023,
    price: 150000
}

porschePanarama.drive = function() {
    console.log(`The car I drive is a ${this.color} Porsche`);
}

// run method
porschePanarama.drive();

console.log('this outside of object', this);

// exercise
/**
 * Exercise
1.) Represent the following values in an object:
    "John", "Doe", 36, "1234 Park St".
2.) Once you've represented the above as an object, update John's address to 1234 Park Ln.
3.) Using a combination of Objects and Array, how would you represent the following data:
    Moe, Doe, 31, 1234 Park St.
    Larry, Doe, 36, 1234 Spark St.
    Curly, Doe, 36, 1239 Park St.
    Jane, Doe, 32, 1239 Spark St.
    Emma, Doe, 34, 1235 Spark St.
    Elizabeth, Doe, 36, 1234 Park St.
    Elinor, Doe, 35, 1230 Park St.
    Mary, Doe, 31, 1231 Park St.
    Darcy, Doe, 32, 1224 Park St.
    Grey, Doe, 34, 1214 Park St.
    Lydia, Doe, 30, 1294 Park St.
    Harriet, Doe, 32, 1324 Park St.
4.) Mary is taking to the road, so she no longer has an address. Delete her address!
 * */ 

// Exercise
console.log('T or F ->', (6 >= 7) && (true || false) );
console.log('T or F ->', !(1 >= 1) || (!true && false || true));
let fruit = 'watermelon';
let name = 'rome';

console.log('T -> F ->', (fruit === name) || (fruit[3] === name[3]) && name.length > 3);
