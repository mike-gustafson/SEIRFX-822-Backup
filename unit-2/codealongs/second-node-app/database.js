const database = require('./models');

// CREATE A COUNTRY
// --- using promises ---
// database.user.create({
//     firstName: 'Bob',
//     lastName: 'Smith',
//     age: 20,
//     email: 'bobsmith@email.com',
//     address: '123 main street',
//     city: 'New York',
//     state: 'NY',
//     zipcode: 33333
// })
// .then((newUser) => {
//     // print the JSON data
//     console.log('newUser', newUser.toJSON());
//     console.log('-------------------------------')
//     // print the raw data
//     console.log('raw data', newUser);
// });

// FIND ONE USER
database.user.findOne({ where: { id: 750 } })
.then(user => {
    console.log('found user', user.toJSON());
})


// FIND ALL USERS
// use promises

// database.user.findAll()
// .then((users) => {
//     console.log('list of users', users); // array
//     const parsedUsers = users.map(user => user.toJSON());
//     console.log('------------------------------');
//     console.log('parsedUsers', parsedUsers); // array
// })

// FIND OR CREATE USER
// database.user.findOrCreate({
//  where: { firstName: 'Brian' },
//  defaults: { lastName: 'Jones', age: 22, email: 'bjones@email.com'}
// })
// .then(([user, created]) => {
//     console.log('was this user created', created);
//     console.log(user.toJSON());
// })

// UPDATE A USER
// const data = {
//     lastName: 'Smith',
//     age: 23,
// }
// const query = { email: 'bjones@email.com' }

// database.user.update(data, { where: query })
// .then(numOfRowsUpdated => {
//     console.log('number of rows updated', numOfRowsUpdated);
// })

// DESTROY (DELETE) A USER
// const searchQuery = { id: 1 }
// database.user.destroy({ where: searchQuery })
// .then(result => {
//     console.log('result', result);
// })