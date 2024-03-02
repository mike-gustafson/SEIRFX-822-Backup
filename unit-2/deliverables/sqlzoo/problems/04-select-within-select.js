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

/* A note on subqueries: we can refer to values in the outer SELECT within the 
inner SELECT. We can name the tables so that we can tell the difference
between the inner and outer versions. */

async function example_select_with_subquery() {
    const res = await client.query(
        `
        SELECT
          name
        FROM
          countries
        WHERE
          population > (
            SELECT
              population
            FROM
              countries
            WHERE
              name='Romania'
          );
        `
    );
    return res.rows;
}

async function larger_than_russia() {
    // List each country name where the population is larger than 'Russia'.
    const res = await client.query(
    `
    
    `
    );
    
    return res.rows;
}

async function richer_than_england() {
    // Show the countries in Europe with a per capita GDP greater than
    // 'United Kingdom'.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

async function neighbors_of_certain_b_countries() {
    // List the name and continent of countries in the continents containing
    // 'Belize', 'Belgium'.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

async function population_constraint() {
    // Which country has a population that is more than Canada but less than
    // Poland? Show the name and the population.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

async function sparse_continents() {
    // Find every country that belongs to a continent where each country's
    // population is less than 25,000,000. Show name, continent and
    // population.
    // Hint: Sometimes rewording the problem can help you see the solution.
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}

module.exports = {
    example_select_with_subquery,
    larger_than_russia,
    richer_than_england,
    neighbors_of_certain_b_countries,
    population_constraint,
    sparse_continents,
};