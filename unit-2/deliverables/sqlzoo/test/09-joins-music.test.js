let assert = require('assert');
const {
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
} = require('../problems/09-joins-music');

describe('09 JOINS MUSIC', function () {
    describe('alison_artist', function () {
        it(`selects the artist who recorded 'Alison'`, async function () {
            let result = await alison_artist();
            assert.deepEqual(result, [ { artist: 'Elvis Costello' } ]);
        });
    });
    
    describe('exodus_artist', function () {
        it(`selects the artist who recorded 'Exodus'`, async function () {
            let result = await exodus_artist();
            assert.deepEqual(result, [ { artist: 'Bob Marley' } ]);
        });
    });

    describe('blur_songs', function () {
        it(`selects the songs on the album 'Blur'`, async function () {
            let result = await blur_songs();
            assert.deepEqual(result, [
                { song: 'Beetlebum' },
                { song: 'Song 2' },
                { song: 'Country Sad Ballad Man' },
                { song: 'M.O.R.' },
                { song: 'On Your Own' },
                { song: 'Theme From Retro' },
                { song: "You're So Great" },
                { song: 'Death Of A Party' },
                { song: 'Chinese Bombs' },
                { song: "I'm Just A Killer For Your Love" },
                { song: 'Look Inside America' },
                { song: 'Strange News From Another Star' },
                { song: "Movin' On" },
                { song: 'Essex Dogs' }
            ]);
        });
    });

    describe('heart_tracks', function () {
        it(`selects albums with songs containing the word 'Heart'`, async function () {
            let result = await heart_tracks();
            assert.deepEqual(result, [
                {
                  title: 'Bing! His Legendary Years, 1931 to 1957 [BOX SET]',
                  count: '5'
                },
                { title: 'The Greatest Hits', count: '4' },
                { title: 'Forty Years-Artistry of Tony B', count: '3' },
                { title: '50 Worldwide Gold HitsVolume 1, Parts 1 & 2', count: '2' },
                { title: 'Baby One More Time [ENHANCED CD]', count: '2' },
                { title: 'BasherThe Best of Nick Lowe', count: '2' },
                { title: 'San Francisco Days', count: '2' },
                { title: "Sgt. Pepper's Lonely Hearts Club Band", count: '2' },
                {
                  title: 'The Dionne Warwick CollectionHer All-Time Greatest',
                  count: '2'
                },
                { title: 'The Mel TormCollection [BOX SET]', count: '2' },
                { title: 'Believe', count: '1' },
                { title: 'Best Of', count: '1' },
                { title: 'Blood on the Tracks', count: '1' },
                { title: 'Eurythmics - Greatest Hits', count: '1' },
                { title: 'Greatest HitsKing of Cool', count: '1' },
                { title: 'Handel - Messiah / Nelson Kirkby Watkinson', count: '1' },
                { title: 'I Left My Heart in San Francisco', count: '1' },
                { title: 'Judy at Carnegie Hall [LIVE]', count: '1' },
                {
                  title: 'Les MiserablesOriginal London Cast Recording [CAST',
                  count: '1'
                },
                { title: "Let's Talk About Love [ENHANCED CD]", count: '1' },
                { title: 'Millennium', count: '1' },
                { title: 'N Sync', count: '1' },
                { title: 'Parallel Lines', count: '1' },
                { title: 'Sevens', count: '1' },
                { title: "Singles 45's and Under", count: '1' },
                { title: 'The Best...So Far', count: '1' },
                { title: 'The Capitol Years', count: '1' },
                { title: 'The Immaculate Collection', count: '1' },
                {
                  title: 'TitanicMusic from the Motion Picture (1997) [SOUND',
                  count: '1'
                },
                { title: 'Top Ten Hits', count: '1' },
                { title: 'Wide Open Spaces', count: '1' },
                {
                  title: 'Yellow Submarine [ORIGINAL RECORDING REMASTERED]',
                  count: '1'
                }
            ]);
        });
    });

    describe('title_tracks', function () {
        it('selects the names of all title tracks', async function () {
            let result = await title_tracks();
            assert.deepEqual(result, [
                { song: 'Mellon Collie and the Infinite Sadness' },
                { song: 'Come on Over' },
                { song: 'I Left My Heart in San Francisco' },
                { song: 'Highway 61 Revisited' },
                { song: 'Born to Run' },
                { song: 'London Calling' },
                { song: 'Thriller' },
                { song: 'Born in the U.S.A.' },
                { song: 'Faith' },
                { song: 'Falling into You' },
                { song: 'Butterfly' },
                { song: 'Wide Open Spaces' },
                { song: 'Hotel California' },
                { song: 'Master of Puppets' },
                { song: 'Little Earthquakes' },
                { song: 'Mack the Knife' },
                { song: 'Sail Away' },
                { song: 'Moondance' },
                { song: 'Watermark' },
                { song: 'San Francisco Days' },
                { song: 'Graceland' },
                { song: 'Ray of Light' },
                { song: 'Are You Experienced?' },
                { song: "Sgt. Pepper's Lonely Hearts Club Band" },
                { song: 'In It for the Money' },
                { song: 'Fumbling Towards Ecstasy' },
                { song: 'Buena Vista Social Club' },
                { song: 'The Miseducation Of Lauryn Hill' },
                { song: 'Believe' }
            ]);
        });
    });

    describe('eponymous_albums', function () {
        it('selects the names of all eponymous albums', async function () {
            let result = await eponymous_albums();
            assert.deepEqual(result, [
                { title: 'Blur' },
                { title: 'Toni Braxton' },
                { title: 'Metallica' },
                { title: 'The Doors' }
            ]);
        });
    });

    describe('song_title_counts', function () {
        it('selects the names and counts of songs that appear on more than two albums', async function () {
            let result = await song_title_counts();
            assert.deepEqual(result, [
                { song: 'Angel', count: '3' },
                { song: 'Best Is Yet to Come', count: '3' },
                { song: 'Dancing in the Dark', count: '3' },
                { song: 'From This Moment On', count: '4' },
                { song: 'I Love You', count: '4' },
                { song: "I've Got You Under My Skin", count: '3' },
                { song: 'One', count: '3' },
                { song: 'Smile', count: '5' },
                { song: 'Too Much', count: '3' }
            ]);
        });
    });

    describe('best_value', function () {
        it('selects the title, price, and track count of high-value albums', async function () {
            let result = await best_value();
            assert.deepEqual(result, [
                { title: 'The Capitol Years', price: '34.99', count: '75' },
                { title: 'The Greatest Hits', price: '22.99', count: '54' },
                { title: 'Under the Table & Dreaming', price: '13.49', count: '34' },
                {
                  title: 'First Issue-Dinah Washington S',
                  price: '22.98',
                  count: '46'
                },
                { title: 'BasherThe Best of Nick Lowe', price: '11.98', count: '25' },
                {
                  title: 'Forty Years-Artistry of Tony B',
                  price: '35.99',
                  count: '87'
                },
                {
                  title: 'Darlings of Wapping Wharf Launderette',
                  price: '14.99',
                  count: '50'
                }
            ]);
        });
    });

    describe('top_track_counts', function () {
        it('selects the titles and track counts of large albums', async function () {
            let result = await top_track_counts();
            assert.deepEqual(result, [
                {
                  title: 'Wagner - Der Ring des Nibelungen (Ring Cycle) / Si',
                  count: '173'
                },
                {
                  title: 'Bing! His Legendary Years, 1931 to 1957 [BOX SET]',
                  count: '101'
                },
                { title: 'The Mel TormCollection [BOX SET]', count: '92' },
                { title: 'Forty Years-Artistry of Tony B', count: '87' },
                { title: 'The Capitol Years', count: '75' },
                { title: 'The Greatest Hits', count: '54' },
                { title: 'The Beatles (The White Album)', count: '53' },
                { title: 'Darlings of Wapping Wharf Launderette', count: '50' },
                { title: '50 by Bobby Short', count: '50' },
                { title: 'First Issue-Dinah Washington S', count: '46' }
            ]);
        });
    });

    describe('rock_superstars', function () {
        it('selects the name of the most prolific rock artist', async function () {
            let result = await rock_superstars();
            assert.deepEqual(result, [ { artist: 'The Beatles', count: '7' } ]);
        });
    });

    describe('expensive_tastes', function () {
        it('selects the five genres that cost the most per track', async function () {
            let result = await expensive_tastes();
            assert.deepEqual(result, [
                {
                  style: 'Styles > Classical > Forms & Genres > Theatrical, Incidental & Program Music > Incidental Music',
                  price: '2.3557142857142857'
                },
                {
                  style: 'Styles > Classical > Historical Periods > Romantic (c.1820-1910) > Ballets & Dances',
                  price: '2.3557142857142857'
                },
                {
                  style: 'Styles > Classical > Historical Periods > Romantic (c.1820-1910) > Forms & Genres > Theatrical, Inci',
                  price: '2.3557142857142857'
                },
                {
                  style: 'Styles > Classical > Forms & Genres > Symphonies > Romantic',
                  price: '1.8980000000000000'
                },
                {
                  style: 'Styles > Classical > Symphonies > General',
                  price: '1.8980000000000000'
                }
            ]);
        });
    });

});