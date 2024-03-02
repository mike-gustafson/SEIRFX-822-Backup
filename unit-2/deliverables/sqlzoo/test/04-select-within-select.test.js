let assert = require('assert');
const {
    example_select_with_subquery,
    larger_than_russia,
    richer_than_england,
    neighbors_of_certain_b_countries,
    population_constraint,
    sparse_continents,
} = require('../problems/04-select-within-select');

describe('04 SELECT WITHIN SELECT', function () {

    describe('example_select_with_subquery', function () {
        it('given : example on how to use select with subquery', async function () {
            let result = await example_select_with_subquery();
            assert.deepEqual(result, [
                { name: 'Afghanistan' },
                { name: 'Algeria' },
                { name: 'Argentina' },
                { name: 'Bangladesh' },
                { name: 'Brazil' },
                { name: 'Burma' },
                { name: 'Canada' },
                { name: 'China' },
                { name: 'Colombia' },
                { name: 'Democratic Republic of Congo' },
                { name: 'Egypt' },
                { name: 'Ethiopia' },
                { name: 'France' },
                { name: 'Germany' },
                { name: 'India' },
                { name: 'Indonesia' },
                { name: 'Iran' },
                { name: 'Iraq' },
                { name: 'Italy' },
                { name: 'Japan' },
                { name: 'Kenya' },
                { name: 'Malaysia' },
                { name: 'Mexico' },
                { name: 'Morocco' },
                { name: 'Nepal' },
                { name: 'Nigeria' },
                { name: 'North Korea' },
                { name: 'Pakistan' },
                { name: 'Peru' },
                { name: 'Poland' },
                { name: 'Russia' },
                { name: 'Saudi Arabia' },
                { name: 'South Africa' },
                { name: 'South Korea' },
                { name: 'Spain' },
                { name: 'Sudan' },
                { name: 'Taiwan' },
                { name: 'Tanzania' },
                { name: 'Thailand' },
                { name: 'The Philippines' },
                { name: 'Turkey' },
                { name: 'Uganda' },
                { name: 'Ukraine' },
                { name: 'United Kingdom' },
                { name: 'United States of America' },
                { name: 'Uzbekistan' },
                { name: 'Venezuela' },
                { name: 'Vietnam' }
            ]);
        });
    });

    describe('larger_than_russia', function () {
        it('selects countries with a population larger than Russia', async function () {
            let result = await larger_than_russia();
            assert.deepEqual(result, [
                { name: 'Bangladesh' },
                { name: 'Brazil' },
                { name: 'China' },
                { name: 'India' },
                { name: 'Indonesia' },
                { name: 'Pakistan' },
                { name: 'United States of America' }
            ]);
        });
    });

    describe('richer_than_england', function () {
        it('selects countries with a higher per capita GDP than the UK', async function () {
            let result = await richer_than_england();
            assert.deepEqual(result, [
                { name: 'Denmark' },
                { name: 'Iceland' },
                { name: 'Ireland' },
                { name: 'Luxembourg' },
                { name: 'Norway' },
                { name: 'Sweden' },
                { name: 'Switzerland' }
            ]);
        });
    });

    describe('neighbors_of_certain_b_countries', function () {
        it('selects the correct names and continents', async function () {
            let result = await neighbors_of_certain_b_countries();
            assert.deepEqual(result, [
                { name: 'Albania', continent: 'Europe' },
                { name: 'Andorra', continent: 'Europe' },
                { name: 'Antigua and Barbuda', continent: 'Americas' },
                { name: 'Armenia', continent: 'Europe' },
                { name: 'Austria', continent: 'Europe' },
                { name: 'Azerbaijan', continent: 'Europe' },
                { name: 'Bahamas', continent: 'Americas' },
                { name: 'Barbados', continent: 'Americas' },
                { name: 'Belarus', continent: 'Europe' },
                { name: 'Belgium', continent: 'Europe' },
                { name: 'Belize', continent: 'Americas' },
                { name: 'Bosnia-Hercegovina', continent: 'Europe' },
                { name: 'Bulgaria', continent: 'Europe' },
                { name: 'Costa Rica', continent: 'Americas' },
                { name: 'Croatia', continent: 'Europe' },
                { name: 'Cuba', continent: 'Americas' },
                { name: 'Cyprus', continent: 'Europe' },
                { name: 'Czech Republic', continent: 'Europe' },
                { name: 'Denmark', continent: 'Europe' },
                { name: 'Dominica', continent: 'Americas' },
                { name: 'Dominican Republic', continent: 'Americas' },
                { name: 'El Salvador', continent: 'Americas' },
                { name: 'Estonia', continent: 'Europe' },
                { name: 'Finland', continent: 'Europe' },
                {
                  name: 'Former Yugoslav Republic of Macedonia',
                  continent: 'Europe'
                },
                { name: 'France', continent: 'Europe' },
                { name: 'Georgia', continent: 'Europe' },
                { name: 'Germany', continent: 'Europe' },
                { name: 'Greece', continent: 'Europe' },
                { name: 'Grenada', continent: 'Americas' },
                { name: 'Guatemala', continent: 'Americas' },
                { name: 'Haiti', continent: 'Americas' },
                { name: 'Honduras', continent: 'Americas' },
                { name: 'Hungary', continent: 'Europe' },
                { name: 'Iceland', continent: 'Europe' },
                { name: 'Ireland', continent: 'Europe' },
                { name: 'Italy', continent: 'Europe' },
                { name: 'Jamaica', continent: 'Americas' },
                { name: 'Latvia', continent: 'Europe' },
                { name: 'Liechtenstein', continent: 'Europe' },
                { name: 'Lithuania', continent: 'Europe' },
                { name: 'Luxembourg', continent: 'Europe' },
                { name: 'Malta', continent: 'Europe' },
                { name: 'Moldova', continent: 'Europe' },
                { name: 'Monaco', continent: 'Europe' },
                { name: 'Nicaragua', continent: 'Americas' },
                { name: 'Norway', continent: 'Europe' },
                { name: 'Panama', continent: 'Americas' },
                { name: 'Poland', continent: 'Europe' },
                { name: 'Portugal', continent: 'Europe' },
                { name: 'Romania', continent: 'Europe' },
                { name: 'Russia', continent: 'Europe' },
                { name: 'San Marino', continent: 'Europe' },
                { name: 'Serbia and Montenegro', continent: 'Europe' },
                { name: 'Slovakia', continent: 'Europe' },
                { name: 'Slovenia', continent: 'Europe' },
                { name: 'Spain', continent: 'Europe' },
                { name: 'St Kitts and Nevis', continent: 'Americas' },
                { name: 'St Lucia', continent: 'Americas' },
                { name: 'St Vincent and the Grenadines', continent: 'Americas' },
                { name: 'Sweden', continent: 'Europe' },
                { name: 'Switzerland', continent: 'Europe' },
                { name: 'The Netherlands', continent: 'Europe' },
                { name: 'Trinidad and Tobago', continent: 'Americas' },
                { name: 'Turkey', continent: 'Europe' },
                { name: 'Ukraine', continent: 'Europe' },
                { name: 'United Kingdom', continent: 'Europe' },
                { name: 'Vatican', continent: 'Europe' }
            ]);
        });
    });

    describe('population_constraint', function () {
        it('selects countries with a population between Poland and Canada', async function () {
            let result = await population_constraint();
            assert.deepEqual(result, [
                { name: 'Algeria', population: '32900000' },
                { name: 'Kenya', population: '32800000' },
                { name: 'Sudan', population: '35000000' },
                { name: 'Tanzania', population: '38400000' }
            ]);
        });
    });

    describe('sparse_continents', function () {
        it('selects countries in sparsely populated continents', async function () {
            let result = await sparse_continents();
            assert.deepEqual(result, [
                {
                  name: 'Antigua and Barbuda',
                  continent: 'Americas',
                  population: '77000'
                },
                { name: 'Bahamas', continent: 'Americas', population: '321000' },
                { name: 'Barbados', continent: 'Americas', population: '272000' },
                { name: 'Belize', continent: 'Americas', population: '266000' },
                { name: 'Costa Rica', continent: 'Americas', population: '4300000' },
                { name: 'Cuba', continent: 'Americas', population: '11300000' },
                { name: 'Dominica', continent: 'Americas', population: '71000' },
                {
                  name: 'Dominican Republic',
                  continent: 'Americas',
                  population: '9000000'
                },
                { name: 'El Salvador', continent: 'Americas', population: '6700000' },
                { name: 'Grenada', continent: 'Americas', population: '103000' },
                { name: 'Guatemala', continent: 'Americas', population: '13000000' },
                { name: 'Haiti', continent: 'Americas', population: '8500000' },
                { name: 'Honduras', continent: 'Americas', population: '7200000' },
                { name: 'Jamaica', continent: 'Americas', population: '2700000' },
                { name: 'Nicaragua', continent: 'Americas', population: '5700000' },
                { name: 'Panama', continent: 'Americas', population: '3200000' },
                {
                  name: 'St Kitts and Nevis',
                  continent: 'Americas',
                  population: '46000'
                },
                { name: 'St Lucia', continent: 'Americas', population: '152000' },
                {
                  name: 'St Vincent and the Grenadines',
                  continent: 'Americas',
                  population: '121000'
                },
                {
                  name: 'Trinidad and Tobago',
                  continent: 'Americas',
                  population: '1300000'
                }
            ]);
        });
    });

});