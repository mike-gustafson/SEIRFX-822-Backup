let assert = require('assert');
// require('dotenv').config();
const {
    example_select,
    selectPopulationOfGermany,
    per_capita_gdp,
    small_and_wealthy,
    scandinavia,
    starts_with_g,
    just_the_right_size,

} = require('../problems/01-select-basics');

describe('01 SELECT BASICS', function () {

    describe('example_select', function () {
        it('given : example on how to use select', async function () {
            let result = await example_select();
            assert.deepEqual(result, [ { population: '60700000' } ]);
        });
    });
    
    describe('selectPopulationOfGermany', function () {
        it('selects the population of Germany', async function () {
            let result = await selectPopulationOfGermany();
            assert.deepEqual(result, [ { population: '82500000' } ]);
        });
    });

    describe('per_capita_gdp', function () {
        it('selects the per capita GDP of large countries', async function () {
            let result = await per_capita_gdp();
            assert.deepEqual(result, [
                { name: 'Australia', gdp: '26900' },
                { name: 'Brazil', gdp: '3090' },
                { name: 'Canada', gdp: '28390' },
                { name: 'China', gdp: '1290' },
                { name: 'Russia', gdp: '3410' },
                { name: 'United States of America', gdp: '41400' }
            ]);
        });
    });

    describe('small_and_wealthy', function () {
        it('selects countries with an area under 2,000 and a GDP over 5 billion', async function () {
            let result = await small_and_wealthy();
            assert.deepEqual(result, [
                { name: 'Bahrain', continent: 'Middle East' },
                { name: 'Singapore', continent: 'Asia-Pacific' }
            ]);
        });
    });

    describe('scandinavia', function () {
        it('shows the names and populations of Scandinavian countries', async function () {
            let result = await scandinavia();
            assert.deepEqual(result, [
                { name: 'Denmark', population: '5400000' },
                { name: 'Finland', population: '5200000' },
                { name: 'Norway', population: '4600000' },
                { name: 'Sweden', population: '8900000' }
            ]);
        });
    });

    describe('starts_with_g', function () {
        it('selects countries whose names start with G', async function () {
            let result = await starts_with_g();
            assert.deepEqual(result, [
                { name: 'Gabon' },
                { name: 'Georgia' },
                { name: 'Germany' },
                { name: 'Ghana' },
                { name: 'Greece' },
                { name: 'Grenada' },
                { name: 'Guatemala' },
                { name: 'Guinea' },
                { name: 'Guinea-Bissau' },
                { name: 'Guyana' }
            ]);
        });
    });

    describe('just_the_right_size', function () {
        it('selects countries within the size constraints', async function () {
            let result = await just_the_right_size();
            assert.deepEqual(result, [
                { name: 'Belarus', area: 207 },
                { name: 'Ghana', area: 238 },
                { name: 'Guinea', area: 245 },
                { name: 'Guyana', area: 214 },
                { name: 'Laos', area: 236 },
                { name: 'Romania', area: 238 },
                { name: 'Uganda', area: 241 },
                { name: 'United Kingdom', area: 242 }
            ]);
        });
    });

});