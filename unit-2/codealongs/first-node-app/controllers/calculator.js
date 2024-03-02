const express = require('express');
const fs = require('fs');
const router = express.Router();
const {add,subtract,multiply, divide} = require('../models/calculator');


router.get('/add/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); // number
    let num2 = Number(req.params.num2); // number
    let answer = add(num1, num2);
    return res.json({ answer: answer });
});

router.get('/subtract/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); // number
    let num2 = Number(req.params.num2); // number
    let answer = subtract(num1, num2);
    return res.json({ answer: answer });
});

router.get('/multiply/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); // number
    let num2 = Number(req.params.num2); // number
    let answer = multiply(num1, num2);
    return res.json({ answer: answer });
});

router.get('/divide/:num1/:num2', (req, res) => {
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
// })

module.exports = router;