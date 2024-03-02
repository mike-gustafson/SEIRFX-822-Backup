let assert = require('assert');
const {
    example_query,
    films_from_sixty_two,
    year_of_kane,
    trek_films,
    films_by_id,
    glenn_close_id,
    casablanca_id,
    casablanca_cast,
    alien_cast,
} = require('../problems/07-joins-warmup');

describe('07 JOINS WARMUP', function () {

    describe('example_query', function () {
        it('given : example_query', async function () {
            let result = await example_query();
            assert.deepEqual(result, []);
        });
    });

    describe('films_from_sixty_two', function () {
        it('selects films from the year 1962', async function () {
            let result = await films_from_sixty_two();
            assert.deepEqual(result, [
                { id: 121, title: 'To Kill a Mockingbird' },
                { id: 479, title: 'Dr. No' },
                { id: 1082, title: 'Music Man, The' },
                { id: 1496, title: 'What Ever Happened to Baby Jane?' },
                { id: 1751, title: 'Cape Fear' }
            ]);
        });
    });

    describe('year_of_kane', function () {
        it('selects the year that Citizen Kane was released', async function () {
            let result = await year_of_kane();
            assert.deepEqual(result, [ { yr: 1941 } ]);
        });
    });

    describe('trek_films', function () {
        it('selects all Star Trek films and orders them by year', async function () {
            let result = await trek_films();
            assert.deepEqual(result, [
                { id: 402, title: 'Star Trek: The Motion Picture', yr: 1979 },
                { id: 209, title: 'Star Trek: The Wrath of Khan', yr: 1982 },
                { id: 438, title: 'Star Trek III: The Search for Spock', yr: 1984 },
                { id: 349, title: 'Star Trek IV: The Voyage Home', yr: 1986 },
                { id: 472, title: 'Star Trek V: The Final Frontier', yr: 1989 },
                {
                  id: 410,
                  title: 'Star Trek VI: The Undiscovered Country',
                  yr: 1991
                },
                { id: 280, title: 'Star Trek: Generations', yr: 1994 },
                { id: 68, title: 'Star Trek: First Contact', yr: 1996 },
                { id: 252, title: 'Star Trek: Insurrection', yr: 1998 }
            ]);
        });
    });

    describe('films_by_id', function () {
        it('selects the names of the films with the given IDs', async function () {
            let result = await films_by_id();
            assert.deepEqual(result, [
                { title: "Big Momma's House" },
                { title: 'Power of One, The' },
                { title: 'To Be or Not to Be' }
            ]);
        });
    });

    describe('glenn_close_id', function () {
        it('selects the ID of actress Glenn Close', async function () {
            let result = await glenn_close_id();
            assert.deepEqual(result, [ { id: 104 } ]);
        });
    });

    describe('casablanca_id', function () {
        it('selects the ID of the film Casablanca', async function () {
            let result = await casablanca_id();
            assert.deepEqual(result, [ { id: 27 } ]);
        });
    });

    describe('casablanca_cast', function () {
        it('selects the cast of the film Casablanca', async function () {
            let result = await casablanca_cast();
            assert.deepEqual(result, [
                { name: 'Humphrey Bogart' },
                { name: 'Ingrid Bergman' },
                { name: 'Claude Rains' },
                { name: 'Peter Lorre' },
                { name: 'Paul Henreid' },
                { name: 'John Qualen' },
                { name: 'Curt Bois' },
                { name: 'Conrad Veidt' },
                { name: 'Madeleine LeBeau' }
            ]);
        });
    });

    describe('alien_cast', function () {
        it('selects the cast of the film Alien', async function () {
            let result = await alien_cast();
            assert.deepEqual(result, [
                { name: 'Sigourney Weaver' },
                { name: 'Ian Holm' },
                { name: 'Harry Dean Stanton' },
                { name: 'Tom Skerritt' },
                { name: 'John Hurt' },
                { name: 'Veronica Cartwright' },
                { name: 'Yaphet Kotto' }
            ]);
        });
    });

});