const express = require('express'); // import express REQUIRED [3rd party module]
// node.js is the engine the backend
// express framework was created ontop of the node. BUILDS THE SERVER (AWS lookup)
const app = express(); // this creates an instance of express REQUIRED, access to the methods (re,res)

const fs = require('fs'); // a [CORE] module that is a file system to store, access and manage data, REQUIRED
// node js feature
const { faker } = require('@faker-js/faker'); // API import [3rd party]

const Account = require(); // single local module import
const { add, subtract, multiply, divide } = require(); // multi local module import

//middleware - 1. variables, instances 2. middleware - (lookup and write notes) 3. routes 4. listening
app.use(express.urlencoded({ extended: false })); // copy DM
// 

app.get(); // calling the app instance and then using the HTTP verb GET
app.get('/'); // route aka URL PATTERN
app.get('/', (req, res) => { // req === REQUEST && res === RESPONSE
    return res.json({ message: 'welcome to my node app' });
});

// PROTOCOL === HTTP://
// DOMAIN === romebell.gitbook.io
// URL PATTERN === /seirfx-822/node-express/00readme-1/01intro-to-express/02routes

// HTTP VERBS
// GET > READ > retrieves/views information
// POST > Create > this creates/stores information to the DB
// PUT > Updates > updates, changes info (is this normally done by user?? what POV use case is typical)
// DELETE > Delete > deletes information

// GET /accounts - return all accounts
// GET /accounts/:accountNumber - returns only 1 account
// POST /accounts - create a new account
// PUT /accounts/:accountNumber - update one account
// DELETE /accounts/:accountNumber - delete one account

//REQUEST METHODS
    req.body.
    // this is where any submitted form data will be stored for us.
    // what is req.body? an object 
    // new account Account { accountNumber: '27819066', account...}
    req.params.
    // this is where special route variables are stored for us.  
    // what is req.params? an object  
    // { num1: '7', num2: '8' }
    req.query.
    // this is where the query string data is stored. 
    // what is req.query? an object  
    // { something: 'story' }

//RESOND METHODS
res.send(); // sends back a simple string. Not really used in production. This is kind of like the console.log() for network requests.
res.sendFile(); // more sophisticated in that it can send an entire file back but file is static.
res.render(); // used to render data into templates with the selected template engine. More on this later.
res.json(); // used to send object data back as JSON. Very common when writing a backend API. Much more on this later.

////// ??????  /////////
res.send() && res.sendFile // are they still relavent???
process.env // how do you know what ENV port we might have? 
EJS // will we be learning this? internets saying react does most functionality

// FS (file system) MODULE:
// Read files
// Create files
// Update files
// Delete files
// Rename files
fs.readFile('ROUTE', 'utf8', (error, data) => { }); //fs.readFile( filename, encoding, callback_function )
fs.writeFile('file.json', stringData, 'utf8', (error, result) => { });  // fs.writeFile( file, data, options, callback )  
//fs.writeFile('file.json', stringData, { encoding: 'utf8', flag: "w", mode: 0o666 }, (error, result) => { });
// specific situation
JSON.parse(); // JSON  => JS object
JSON.stringify(); // JS object => JSON string

// Parameters:
// file: It is a string, Buffer, URL or file description integer that denotes the path of the file where it has to be written. Using a file descriptor will make it behave similar to fs.write() method.
// data: It is a string, Buffer, TypedArray or DataView that will be written to the file.
// options: It is an string or object that can be used to specify optional parameters that will affect the output. It has three optional parameter:
// encoding: It is a string value that specifies the encoding of the file. The default value is ‘utf8’.
// mode: It is an integer value that specifies the file mode. The default value is 0o666.
// flag: It is a string value that specifies the flag used while writing to the file. The default value is ‘w’.
// callback: It is the function that would be called when the method is executed.
// err: It is an error that would be thrown if the operation fails.

app.listen(8000);
// VS
// Set up a PORT number, and listen for server 
process.env // CORE API of the process module which is used ot get the user envioronment
const PORT = process.env.PORT || 8000; // use what is in the ENV or if nothing is there then use 8000
//?? how do you know what ENV port we might have? 
app.listen(PORT, () => {
    console.log('Server is running on PORT ', PORT);
})


// there are many tasks that may or may not need
// to happen before you respond with data
// ----------
// Scenario 1
// You need to iterate through an array of data and return
// some modified data as a response
// ----------
// ----------
// Scenario 2
// You need to hit an API, get back data, parse data,
// and send data as a response
// ----------
// ----------
// Scenario
// You receive some data frmom the user while they are
// making a request, you will need to parse the incoming data, store the data in your database. Finally, you will
// need to respond to the user (via a re-direct to another route)
// using local modules + req.params
// --------------------------------------
// Example: localhost:8000/add/7/8
// Response { "answer": 15 }
// --------------------------------------
// what is req.params? an object
// { num1: '7', num2: '8' }
// --------------------------------------
// using core modules and req.query
// --------------------------------------
// Example: localhost:8000/read?something=story
// Response { "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugit amet minima illo laborum nam alias. Incidunt omnis eos eligendi a, ullam nihil doloremque illo, reprehenderit laudantium, corrupti delectus illum?" }
// --------------------------------------
// what is req.query? an object
// { something: 'story' }