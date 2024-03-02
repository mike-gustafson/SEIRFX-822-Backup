let assert = require('assert');
const {
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
} = require('../problems/08-joins-exercises');

describe('08 JOINS EXERCISES', function () {


    describe('example_join', function () {
        it('given : example of joins', async function () {
            let result = await example_join();
            assert.deepEqual(result, [
                {
                  id: 4,
                  title: 'Rising Sun',
                  yr: 1993,
                  score: 6,
                  votes: 2237,
                  director_id: 288,
                  movie_id: 880,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Diamonds Are Forever',
                  yr: 1971,
                  score: 6.6,
                  votes: 2659,
                  director_id: 636,
                  movie_id: 747,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Playing by Heart',
                  yr: 1998,
                  score: 7.4,
                  votes: 1793,
                  director_id: 2777,
                  movie_id: 1045,
                  actor_id: 4,
                  ord: 3,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Thunderball',
                  yr: 1965,
                  score: 6.8,
                  votes: 2454,
                  director_id: 388,
                  movie_id: 810,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Never Say Never Again',
                  yr: 1983,
                  score: 6.1,
                  votes: 2579,
                  director_id: 651,
                  movie_id: 771,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'You Only Live Twice',
                  yr: 1967,
                  score: 6.8,
                  votes: 2503,
                  director_id: 390,
                  movie_id: 801,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Outland',
                  yr: 1981,
                  score: 6.4,
                  votes: 1402,
                  director_id: 103,
                  movie_id: 1232,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Presidio, The',
                  yr: 1988,
                  score: 5.7,
                  votes: 1162,
                  director_id: 103,
                  movie_id: 1363,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Bridge Too Far, A',
                  yr: 1977,
                  score: 6.8,
                  votes: 1487,
                  director_id: 235,
                  movie_id: 1185,
                  actor_id: 4,
                  ord: 9,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Murder on the Orient Express',
                  yr: 1974,
                  score: 6.9,
                  votes: 1158,
                  director_id: 80,
                  movie_id: 1365,
                  actor_id: 4,
                  ord: 7,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Russia House, The',
                  yr: 1990,
                  score: 6.1,
                  votes: 885,
                  director_id: 272,
                  movie_id: 1644,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Family Business',
                  yr: 1989,
                  score: 5.2,
                  votes: 783,
                  director_id: 80,
                  movie_id: 1778,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Zardoz',
                  yr: 1974,
                  score: 5.4,
                  votes: 900,
                  director_id: 293,
                  movie_id: 1622,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Entrapment',
                  yr: 1999,
                  score: 6.2,
                  votes: 5940,
                  director_id: 669,
                  movie_id: 260,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Hunt for Red October, The',
                  yr: 1990,
                  score: 7.5,
                  votes: 11251,
                  director_id: 196,
                  movie_id: 96,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Indiana Jones and the Last Crusade',
                  yr: 1989,
                  score: 7.8,
                  votes: 20897,
                  director_id: 18,
                  movie_id: 37,
                  actor_id: 4,
                  ord: 2,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Highlander',
                  yr: 1986,
                  score: 7.1,
                  votes: 8013,
                  director_id: 577,
                  movie_id: 167,
                  actor_id: 4,
                  ord: 4,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Rock, The',
                  yr: 1996,
                  score: 7,
                  votes: 18013,
                  director_id: 678,
                  movie_id: 51,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Goldfinger',
                  yr: 1964,
                  score: 7.7,
                  votes: 7180,
                  director_id: 636,
                  movie_id: 199,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Untouchables, The',
                  yr: 1987,
                  score: 7.8,
                  votes: 9592,
                  director_id: 31,
                  movie_id: 122,
                  actor_id: 4,
                  ord: 2,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Name der Rose, Der',
                  yr: 1986,
                  score: 7.5,
                  votes: 4453,
                  director_id: 1131,
                  movie_id: 393,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Time Bandits',
                  yr: 1981,
                  score: 6.8,
                  votes: 3698,
                  director_id: 59,
                  movie_id: 501,
                  actor_id: 4,
                  ord: 2,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Avengers, The',
                  yr: 1998,
                  score: 3.4,
                  votes: 4623,
                  director_id: 412,
                  movie_id: 380,
                  actor_id: 4,
                  ord: 3,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Highlander II: The Quickening',
                  yr: 1991,
                  score: 3.2,
                  votes: 4211,
                  director_id: 577,
                  movie_id: 423,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'Dr. No',
                  yr: 1962,
                  score: 7.1,
                  votes: 3850,
                  director_id: 388,
                  movie_id: 479,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'First Knight',
                  yr: 1995,
                  score: 5.6,
                  votes: 3045,
                  director_id: 1116,
                  movie_id: 643,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                },
                {
                  id: 4,
                  title: 'From Russia with Love',
                  yr: 1963,
                  score: 7.2,
                  votes: 3302,
                  director_id: 388,
                  movie_id: 579,
                  actor_id: 4,
                  ord: 1,
                  name: 'Sean Connery'
                }
            ]);
        });
    });

    describe('ford_films', function () {
        it('selects films in which actor Harrison Ford played', async function () {
            let result = await ford_films();
            assert.deepEqual(result, [
                { title: 'Frantic' },
                { title: 'Mosquito Coast, The' },
                { title: 'Random Hearts' },
                { title: 'Regarding Henry' },
                { title: 'Presumed Innocent' },
                { title: 'Witness' },
                { title: 'Raiders of the Lost Ark' },
                { title: 'Indiana Jones and the Temple of Doom' },
                { title: 'Patriot Games' },
                { title: 'Fugitive, The' },
                { title: 'Indiana Jones and the Last Crusade' },
                { title: 'Star Wars: Episode V - The Empire Strikes Back' },
                { title: 'Star Wars: Episode VI - Return of the Jedi' },
                { title: 'Clear and Present Danger' },
                { title: 'Star Wars' },
                { title: 'Blade Runner' },
                { title: 'Apocalypse Now' },
                { title: 'Air Force One' },
                { title: "Devil's Own, The" },
                { title: 'Sabrina' },
                { title: 'American Graffiti' },
                { title: 'Six Days Seven Nights' },
                { title: 'Conversation, The' },
                { title: 'What Lies Beneath' },
                { title: 'Working Girl' }
            ]);
        });
    });

    describe('ford_supporting_films', function () {
        it('selects films in which Harrison Ford played but did not lead', async function () {
            let result = await ford_supporting_films();
            assert.deepEqual(result, [
                { title: 'Star Wars: Episode V - The Empire Strikes Back' },
                { title: 'Star Wars: Episode VI - Return of the Jedi' },
                { title: 'Star Wars' },
                { title: 'Apocalypse Now' },
                { title: 'American Graffiti' },
                { title: 'Conversation, The' }
            ]);
        });
    });

    describe('films_and_stars_from_sixty_two', function () {
        it('lists the titles and stars of all 1962 films', async function () {
            let result = await films_and_stars_from_sixty_two();
            assert.deepEqual(result, [
                { title: 'Dr. No', name: 'Sean Connery' },
                { title: 'Cape Fear', name: 'Gregory Peck' },
                { title: 'To Kill a Mockingbird', name: 'Gregory Peck' },
                { title: 'What Ever Happened to Baby Jane?', name: 'Bette Davis' },
                { title: 'Music Man, The', name: 'Robert Preston (I)' }
            ]);
        });
    });

    describe('travoltas_busiest_years', function () {
        it(`selects the year and number of movies of John Travolta's busy years`, async function () {
            let result = await travoltas_busiest_years();
            assert.deepEqual(result, [ { yr: 1996, count: '2' }, { yr: 1998, count: '2' } ]);
        });
    });

    describe('(subquery version): andrews_films_and_leads', function () {
        it('selects the titles and lead actors of films Julie Andrews played in', async function () {
            let result = await andrews_films_and_leads();
            assert.deepEqual(result, [
                { title: '10', name: 'Dudley Moore' },
                { title: 'Sound of Music, The', name: 'Julie Andrews' },
                { title: 'Victor/Victoria', name: 'Julie Andrews' }
            ]);
        });
    });

    describe('(joins version): andrews_films_and_leads_joins', function () {
        it('selects the titles and lead actors of films Julie Andrews played in', async function () {
            let result = await andrews_films_and_leads_joins();
            assert.deepEqual(result, [
                { title: 'Victor/Victoria', name: 'Julie Andrews' },
                { title: '10', name: 'Dudley Moore' },
                { title: 'Sound of Music, The', name: 'Julie Andrews' }
            ]);
        });
    });

    describe('prolific_actors', function () {
        it('selects and orders the actors who have had at least 15 starring roles', async function () {
            let result = await prolific_actors();
            assert.deepEqual(result, [
                { name: 'Al Pacino' },
                { name: 'Arnold Schwarzenegger' },
                { name: 'Clint Eastwood' },
                { name: 'Harrison Ford' },
                { name: 'Robert De Niro' },
                { name: 'Robin Williams' },
                { name: 'Sean Connery' },
                { name: 'Sylvester Stallone' },
                { name: 'Tom Hanks' }
            ]);
        });
    });

    describe('films_by_cast_size', function () {
        it('selects 1978 films and orders by cast size', async function () {
            let result = await films_by_cast_size();
            assert.deepEqual(result, [
                { title: 'Death on the Nile', actor_count: '12' },
                { title: 'Capricorn One', actor_count: '11' },
                { title: 'Foul Play', actor_count: '11' },
                { title: 'Heaven Can Wait', actor_count: '11' },
                { title: 'Animal House', actor_count: '9' },
                { title: 'Boys from Brazil, The', actor_count: '9' },
                { title: 'Midnight Express', actor_count: '9' },
                { title: 'Superman', actor_count: '9' },
                { title: 'Watership Down', actor_count: '9' },
                { title: 'Deer Hunter, The', actor_count: '8' },
                { title: 'Grease', actor_count: '8' },
                { title: 'Halloween', actor_count: '8' },
                { title: 'Attack of the Killer Tomatoes!', actor_count: '7' },
                { title: 'Coma', actor_count: '7' },
                { title: 'Damien: Omen II', actor_count: '7' },
                { title: 'Days of Heaven', actor_count: '6' },
                { title: 'Up in Smoke', actor_count: '6' },
                { title: 'Dawn of the Dead', actor_count: '5' }
            ]);
        });
    });

    describe('colleagues_of_garfunkel', function () {
        it('selects actors who have worked with Art Garfunkel', async function () {
            let result = await colleagues_of_garfunkel();
            assert.deepEqual(result, [
                { name: 'Jon Voight' },
                { name: 'Orson Welles' },
                { name: 'Martin Sheen' },
                { name: 'Richard Benjamin' },
                { name: 'Martin Balsam' },
                { name: 'Alan Arkin' },
                { name: 'Bob Balaban' },
                { name: 'Anthony Perkins' },
                { name: 'Jack Gilford' },
                { name: 'Buck Henry' },
                { name: 'Norman Fell' },
                { name: 'Bob Newhart' },
                { name: 'Bill Paxton' },
                { name: 'Kurtwood Smith' },
                { name: 'Julian Sands' },
                { name: 'Sherilyn Fenn' }
            ]);
        });
    });

    // describe('', function () {
    //     it('', async function () {
    //         let result = await populous_country_counts();
    //         assert.deepEqual(result, );
    //     });
    // });

});