/** 
== Schema Information

Table name: countries

name        :string       not null, primary key
continent   :string
area        :integer
population  :integer
gdp         :integer
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

// BONUS QUESTIONS: These problems require knowledge of aggregate
// functions. Attempt them after completing section 05.

async function highest_gdp() {
    // Which countries have a GDP greater than every country in Europe? (Give the
    // name only. Some countries may have NULL gdp values)
    const res = await client.query(
        `
        SELECT
        countries.name
        FROM
        countries
        WHERE
        countries.gdp > (
            SELECT
            MAX(c2.gdp)
            FROM
            countries c2
            WHERE
            c2.continent = 'Europe'
        );
        `
    );
    return res.rows;
}

async function largest_in_continent() {
    // Find the largest country (by area) in each continent. Show the continent,
    // name, and area.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

async function large_neighbors() {
    // Some countries have populations more than three times that of any of their
    // neighbors (in the same continent). Give the countries and continents.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

module.exports = {
    highest_gdp,
    largest_in_continent,
    large_neighbors,
};