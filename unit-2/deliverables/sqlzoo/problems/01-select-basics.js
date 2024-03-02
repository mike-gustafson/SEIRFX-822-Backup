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

async function example_select() {
    const res = await client.query(
        `
        SELECT
        population
        FROM
        countries
        WHERE
        name = 'France';
        `
    );
    return res.rows;
}

async function selectPopulationOfGermany() {
    const res = await client.query(
        ` SELECT
        population
        FROM
        countries
        WHERE
        name = 'Germany';
        
        `
    );
    // await client.end();
    return res.rows;
}

// perCapitaGDP
async function per_capita_gdp() {
    // Show the name and per capita gdp (gdp/population) for each country where
    // the area is over 5,000,000 km^2
    const res = await client.query(
        `SELECT
        name,
        gdp/population AS gpd
        WHERE
        area > 5000000;
        
        `
    );

    return res.rows;

}
// smallAndWealthy
async function small_and_wealthy() {
    // Show the name and continent of countries where the area is less than 2,000
    // and the gdp is more than 5,000,000,000.
    const res = await client.query(
        `
        SELECT
        name,
        continent
        FROM
        countries
        WHERE 
        area < 2000
        AND
        gdp > 5000000;
        
        `
    );

    return res.rows;
}

async function scandinavia() {
    // Show the name and the population for 'Denmark', 
    // 'Finland', 'Norway', and 'Sweden'
    const res = await client.query(
        `
        SELECT 
        name,
        population
        FROM
        countries
        WHERE
        name IN('Denmark', 'Finland','Sweden');
        
        `
    );
    
    return res.rows;
}
// startsWithG
async function starts_with_g() {
    // Show each country that begins with the letter G
    const res = await client.query(
        `
        SELECT 
        name
        FROM
        countries
        WHERE
        name LIKE 'G%';
        
        `
    );

    return res.rows;
}
// justTheRightSize
async function just_the_right_size() {
    // Show the country and the area in 1000's of square kilometers for countries
    // with an area between 200,000 and 250,000.
    // BETWEEN allows range checking - note that it is inclusive.
    const res = await client.query(
        `
        SELECT 
        name,
        area/1000,
        FROM 
        countries
        WHERE
        area BETWEEN 200000 AND 250000;
        
        `
    );

    return res.rows;
}

module.exports = {
    example_select,
    selectPopulationOfGermany,
    per_capita_gdp,
    small_and_wealthy,
    scandinavia,
    starts_with_g,
    just_the_right_size,
};