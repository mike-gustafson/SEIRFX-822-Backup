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

async function example_sum() {
    const res = await client.query(
        `
        SELECT
        SUM(population)
        FROM
        countries;
        `
    );
    console.lo
    return res.rows;
}

async function continents() {
    // List all the continents - just once each.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

async function africa_gdp() {
    // Give the total GDP of Africa.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

async function area_count() {
    // How many countries have an area of more than 1,000,000?
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

async function group_population() {
    // What is the total population of ('France','Germany','Spain')?
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

async function country_counts() {
    // For each continent show the continent and number of countries.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

async function populous_country_counts() {
    // For each continent show the continent and number of countries with
    // populations of at least 10 million.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

async function populous_continents() {
    // List the continents that have a total population of at least 100 million.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

module.exports = {
    example_sum,
    continents,
    africa_gdp,
    area_count,
    group_population,
    country_counts,
    populous_country_counts,
    populous_continents,
};