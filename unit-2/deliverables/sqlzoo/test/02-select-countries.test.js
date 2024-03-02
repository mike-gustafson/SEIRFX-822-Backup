let assert = require('assert');
const {
    example_select,
    large_countries,
    high_population_gdps,
    population_in_millions,
    name_and_population,
    united_we_stand,
} = require('../problems/02-select-countries');

describe('02 SELECT COUNTRIES', function () {

    describe('example_select', function () {
        it('given : example on how to use select', async function () {
            let result = await example_select();
            assert.deepEqual(result, [ { population: '60700000' } ]);
        });
    });

    describe('large_countries', function () {
        it('selects the names of countries with over 200 million people', async function () {
            let result = await large_countries();
            assert.deepEqual(result, [
                { name: 'China' },
                { name: 'India' },
                { name: 'Indonesia' },
                { name: 'United States of America' }
            ]);
        });
    });

    describe('high_population_gdps', function () {
        it('selects names and per capita GDPs', async function () {
            let result = await high_population_gdps();
            assert.deepEqual(result, [
                { name: 'China', gdp: '1290' },
                { name: 'India', gdp: '620' },
                { name: 'Indonesia', gdp: '1140' },
                { name: 'United States of America', gdp: '41400' }
              ]);
        });
    });

    describe('population_in_millions', function () {
        it('selects the population in millions of countries in South America', async function () {
            let result = await population_in_millions();
            assert.deepEqual(result, [
                { name: 'Argentina', population_millions: '39' },
                { name: 'Bolivia', population_millions: '9' },
                { name: 'Brazil', population_millions: '182' },
                { name: 'Chile', population_millions: '16' },
                { name: 'Colombia', population_millions: '45' },
                { name: 'Ecuador', population_millions: '13' },
                { name: 'Guyana', population_millions: '0' },
                { name: 'Paraguay', population_millions: '6' },
                { name: 'Peru', population_millions: '28' },
                { name: 'Surinam', population_millions: '0' },
                { name: 'Uruguay', population_millions: '3' },
                { name: 'Venezuela', population_millions: '26' }
            ]);
        });
    });

    describe('name_and_population', function () {
        it('selects the name and population of the specified countries', async function () {
            let result = await name_and_population();
            assert.deepEqual(result, [
                { name: 'France', population: '60700000' },
                { name: 'Germany', population: '82500000' },
                { name: 'Italy', population: '57200000' }
            ]);
        });
    });

    describe('united_we_stand', function () {
        it('shows countries whose names contain "United"', async function () {
            let result = await united_we_stand();
            assert.deepEqual(result, [
                { name: 'United Arab Emirates' },
                { name: 'United Kingdom' },
                { name: 'United States of America' }
            ]);
        });
    });

});