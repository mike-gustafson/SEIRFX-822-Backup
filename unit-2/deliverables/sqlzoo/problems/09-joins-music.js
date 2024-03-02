/**
== Schema Information

Table name: albums

asin        :string       not null, primary key
title       :string
artist      :string
price       :float
rdate       :date
label       :string
rank        :integer

Table name: styles

album        :string       not null
style        :string       not null

Table name: tracks
album        :string       not null
disk         :integer      not null
posn         :integer      not null
 song         :string 
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

async function alison_artist() {
    // Select the name of the artist who recorded the song 'Alison'.
    const res = await client.query(
        `
        SELECT
        albums.artist
        FROM
        albums
        JOIN
        tracks ON albums.asin = tracks.album
        WHERE
        tracks.song = 'Alison';
        `
    );
    
    return res.rows;
}

async function exodus_artist() {
    // Select the name of the artist who recorded the song 'Exodus'.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function blur_songs() {
    // Select the `song` for each `track` on the album `Blur`.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function heart_tracks() {
    // For each album show the title and the total number of tracks containing
    // the word 'Heart' (albums with no such tracks need not be shown). Order first by
    // the number of such tracks, then by album title.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function title_tracks() {
    // A 'title track' has a `song` that is the same as its album's `title`. Select
    // the names of all the title tracks.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function eponymous_albums() {
    // An 'eponymous album' has a `title` that is the same as its recording
    // artist's name. Select the titles of all the eponymous albums.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function song_title_counts() {
    // Select the song names that appear on more than two albums. Also select the
    // COUNT of times they show up.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function best_value() {
    // A "good value" album is one where the price per track is less than 50
    // pence. Find the good value albums - show the title, the price and the number
    // of tracks.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function top_track_counts() {
    // Wagner's Ring cycle has an imposing 173 tracks, Bing Crosby clocks up 101
    // tracks. List the top 10 albums. Select both the album title and the track
    // count, and order by both track count and title (descending).
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function rock_superstars() {
    // Select the artist who has recorded the most rock albums, as well as the
    // number of albums. HINT: use LIKE '%Rock%' in your query.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function expensive_tastes() {
    // Select the five styles of music with the highest average price per track,
    // along with the price per track. One or more of each aggregate functions,
    // subqueries, and joins will be required. Order first by the average 
    // price per track (highest to lowest), then by style (a to z).

    // HINT: Start by getting the number of tracks per album. You can do this in a
    // subquery. Next, JOIN the styles table to this result and use aggregates to
    // determine the average price per track.

    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

module.exports = {
    alison_artist,
    exodus_artist,
    blur_songs,
    heart_tracks,
    title_tracks,
    eponymous_albums,
    song_title_counts,
    best_value,
    top_track_counts,
    rock_superstars,
    expensive_tastes,
};