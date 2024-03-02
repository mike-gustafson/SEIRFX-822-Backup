let assert = require('assert');
const {
    example_sum,
    continents,
    africa_gdp,
    area_count,
    group_population,
    country_counts,
    populous_country_counts,
    populous_continents,
} = require('../problems/05-aggregates');

describe('05 AGGREGATES', function () {

    describe('example_sum', function () {
        it('given : example on aggregates with sum', async function () {
            let result = await example_sum();
            assert.deepEqual(result, [ { sum: '6431552625' } ]);
        });
    });

    describe('continents', function () {
        it('lists all the continents once each', async function () {
            let result = await continents();
            assert.deepEqual(result, [
                { continent: 'South America' },
                { continent: 'North America' },
                { continent: 'South Asia' },
                { continent: 'Africa' },
                { continent: 'Middle East' },
                { continent: 'Europe' },
                { continent: 'Asia-Pacific' },
                { continent: 'Americas' }
            ]);
        });
    });

    describe('africa_gdp', function () {
        it('gives the total GDP of Africa', async function () {
            let result = await africa_gdp();
            assert.deepEqual(result, [ { sum: '410196200000' } ]);
        });
    });

    describe('area_count', function () {
        it('selects the countries with an area of more than 1 million', async function () {
            let result = await area_count();
            assert.deepEqual(result, [ { count: '28' } ]);
        });
    });

    describe('group_population', function () {
        it('sums the population for the given countries', async function () {
            let result = await group_population();
            assert.deepEqual(result, [ { sum: '187300000' } ]);
        });
    });

    describe('country_counts', function () {
        it('shows the number of populous countries for each continent', async function () {
            let result = await country_counts();
            assert.deepEqual(result, [
                { continent: 'South America', count: '12' },
                { continent: 'North America', count: '3' },
                { continent: 'South Asia', count: '8' },
                { continent: 'Africa', count: '47' },
                { continent: 'Middle East', count: '19' },
                { continent: 'Europe', count: '48' },
                { continent: 'Asia-Pacific', count: '36' },
                { continent: 'Americas', count: '20' }
            ]);
        });
    });

    describe('populous_country_counts', function () {
        it('shows the number of populous countries for each continent', async function () {
            let result = await populous_country_counts();
            assert.deepEqual(result, [
                { continent: 'South America', count: '7' },
                { continent: 'North America', count: '3' },
                { continent: 'South Asia', count: '6' },
                { continent: 'Africa', count: '21' },
                { continent: 'Middle East', count: '10' },
                { continent: 'Europe', count: '16' },
                { continent: 'Asia-Pacific', count: '15' },
                { continent: 'Americas', count: '2' }
            ]);
        });
    });

    describe('populous_continents', function () {
        it('shows the continents with total populations over 100 million', async function () {
            let result = await populous_continents();
            assert.deepEqual(result, [
                { continent: 'South America' },
                { continent: 'North America' },
                { continent: 'South Asia' },
                { continent: 'Africa' },
                { continent: 'Middle East' },
                { continent: 'Europe' },
                { continent: 'Asia-Pacific' }
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