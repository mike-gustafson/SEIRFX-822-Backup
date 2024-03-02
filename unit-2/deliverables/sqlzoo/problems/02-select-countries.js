/*
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

async function large_countries() {
    // Show the names of the countries that have a population of at least
    // 200 million. 200 million is 200,000,000 (eight zeros).
    const res = await client.query(
        ` 
        SELECT 
        name
        FROM
        countries
        WHERE
        population >= 200000000;
        
        
        `
    );

    return res.rows;
}

async function high_population_gdps() {
    // Give the names and the per capita GDPs of countries with a population
    // of at least 200 million.
    const res = await client.query(
        `
        SELECT 
        name,
        gdp/population AS gdp
        FROM
        countries
        WHERE
        population >= 200000000;
        
        `
    );

    return res.rows;
}

async function population_in_millions() {
    // Show the name and population in millions for the countries with continent
    // 'South America'.Divide the population by 1,000,000 to get population in millions.
    const res = await client.query(
        `
        SELECT 
        name,
        population/1000000 AS population_millions
        FROM
        countries
        WHERE
        continent = 'South America';
        
        `
    );

    return res.rows;
}

async function name_and_population() {
    // Show the name and population for 'France', 'Germany', and 'Italy'
    const res = await client.query(
        `
        SELECT 
        name, 
        population
        FROM
        countries
        WHERE
        name IN('France','Germany','Italy');
        
        `
    );

    return res.rows;
}

async function united_we_stand() {
    // Show the countries that have a name that includes the word 'United';
    const res = await client.query(
        `
        SELECT
        name
        FROM 
        countries
        WHERE
        name LIKE '%United%'
        
        `
    );

    return res.rows;
}

module.exports = {
    example_select,
    large_countries,
    high_population_gdps,
    population_in_millions,
    name_and_population,
    united_we_stand,
};