const express = require('express');
const router = express.Router();
const fs = require('fs');
const Account = require('../models/account');
const { faker } = require('@faker-js/faker');
const path = require('path'); // core module


// GET /accounts X
// GET /accounts/:accountNumber x
// POST /accounts x
// PUT /accounts/:accountNumber
// DELETE /accounts/:accountNumber

router.get('/', (req, res) => {
    fs.readFile('./data/accounts.json', 'utf8', (error, data) => {
        if (error) {
            console.log('---- error ----', error);
            return res.json({ message: 'Error occured. Please try again.'})
        } else {
            data = JSON.parse(data); // array
            // return res.json({ data: data });
            // console.log(__dirname)
            // let directory = __dirname.slice(0, __dirname.length - 12)
            // console.log(directory);
            // return res.sendFile(path.join(__dirname, '..', '/views/accounts/index.html'));
            return res.render('accounts/index.ejs', { data: data });
        }
    });
});

router.get('/new', (req, res) => {
    return res.render('accounts/new.ejs');
});

router.get('/:accountNumber', (req, res) => {
    fs.readFile('./data/accounts.json', 'utf8', (error, data) => {
        if (error) {
            console.log('---- error ----', error);
            return res.json({ message: 'Error occured. Please try again.'})
        } else {
            data = JSON.parse(data); // array
            
            // iterate through the array and check each account
            // match that accountNumber with req.params.accountNumbe    
            for (let i = 0; i < data.length; i++) {
                let account = data[i];
                if (account.accountNumber === req.params.accountNumber) {
                    // return res.json({ account: account });
                    // return res.sendFile(path.join(__dirname, '..', '/views/accounts/show.html'));
                    return res.render('accounts/show.ejs', { account: account });
                }
            }
        }
        return res.status(404).json({ message: 'Account cannot be found.'})
    });
});

router.get('/:accountNumber/edit', (req, res) => {
    fs.readFile('./data/accounts.json', 'utf8', (error, data) => {
        if (error) {
            console.log('---- error ----', error);
            return res.json({ message: 'Error occured. Please try again.'})
        } else {
            data = JSON.parse(data); // array
            
            // iterate through the array and check each account
            // match that accountNumber with req.params.accountNumbe    
            for (let i = 0; i < data.length; i++) {
                let account = data[i];
                if (account.accountNumber === req.params.accountNumber) {
                    // return res.json({ account: account });
                    // return res.sendFile(path.join(__dirname, '..', '/views/accounts/show.html'));
                    return res.render('accounts/edit.ejs', { account: account });
                }
            }
        }
        return res.status(404).json({ message: 'Account cannot be found.'})
    });
});

router.get('/:accountNumber/delete', (req, res) => {
    fs.readFile('./data/accounts.json', 'utf8', (error, data) => {
        if (error) {
            console.log('---- error ----', error);
            return res.json({ message: 'Error occured. Please try again.'})
        } else {
            data = JSON.parse(data); // array
            
            // iterate through the array and check each account
            // match that accountNumber with req.params.accountNumbe    
            for (let i = 0; i < data.length; i++) {
                let account = data[i];
                if (account.accountNumber === req.params.accountNumber) {
                    // return res.json({ account: account });
                    // return res.sendFile(path.join(__dirname, '..', '/views/accounts/show.html'));
                    return res.render('accounts/delete.ejs', { account: account });
                }
            }
        }
        return res.status(404).json({ message: 'Account cannot be found.'})
    });
});

router.post('/', (req, res) => {
    // print the data that the user submits
    console.log(req.body); 
    /**
     * { amount: 10000, accountName: 'checking' }
     */
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
            let stringData = JSON.stringify(data);
            // write the data to the file
            fs.writeFile('./data/accounts.json', stringData, 'utf8', (error, result) => {
                return res.redirect(`/accounts/${newAccount.accountNumber}`);
            })
            
        }
    })
});

router.put('/:accountNumber', (req, res) => {
    // how would I print the accountNumber
    console.log('to view account number', req.params.accountNumber);
    // -------------------------------------------
    console.log('body', req.body); // data that we want to update
    // -------------------------------------------
    // find the account with the accountNumber
    // grab the account by accountNumber and update
    let updatedAccount = {};
    fs.readFile('./data/accounts.json', 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'Error occured. Please try again...'});
        } else {
            data = JSON.parse(data); // array of objects(account)
            // use map to iterate through and update the fields
            newData = data.map((account) => {
                // check to see if the account number is the same.
                if (account.accountNumber === req.params.accountNumber) {
                    // change the data
                    account.pin = req.body.pin || account.pin; // if there is a pin to change, then it will update
                    account.amount = Number(req.body.amount || account.amount);
                    account.accountName = req.body.accountName || account.accountName;
                    updatedAccount = { ...account };
                    return updatedAccount;
                } else {
                    return account;
                }
            });

            // write the new array of objects inside of the accounts.json file
            fs.writeFile('./data/accounts.json', JSON.stringify(newData), 'utf8', (error, result) => {
                // respond with the updated account information
                // return res.json({ account: updatedAccount });
                return res.redirect(`/accounts/${req.params.accountNumber}`);
            })
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


// export router at the end
module.exports = router;