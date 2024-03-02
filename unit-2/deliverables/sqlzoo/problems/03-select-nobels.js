/** 
== Schema Information

Table name: nobels

yr          :integer
subject     :string
winner      :string
*/

require('dotenv').config();
const { Client } = require('pg');
const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

client.connect(function (err) {
    if (err) throw err;
    // console.log("Connected!");
});


async function example_select() {
    const res = await client.query(
        `
        SELECT
        yr,
        subject,
        winner
        FROM
        nobels
        WHERE
        yr = 1960;
        `
    );
    
    return res.rows;
}

async function prizes_from_1950() {
    // Display Nobel prizes for 1950.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

async function literature_1962() {
    //  Show who won the 1962 prize for Literature.
    const res = await client.query(
        `
        
        `
        );
        
    
    return res.rows;
}

async function einstein_prize() {
    // Show the year and subject that won 'Albert Einstein' his prize.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function millennial_peace_prizes() {
    // Give the name of the 'Peace' winners since the year 2000, including 2000.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function eighties_literature() {
    // Show all details (yr, subject, winner) of the Literature prize winners
    // for 1980 to 1989 inclusive.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function presidential_prizes() {
    // Show all details of the presidential winners: ('Theodore Roosevelt',
    // 'Woodrow Wilson', 'Jimmy Carter')
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function nobel_johns() {
    // Show the winners with first name John
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function physics_no_chemistry() {
    // In which years was the Physics prize awarded, but no Chemistry prize?
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

module.exports = {
    example_select,
    prizes_from_1950,
    literature_1962,
    einstein_prize,
    millennial_peace_prizes,
    eighties_literature,
    presidential_prizes,
    nobel_johns,
    physics_no_chemistry,
};