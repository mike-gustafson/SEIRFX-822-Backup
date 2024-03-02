const express = require('express');
const fs = require('fs');
const router = express.Router();
const Account = require('../models/account');
const { faker } = require('@faker-js/faker');
const path = require('path');
// GET /accounts
// GET /accounts/:accountNumber
// POST /accounts
// PUT /accounts/:accountNumber
// DELETE /accounts/:accountNumber

router.get('/', (req, res) => {
    fs.readFile("./data/accounts.json", "utf8", (error, data) => {
        if (error) {
            console.log("error", error);
            return res.json({ message: "please try again" });
        } else {
            data = JSON.parse(data);
            // return res.json({ data: data });
            // return res.sendFile(__dirname + './views/accounts/index.html')
            // return res.sendFile(
			// 	path.join(__dirname, '..', '/views/accounts/index.html')
            return res.render('accounts/index.ejs',{ data : data});
			//);
        }
    });
})

router.get('/new', (req,res)=>{
    // return res.sendFile(
    //     path.join(__dirname, '..','/views/accounts/new.html')
    // )
    return res.render('../views/accounts/new.ejs')
})
// router.get('/:accountNumber/edit', (req,res)=>{
//     fs.readFile("./data/accounts.json", "utf8", (error, data) => {
//         if (error) {
//             console.log("error", error);
//             return res.json({ message: "please try again" });
//         } else {
//             data = JSON.parse(data);
//             console.log(data);
//             for (let i = 0; i < data.length; i++) {
//                 let account = data[i];
//                 if (account.vin === req.params.vin) {
//                     // return res.json({ account: account })
//                     return res.sendFile(
//                         path.join(__dirname, '..','/views/accounts/edit.ejs')
//                     )
//                 }
//             }
//         }
//     })
// })
router.get("/:accountNumber", (req, res) => {
    fs.readFile("./data/accounts.json", "utf8", (error, data) => {
        if (error) {
            console.log("error", error);
            return res.json({ message: "please try again" });
        } else {
            data = JSON.parse(data);
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let account = data[i];
                if (account.accountNumber === req.params.accountNumber) {
                    // return res.json({ account: account })
                    // return res.sendFile(
                    //     path.join(__dirname, '..', '/views/accounts/show.html')
                    // )
                    return res.render('accounts/show.ejs', { account: account});
                }
            }
        }
    })
})


router.get('/:accountNumber/edit', (req,res)=>{
    fs.readFile("./data/accounts.json", "utf8", (error, data) => {
        if (error) {
            console.log("error", error);
            return res.json({ message: "please try again" });
        } else {
            data = JSON.parse(data);
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let account = data[i];
                if (account.accountNumber === req.params.accountNumber) {
                    // return res.json({ account: account })
                    // return res.sendFile(
                    //     path.join(__dirname, '..', '/views/accounts/show.html')
                    // )
                    return res.render('accounts/edit.ejs', { account: account});
                }
            }
        }
    })
})
router.get("/:accountNumber/delete", (req, res) => {
    fs.readFile("./data/accounts.json", "utf8", (error, data) => {
        if (error) {
            console.log("error", error);
            return res.json({ message: "please try again" });
        } else {
            data = JSON.parse(data);
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let account = data[i];
                if (account.accountNumber === req.params.accountNumber) {
                    // return res.json({ account: account })
                    // return res.sendFile(
                    //     path.join(__dirname, '..', '/views/accounts/show.html')
                    // )
                    return res.render('accounts/delete.ejs', { account: account});
                }
            }
        }
    })
})


router.post('/', (req, res) => {
    // print the data that the user submits
    console.log(req.body);
    // create a new account
    let newAccount = new Account(
        req.body.accountName,
        faker.finance.accountNumber(),
        Number(req.body.amount),
        faker.finance.routingNumber(),
        faker.finance.pin()
    )
    // print the newAccount
    console.log('new account', newAccount);
    fs.readFile('./data/accounts.json', 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'Error occured. Please try again' });
        } else {
            data = JSON.parse(data); // array
            let index = data.length;
            newAccount.id = index; // the new account has an id now.
            data.push(newAccount);
            data = JSON.stringify(data);
            // write the data to the file
            fs.writeFile('./data/accounts.json', data, 'utf8', (error, result) => {
                return res.redirect(`/accounts/${newAccount.accountNumber}`);
            })

        }
    })
})

router.put("/:accountNumber", (req, res) => {
    // see the account number
    console.log("to view account number", req.params.accountNumber);
    //////////////////////////////////////////////
    console.log("body", req.body); // data that we want to update
    //////////////////////////////////////////////
    let updatedAccount = {};
    fs.readFile("./data/accounts.json", "utf8", (error, data) => {
        if (error) {
            return res.json({ message: "something went wring, please figure this out" });
        } else {
            data = JSON.parse(data); // array od objects(accont)
            // use map to iterate through and update the fields
            newData = data.map((account) => {
                // check to see if the account number is the same
                if (account.accountNumber === req.params.accountNumber) {
                    // change the data
                    account.pin = req.body.pin || account.pin; // if there is a pin to change it will update or stay the same.
                    account.amount = Number(req.body.amount || account.amount);
                    account.accountName = req.body.accountName || account.accountName;
                    updatedAccount = { ...account };
                    return updatedAccount;

                } else {
                    return account;
                }
            });

            // write the new array of objects inside of the accounts.json file
            fs.writeFile("./data/accounts.json", JSON.stringify(newData), "utf8", (error, result) => {
                return res.redirect(`/accounts/${req.params.accountNumber}`);
            });
        }
    })
})

router.delete('/:accountNumber', (req, res) => {
    // how would I print the accountNumber
    console.log('to view account number', req.params.accountNumber);
    // find the account with the accountNumber
    // grab the account by accountNumber and update
    const { accountNumber } = req.params;
    fs.readFile('./data/accounts.json', 'utf8', (error, data) => {
      if (error) {
        return res.json({ message: 'Error occured. Please try again...' });
      } else {
        data = JSON.parse(data); // array of objects(account)
        // use map to iterate through and update the fields
        const newData = data.filter(account => account.accountNumber !== accountNumber);
        // write the new array of objects inside of the accounts.json file
        fs.writeFile('./data/accounts.json', JSON.stringify(newData), 'utf8', (error, result) => {
          // respond with the updated account information
          if (newData.length !== data.length) {
            //   return res.json({ message: `Account with Account Number ${accountNumber} deleted successfully` });
            return res.redirect('/accounts');
          } else {
            return res.status(404).json({ message: 'Account does not exist' })
          }
        })
      }
    })
  });


module.exports = router;