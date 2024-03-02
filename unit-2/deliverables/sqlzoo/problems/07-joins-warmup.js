/**
== Schema Information

Table name: actors

 id          :integer      not null, primary key
 name        :string

Table name: movies

 id          :integer      not null, primary key
 title       :string
 yr          :integer
 score       :float
 votes       :integer
 director_id :integer

Table name: castings

 movie_id    :integer      not null, primary key
 actor_id    :integer      not null, primary key
 ord         :integer

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

async function example_query() {
    const res = await client.query(
        `
        SELECT
        *
        FROM
        movies
        WHERE
        title = 'Doctor No';
        `
    );
    return res.rows;
}

async function films_from_sixty_two() {
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function year_of_kane() {
    // Give year of 'Citizen Kane'.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function trek_films() {
    // List all of the Star Trek movies, include the id, title and yr (all of
    // these movies include the words Star Trek in the title). Order results by year.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function films_by_id() {
    //  What are the titles of the films with id 1119, 1595, 1768?
    const res = await client.query(
        `
        ;
        `
    );
    
    return res.rows;
}

async function glenn_close_id() {
    // What id number does the actress 'Glenn Close' have?
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function casablanca_id() {
    // What is the id of the film 'Casablanca'?
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function casablanca_cast() {
    // Obtain the cast list for 'Casablanca'. Use the id value that you obtained
    // in the previous question directly in your query (for example, id = 1).
    const res = await client.query(
        `
        SELECT
        actors.name
        FROM
        actors
        JOIN
        castings ON castings.actor_id = actors.id
        WHERE
        castings.movie_id = 27;
        `
    );
    
    return res.rows;
}

async function alien_cast() {
    // Obtain the cast list for the film 'Alien'
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

module.exports = {
    example_query,
    films_from_sixty_two,
    year_of_kane,
    trek_films,
    films_by_id,
    glenn_close_id,
    casablanca_id,
    casablanca_cast,
    alien_cast,
};