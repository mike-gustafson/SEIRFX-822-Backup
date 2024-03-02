let assert = require('assert');
const {
    highest_gdp,
    largest_in_continent,
    large_neighbors,
} = require('../problems/06-countries-bonus');

describe('06 COUNTRIES BONUS', function () {

    describe('highest_gdp', function () {
        it('selects countries with higher GDPs than all European countries', async function () {
            let result = await highest_gdp();
            assert.deepEqual(result, [ 
                { name: 'Japan' }, 
                { name: 'United States of America' } 
            ]);
        });
    });
    describe('largest_in_continent', function () {
        it('selects the countries with the largest areas in their continents', async function () {
            let result = await largest_in_continent();
            assert.deepEqual(result, [
                { continent: 'South America', name: 'Brazil', area: 8550000 },
                { continent: 'North America', name: 'Canada', area: 9900000 },
                { continent: 'Asia-Pacific', name: 'China', area: 9600000 },
                {
                  continent: 'Africa',
                  name: 'Democratic Republic of Congo',
                  area: 2340000
                },
                { continent: 'South Asia', name: 'India', area: 3100000 },
                { continent: 'Americas', name: 'Nicaragua', area: 120254 },
                { continent: 'Europe', name: 'Russia', area: 17000000 },
                { continent: 'Middle East', name: 'Sudan', area: 2500000 }
            ]);
        });
    });
    describe('large_neighbors', function () {
        it('selects countries with much higher populations than their neighbors', async function () {
            let result = await large_neighbors();
            assert.deepEqual(result, [
                { name: 'Brazil', continent: 'South America' },
                { name: 'China', continent: 'Asia-Pacific' },
                { name: 'India', continent: 'South Asia' }
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