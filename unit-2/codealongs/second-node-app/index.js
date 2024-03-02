//require('dotenv').config();
const express = require('express');
const app = express(); // instance of an app
const { add, subtract, multiply, divide } = require('./calculator');
const fs = require('fs');
const { faker } = require('@faker-js/faker');
const Account = require('./models/account');
const Flight = require("./models/booking");
const Vehicle = require("./models/vehicles");
const methodOverride = require('method-override');
const layouts = require('express-ejs-layouts');

// middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(methodOverride('_method'));

// /////////////////////////////////// TESTING ROUTES ................................... /////////////////////
// app.get('/', (req, res) => {
//     return res.json({ message: 'Welcome to my Node App' })
// });
// app.get('/apples', (req, res) => {
//     return res.json({ message: 'apples' });
// });
// app.get('/bananas', (req, res) => {
//     return res.json({ message: 'bananas' });
// });

// app.get('/add/:num1/:num2', (req, res) => {
//     let num1 = Number(req.params.num1); // number
//     let num2 = Number(req.params.num2); // number
//     let answer = add(num1, num2);
//     return res.json({ answer: answer });
// });
// app.get('/subtract/:num1/:num2', (req, res) => {
//     let num1 = Number(req.params.num1); // number
//     let num2 = Number(req.params.num2); // number
//     let answer = subtract(num1, num2);
//     return res.json({ answer: answer });
// });
// app.get('/multiply/:num1/:num2', (req, res) => {
//     let num1 = Number(req.params.num1); // number
//     let num2 = Number(req.params.num2); // number
//     let answer = multiply(num1, num2);
//     return res.json({ answer: answer });
// });
// app.get('/divide/:num1/:num2', (req, res) => {
//     let num1 = Number(req.params.num1); // number
//     let num2 = Number(req.params.num2); // number
//     let answer = divide(num1, num2);
//     return res.json({ answer: answer });
// });
// // test using the core module (fs)
// fs.readFile('description.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.log('----- error ----', error);
//     } else {
//         console.log(data);
//     }
// })
// app.get('/read', (req, res) => {

//     let element = req.query.something; // story
//     fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
//         if (error) {
//             return res.json({ message: 'There is an issue, try again later...' });
//         } else {
//             console.log(data)
//             return res.json({ message: data });
//         }
//     });
// })

app.get('/', (req, res) => {
    return res.json({ message: 'Welcome to my Node App' });
});

// GET /accounts - return all accounts
// GET /accounts/:accountNumber - returns only 1 account
// POST /accounts - create a new account
// PUT /accounts/:accountNumber - update one account
// DELETE /accounts/:accountNumber - delete one account
app.use('/accounts', require('./controllers/accounts'));

app.get('/apples', (req, res) => {
    return res.json({ message: 'apples' });
});

app.get('/bananas', (req, res) => {
    return res.json({ message: 'bananas' });
});

// using local modules + req.params

// --------------------------------------
// Example: localhost:8000/add/7/8
// Response { "answer": 15 }
// --------------------------------------
// what is req.params? an object
// { num1: '7', num2: '8' }
// --------------------------------------
app.get('/add/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); // number
    let num2 = Number(req.params.num2); // number
    let answer = add(num1, num2);
    return res.json({ answer: answer });
});

app.get('/subtract/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); // number
    let num2 = Number(req.params.num2); // number
    let answer = subtract(num1, num2);
    return res.json({ answer: answer });
});

app.get('/multiply/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); // number
    let num2 = Number(req.params.num2); // number
    let answer = multiply(num1, num2);
    return res.json({ answer: answer });
});

app.get('/divide/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); // number
    let num2 = Number(req.params.num2); // number
    let answer = divide(num1, num2);
    return res.json({ answer: answer });
});

// test using the core module (fs)
// fs.readFile('description.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.log('----- error ----', error);
//     } else {
//         console.log(data);
//     }
// });

// using core modules and req.query
// --------------------------------------
// Example: localhost:8000/read?something=story
// Response { "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugit amet minima illo laborum nam alias. Incidunt omnis eos eligendi a, ullam nihil doloremque illo, reprehenderit laudantium, corrupti delectus illum?" }
// --------------------------------------
// what is req.query? an object
// { something: 'story' }
// --------------------------------------
app.get('/read', (req, res) => {
    // grab the query string,
    // pass the querystring into the fs function
    // return the data that comes from the txt file
    let element = req.query.something; // story
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'There is an issue, try again later...' });
        } else {
            console.log(data);
            return res.json({ message: data });
        }
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VEHICLES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/vehicles', (req, res) => {
    fs.readFile("./data/cars.json", 'utf8', (error, data) => {
        if (error) {
            console.log('------ error -------', error);
            res.json({ message: 'error occured, please try again.' });
        } else {
            console.log(data);
            data = JSON.parse(data);
            res.json({ data: data });
        }
    });
});

app.get('/vehicles/:vin', (req, res) => {
    fs.readFile('./data/cars.json', 'utf8', (error, data) => {
        if (error) {
            console.log('------ error -------', error);
            res.json({ message: 'error occured, please try again.' });
        } else {
            data = JSON.parse(data);
            for (let i = 0; i < data.length; i++) {
                let account = data[i];
                if (account.vin === req.params.vin) {
                    return res.json({ account: account });
                }
            }
            res.json({ data: data });
        }
    });
});


