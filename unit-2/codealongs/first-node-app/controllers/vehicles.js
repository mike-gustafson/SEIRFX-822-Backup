const express = require('express');
const fs = require('fs');
const router = express.Router();
const Vehicle = require('../models/vehicle');
const { faker } = require('@faker-js/faker');
const path = require('path');


router.get('/', (req, res) => {
    fs.readFile("./data/vehicles.json", 'utf8', (error, data) => {
        if (error) {
            console.log('------ error -------', error);
            res.json({ message: 'error occured, please try again.' })
        } else {
            console.log(data);
            data = JSON.parse(data);
            return res.render('vehicles/index.ejs', { data: data });
        }
    })
});
router.get('/new', (req, res) => {
    // return res.sendFile(
    //     path.join(__dirname, '..', '/views/vehicles/new.html')
    // )
    return res.render('../views/vehicles/new.ejs')
})

router.get('/:vin', (req, res) => {
    fs.readFile('./data/vehicles.json', 'utf8', (error, data) => {
        if (error) {
            console.log('------ error -------', error);
            res.json({ message: 'error occured, please try again.' })
        } else {
            data = JSON.parse(data);
            for (let i = 0; i < data.length; i++) {
                let vehicle = data[i];
                if (vehicle.vin === req.params.vin) {
                    return res.render('vehicles/show.ejs', { vehicle: vehicle });
                }
            }
            // res.json({ data: data });
        }
    })
});

router.get('/:vin/edit', (req, res) => {
    fs.readFile("./data/vehicles.json", "utf8", (error, data) => {
        if (error) {
            console.log("error", error);
            return res.json({ message: "please try again" });
        } else {
            data = JSON.parse(data);
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let vehicle = data[i];
                if (vehicle.vin === req.params.vin) {
                    // return res.json({ account: account })
                    return res.sendFile(
                        path.join(__dirname, '..', '/views/vehicles/edit.html')
                    )
                }
            }
        }
    })
})

router.post('/', (req, res) => {
    // manufacturer, model, vehicle, vin, type, fuel, color
    //let { color, vehicle, manufacturer, model } = req.body;
    console.log('req.body', req.body)
    let newVehicle = new Vehicle(
        faker.vehicle.model(),
        faker.vehicle.vin(),
        faker.vehicle.manufacturer(),
        faker.vehicle.color(),
        faker.vehicle.type(),
        // faker.vehicle.vehicle(),
        // faker.vehicle.vin(),
    )
    console.log('new vehicle', newVehicle);

    fs.readFile('./data/vehicles.json', 'utf8', (error, data) => {
        if (error) {
            console.log('------ error -------', error);
            res.json({ message: 'error occured, please try again.' })
        } else {
            data = JSON.parse(data);
            let index = data.length;
            newVehicle.id = index; // the new account has an id now.
            data.push(newVehicle);
            data = JSON.stringify(data);
            fs.writeFile('./data/vehicles.json', data, 'utf8', (error, result) => {
                return res.redirect(`/vehicles/${newVehicle.vin}`);
            })
        }
    })
});

router.put("/:vin", (req, res) => {
    // see the account number
    console.log("to view vin number", req.params.vin);
    //////////////////////////////////////////////
    console.log("body", req.body); // data that we want to update
    //////////////////////////////////////////////
    let updatedAccount = {};
    fs.readFile("./data/vehicles.json", "utf8", (error, data) => {
        if (error) {
            return res.json({ message: "something went wring, please figure this out" });
        } else {
            data = JSON.parse(data); // array od objects(accont)
            // use map to iterate through and update the fields
            newData = data.map((car) => {
                // check to see if the account number is the same
                if (car.vin === req.params.vin) {
                    // change the data
                    car.color = req.body.color || car.color; // if there is a pin to change it will update or stay the same.
                    updatedAccount = { ...car };
                    return car;

                } else {
                    return car;
                }
            });

            // write the new array of objects inside of the accounts.json file
            fs.writeFile("./data/vehicles.json", JSON.stringify(newData), "utf8", (error, result) => {
                return res.redirect(`/accounts/${req.params.vin}`);
            });
        }
    })
})

router.delete('/:vin', (req, res) => {
    const vin = req.params.vin;

    fs.readFile('./data/vehicles.json', 'utf8', (error, data) => {
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
                fs.writeFile('./data/vehicles.json', data, 'utf8', (error, result) => {
                    return res.json({ message: 'Account deleted' });
                });
            }
        }
    });
});


module.exports = router;