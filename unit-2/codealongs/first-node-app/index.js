const express = require('express');
const app = express();
const layouts = require ('express-ejs-layouts');
const methodOverride = require('method-override');

 app.set('view engine','ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(methodOverride('_method'));
app.get('/', (req, res) => {
    return res.json({ message: 'Welcome to my Node App' })
});

app.use('/accounts',require('./controllers/accounts'));
app.use('/vehicles', require('./controllers/vehicles'));
app.use('/flights', require('./controllers/flights'));
app.use('/calculator', require('./controllers/calculator'));

app.get('/apples', (req, res) => {
    return res.json({ message: 'apples' });
});

app.get('/bananas', (req, res) => {
    return res.json({ message: 'bananas' });
});


// app.get('/read', (req, res) => {
//     // grab the query string,
//     // pass the querystring into the fs function
//     // return the data that comes from the txt file
//     let element = req.query.something; // story
//     fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
//         if (error) {
//             return res.json({ message: 'There is an issue, try again later...'});
//         } else {
//             console.log(data)
//             return res.json({ message: data });
//         }
//     });
// });


// Set up a PORT number, and listen for server 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on PORT ', PORT);
})

module.exports = app;