app.post('/vehicles', (req, res) => {
    // manufacturer, model, vehicle, vin, type, fuel, color
    //let { color, vehicle, manufacturer, model } = req.body;
    console.log('req.body', req.body);
    let newVehicle = new Vehicle(
        faker.vehicle.color(),
        faker.vehicle.fuel(),
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.type(),
        faker.vehicle.vehicle(),
        faker.vehicle.vin(),
    );
    console.log('new vehicle', newVehicle);

    fs.readFile('./data/cars.json', 'utf8', (error, data) => {
        if (error) {
            console.log('------ error -------', error);
            res.json({ message: 'error occured, please try again.' });
        } else {
            data = JSON.parse(data);
            let index = data.length;
            newVehicle.id = index; // the new account has an id now.
            data.push(newVehicle);
            data = JSON.stringify(data);
            fs.writeFile('./data/cars.json', data, 'utf8', (error, result) => {
                console.log('data from writing', result);
                return res.json({ data: data });
            });
        }
    });
});

app.delete('/vehicles/:vin', (req, res) => {
    // how would I print the accountNumber
    console.log('to view vin number', req.params.vin);
    // find the vehicle with the vin
    // grab the vehicle by vin and update
    const { vin } = req.params;
    fs.readFile('./data/cars.json', 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'Error occured. Please try again...' });
        } else {
            data = JSON.parse(data); // array of objects(account)
            // use map to iterate through and update the fields
            const newData = data.filter(car => car.vin !== vin);
            // write the new array of objects inside of the accounts.json file
            fs.writeFile('./data/cars.json', JSON.stringify(newData), 'utf8', (error, result) => {
                // respond with the updated account information
                return res.json({ message: `Vehicle with Vin Number ${vin} deleted successfully` });
            });
        }
    });
});



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FLIGHT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/flights', (req, res) => {
    fs.readFile("./data/flight.json", 'utf8', (error, data) => {
        if (error) {
            console.log('------ error -------', error);
            res.json({ message: 'error occured, please try again.' });
        } else {
            console.log(data);
            data = JSON.parse(data);
            res.json({ data: data });
        }
    });
});

app.get('/flights/:flightNumber', (req, res) => {
    fs.readFile('./data/flight.json', 'utf8', (error, data) => {
        if (error) {
            console.log('------ error -------', error);
            res.json({ message: 'error occured, please try again.' });
        } else {
            data = JSON.parse(data);
            for (let i = 0; i < data.length; i++) {
                let booking = data[i];
                if (booking.flightNumber === req.params.flightNumber) {
                    return res.json({ booking: booking });
                }
            }
            res.json({ data: data });
        }
    });
});


app.post('/flights', (req, res) => {
    // manufacturer, model, vehicle, vin, type, fuel, color
    //let { color, vehicle, manufacturer, model } = req.body;
    console.log('req.body', req.body);
    let newFlight = new Flight(
        faker.airline.airline(),
        faker.airline.airport(),
        faker.airline.flightNumber(),
        faker.airline.seat(),
    );
    console.log('new vehicle', newFlight);

    fs.readFile('./data/flight.json', 'utf8', (error, data) => {
        if (error) {
            console.log('------ error -------', error);
            res.json({ message: 'error occured, please try again.' });
        } else {
            data = JSON.parse(data);
            let index = data.length;
            newFlight.id = index; // the new account has an id now.
            data.push(newFlight);
            data = JSON.stringify(data);
            fs.writeFile('./data/flight.json', data, 'utf8', (error, result) => {
                console.log('data from writing', result);
                return res.json({ data: data });
            });
        }
    });
});

app.put("/flights/:flightNumber", (req, res) => {
    // see the account number
    console.log("to view seat number", req.params.seat);
    //////////////////////////////////////////////
    console.log("body", req.body); // data that we want to update
    //////////////////////////////////////////////
    let updatedAccount = {};
    fs.readFile("./data/flight.json", "utf8", (error, data) => {
        if (error) {
            return res.json({ message: "something went wring, please figure this out" });
        } else {
            data = JSON.parse(data); // array od objects(accont)
            // use map to iterate through and update the fields
            newData = data.map((booking) => {
                // check to see if the account number is the same
                if (booking.seat === req.params.seat) {
                    // change the data
                    booking.seat = req.body.seat || booking.seat; // if there is a pin to change it will update or stay the same.
                    updatedAccount = { ...booking };
                    return booking;

                } else {
                    return booking;
                }
            });

            // write the new array of objects inside of the accounts.json file
            fs.writeFile("./data/flight.json", JSON.stringify(newData), "utf8", (error, result) => {
                return res.json({ account: updatedAccount });
            });
        }
    });
});

app.delete('/flights/:flightNumber', (req, res) => {
    const vin = req.params.vin;

    fs.readFile('./data/flight.json', 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'Error occurred. Please try again' });
        } else {
            data = JSON.parse(data);

            // Use the filter method to find the account with the specified ID
            const accountsToKeep = data.filter(account => account.vin !== vin);

            // If the filtered array has the same length as the original, the account was not found
            if (accountsToKeep.length === data.length) {
                return res.status(404).json({ message: 'Account not found' });
            } else {
                // Update the data with the filtered accounts
                data = accountsToKeep;
                data = JSON.stringify(data);

                // Write the updated data to the file
                fs.writeFile('./data/flight.json', data, 'utf8', (error, result) => {
                    return res.json({ message: 'Account deleted' });
                });
            }
        }
    });
});

// Set up a PORT number, and listen for server 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server is running on PORT ', PORT);
});


module.exports = app;