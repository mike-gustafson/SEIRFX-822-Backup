/**
== Schema Information

Table name: stops

id          :integer      not null, primary key
name        :string

Table name: routes

num         :string       not null, primary key
company     :string       not null, primary key
pos         :integer      not null, primary key
stop_id     :integer
* */ 

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

async function num_stops() {
    // How many stops are in the database?
    const res = await client.query(
        `
        SELECT
        COUNT(DISTINCT(routes.stop_id))
        FROM
        routes;
        `
    );

    return res.rows;
}

async function craiglockhart_id() {
    // Find the id value for the stop 'Craiglockhart'.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function lrt_stops() {
    // Give the id and the name for the stops on the '4' 'LRT' service.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function connecting_routes() {
    /**
    Consider the following query:

    SELECT
        company,
        num,
        COUNT(*)
    FROM
        routes
    WHERE
        stop_id = 149 OR stop_id = 53
    GROUP BY
        company, num;

    The query gives the number of routes that visit either London Road
    (149) or Craiglockhart (53). Run the query and notice the two services
    that link these stops have a count of 2. Add a HAVING clause to restrict
    the output to these two routes.
     * */ 

    const res = await client.query(
        `
        SELECT
        company,
        num,
        COUNT(*)
        FROM
        routes
        WHERE
        stop_id = 149 OR stop_id = 53
        GROUP BY
        company, num
        HAVING
        COUNT(*) = 2;
        `
    );
    
    return res.rows;
}

async function cl_to_lr() {
    /**
    Consider the query:

    SELECT
      a.company,
      a.num,
      a.stop_id,
      b.stop_id
    FROM
      route a
    JOIN
      route b ON (a.company = b.company AND a.num = b.num)
    WHERE
      a.stop_id = 53;
    
    Observe that b.stop_id gives all the places you can get to from
    Craiglockhart, without changing routes. Change the query so that it
    shows the services from Craiglockhart to London Road. 
     
     * */ 

    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function cl_to_lr_by_name() {
    /**
    Consider the query:
    
    SELECT
      a.company,
      a.num,
      stopa.name,
      stopb.name
    FROM
      route a
    JOIN
      route b ON (a.company = b.company AND a.num = b.num)
    JOIN
      stops stopa ON (a.stop_id = stopa.id)
    JOIN
      stops stopb ON (b.stop_id = stopb.id)
    WHERE
      stopa.name = 'Craiglockhart'
    
    The query shown is similar to the previous one, however by joining two
    copies of the stops table we can refer to stops by name rather than by
    number. Change the query so that the services between 'Craiglockhart' and
    'London Road' are shown.
     * */ 
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function haymarket_and_leith() {
    // Give the company and num of the services that connect stops
    // 115 and 137 ('Haymarket' and 'Leith')
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function craiglockhart_and_tollcross() {
    // Give the company and num of the services that connect stops
    // 'Craiglockhart' and 'Tollcross'
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}
async function start_at_craiglockhart() {
    // Give a distinct list of the stops that can be reached from 'Craiglockhart'
    // by taking one bus, including 'Craiglockhart' itself. Include the stop name,
    // as well as the company and bus no. of the relevant service.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

// ------------- JOINS VERSION --------------
async function craiglockhart_to_sighthill() {
    // Find the routes involving two buses that can go from Craiglockhart to
    // Sighthill. Show the bus no. and company for the first bus, the name of the
    // stop for the transfer, and the bus no. and company for the second bus.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

// ------------- SUBQUERY VERSION --------------
async function craiglockhart_to_sighthill_subqueries() {
    const res = await client.query(
        `
        SELECT DISTINCT
        start.num,
        start.company,
        transfer.name,
        finish.num,
        finish.company
        FROM
        routes AS start
        JOIN
        stops AS transfer ON transfer.id = start.stop_id
        JOIN
        routes AS finish ON transfer.id = finish.stop_id
        WHERE
        (start.num, start.company) IN (
            SELECT
            num, company
            FROM
            routes
            WHERE
            stop_id IN (
                SELECT
                id
                FROM
                stops
                WHERE
                name = 'Craiglockhart'
            )
        ) AND transfer.id IN (
            SELECT
            stop_id
            FROM
            routes
            WHERE
            routes.num IN (
                SELECT
                num
                FROM
                routes
                WHERE
                routes.stop_id IN (
                    SELECT
                    id
                    FROM
                    stops
                    WHERE
                    name = 'Craiglockhart'
                    )
            ) AND routes.company IN (
                SELECT
                company
                FROM
                routes
                WHERE
                routes.stop_id IN (
                    SELECT
                    id
                    FROM
                    stops
                    WHERE
                    name = 'Craiglockhart'
                    )
            )
        ) AND transfer.id IN (
            SELECT
            stop_id AS transfer_point
            FROM
            routes
            WHERE
            routes.num IN (
                SELECT
                num
                FROM
                routes
                WHERE
                routes.stop_id IN (
                    SELECT
                    id
                    FROM
                    stops
                    WHERE
                    name = 'Sighthill'
                    )
            ) AND routes.company IN (
                SELECT
                company
                FROM
                routes
                WHERE
                routes.stop_id IN (
                    SELECT
                    id
                    FROM
                    stops
                    WHERE
                    name = 'Sighthill'
                    )
            )
        ) AND (finish.num, finish.company) IN (
            SELECT
            num, company
            FROM
            routes
            WHERE
            stop_id IN (
                SELECT
                id
                FROM
                stops
                WHERE
                name = 'Sighthill'
            )
        )
        `
    );
    
    return res.rows;
}

module.exports = {
    num_stops,
    craiglockhart_id,
    lrt_stops,
    connecting_routes,
    cl_to_lr,
    cl_to_lr_by_name,
    haymarket_and_leith,
    craiglockhart_and_tollcross,
    start_at_craiglockhart,
    craiglockhart_to_sighthill, 
    craiglockhart_to_sighthill_subqueries,
};