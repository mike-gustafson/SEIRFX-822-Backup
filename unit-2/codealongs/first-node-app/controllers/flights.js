const express = require('express');
const fs = require('fs');
const router = express.Router();
const Airline = require('../models/airline');
const { faker } = require('@faker-js/faker');
const path = require('path');



router.get('/', (req, res) => {
    fs.readFile("./data/flights.json", 'utf8', (error, data) => {
        if (error) {
            console.log('------ error -------', error);
            res.json({ message: 'error occured, please try again.' })
        } else {
            console.log(data);
            data = JSON.parse(data);
            return res.render('flights/index.ejs', { data: data });
        }
    })
});

router.get('/new', (req, res) => {
    // return res.sendFile(
    //     path.join(__dirname, '..', '/views/flights/new.html')
    // )
    return res.render('../views/flights/new.ejs')
})


router.get('/:flightNumber', (req, res) => {
    fs.readFile("./data/flights.json", 'utf8', (error, data) => {
        if (error) {
            console.log('------ error -------', error);
            res.json({ message: 'error occured, please try again.' })
        } else {
            console.log(data);
            data = JSON.parse(data);
            // res.json({ data: data });
            for (let i = 0; i < data.length; i++) {
                let flights = data[i];
                if (flights.num === req.params.num) {

                    return res.render('flights/show.ejs', { flights: flights });
                }
            }
        }
    })
});

router.get('/:flightNumber/edit', (req, res) => {
    fs.readFile("./data/flights.json", "utf8", (error, data) => {
        if (error) {
            console.log("error", error);
            return res.json({ message: "please try again" });
        } else {
            data = JSON.parse(data);
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let flight = data[i];
                if (flight.vin === req.params.vin) {
                    // return res.json({ account: account })
                    return res.sendFile(
                        path.join(__dirname, '..', '/views/flights/edit.html')
                    )
                }
            }
        }
    })
})

router.post('/', (req, res) => {
    let airlineData = faker.airline.airline({ addLeadingZeros: true, length: 2 });
    let airportData = faker.airline.airport({ addLeadingZeros: true, length: 2 });

    let newAirline = {
        aircraftType: faker.airline.aircraftType(),
        airline: airlineData.name,
        flightNumber: faker.airline.flightNumber({ addLeadingZeros: true, length: 2 }),
        airport: airportData.name
    };

    console.log('new airline', newAirline);

    fs.readFile('./data/flights.json', 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'Error occurred. Please try again' });
        } else {
            data = JSON.parse(data); // Assuming it's an array

            newAirline.id = data.length; // Assigning ID based on current data length
            data.push(newAirline);

            let stringData = JSON.stringify(data);

            // Write the updated data to the file
            fs.writeFile('./data/flights.json', stringData, 'utf8', (error, result) => {
                
                return res.redirect(`/flights/${newAirline.flightNumber}`);
            });
        }
    });
});
router.put('/:flightNumber', (req, res) => {
    console.log('to view account number', req.params.flightNumber);
    //----------------------------------
    console.log('body', req.body);
    //----------------------------------
    //fins the account with the accountNumber
    // grab the accounts by accountNmber and update
    let updatedFlight = {};
    fs.readFile('./data/flights.js', 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: error });
        } else {
            data = JSON.parse(data);
            // use map to iterate though and update fields
            newData = data.map((Airline) => {
                //check if account is the same
                if (Airline.flightNumber === req.params.flightNumber) {
                    //change data
                    Airline.aircraftType = req.body.aircraftType || Airline.aircraftType; // if there's a pin to change it will update or stay the same
                    //account.amount = Number(req.body.amount || account.amount);
                    Airline.airport = req.body.airport || Airline.airport;
                    updatedFlight = { ...Airline };
                    return Airline;
                } else {
                    return Airline;
                }
            });
            //write new arrat of pobject
            fs.writeFile('./data/flights.json', JSON.stringify(newdata), 'utf8', (error, results) => {
                // respond with updated account info
                return res.json({ Airline: updatedFlight });
            })
        }
    })
})

router.delete('/airlines/:flightNumber', (req, res) => {
    // how would I print the accountNumber
    console.log('to view account number', req.params.flightNumber);
    // find the account with the accountNumber
    // grab the account by accountNumber and update
    const { flightNumber } = req.params;
    fs.readFile('./data/flights.json', 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'Error occured. Please try again...' });
        } else {
            data = JSON.parse(data); // array of objects(account)
            // use map to iterate through and update the fields
            const newData = data.filter(airline => airline.flightNumber !== flightNumber);
            // write the new array of objects inside of the accounts.json file
            fs.writeFile('./data/flights.json', JSON.stringify(newData), 'utf8', (error, result) => {
                // respond with the updated account information
                if (newData.length !== data.length) {
                    return res.json({ message: `Account with Account Number ${flightNumber} deleted successfully` });
                } else {
                    return res.status(404).json({ message: 'Account does not exist' })
                }
            })
        }
    })
})

module.exports = router;
