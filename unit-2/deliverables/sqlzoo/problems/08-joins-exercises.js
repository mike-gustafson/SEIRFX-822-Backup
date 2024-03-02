/**
# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#
#  movie_id    :integer      not null, primary key
#  actor_id    :integer      not null, primary key
#  ord         :integer
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

async function example_join() {
    const res = await client.query(
        `
        SELECT
        *
        FROM
        movies
        JOIN
        castings ON movies.id = castings.movie_id
        JOIN
        actors ON castings.actor_id = actors.id
        WHERE
        actors.name = 'Sean Connery';
        `
    );
    
    return res.rows;
}

async function ford_films() {
    // List the films in which 'Harrison Ford' has appeared.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function ford_supporting_films() {
    // List the films where 'Harrison Ford' has appeared - but not in the star
    // role. [Note: the ord field of casting gives the position of the actor. If
    // ord=1 then this actor is in the starring role]
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function films_and_stars_from_sixty_two() {
    // List the title and leading star of every 1962 film.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function travoltas_busiest_years() {
    // Which were the busiest years for 'John Travolta'? Show the year and the
    // number of movies he made for any year in which he made at least 2 movies.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

//  ------------ SUBQUERY VERSION -------------
async function andrews_films_and_leads() {
    // List the film title and the leading actor for all of the films 'Julie
    // Andrews' played in.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

//  ------------ JOINS VERSION -------------
async function andrews_films_and_leads_joins() {
    // List the film title and the leading actor for all of the films 'Julie
    // Andrews' played in.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function prolific_actors() {
    // Obtain a list in alphabetical order of actors who've had at least 15
    // starring roles.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function films_by_cast_size() {
    // List the films released in the year 1978 ordered by the number of actors
    // in the cast (descending), then by title (ascending).
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function colleagues_of_garfunkel() {
    // List all the people who have played alongside 'Art Garfunkel'.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

module.exports = {
    example_join,
    ford_films,
    ford_supporting_films,
    films_and_stars_from_sixty_two,
    travoltas_busiest_years,
    andrews_films_and_leads,
    andrews_films_and_leads_joins,
    prolific_actors,
    films_by_cast_size,
    colleagues_of_garfunkel,
};