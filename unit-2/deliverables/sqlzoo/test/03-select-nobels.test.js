let assert = require('assert');
const {
    example_select,
    prizes_from_1950,
    literature_1962,
    einstein_prize,
    millennial_peace_prizes,
    eighties_literature,
    presidential_prizes,
    nobel_johns,
    physics_no_chemistry,
} = require('../problems/03-select-nobels');

describe('03 SELECT NOBELS', function () {

    describe('example_select', function () {
        it('given : example on how to use select', async function () {
            let result = await example_select();
            assert.deepEqual(result, [
                { yr: 1960, subject: 'Chemistry', winner: 'Willard F. Libby' },
                { yr: 1960, subject: 'Literature', winner: 'Saint-John Perse' },
                { yr: 1960, subject: 'Medicine', winner: 'Sir Frank Macfarlane Burnet'},
                { yr: 1960, subject: 'Medicine', winner: 'Peter Medawar' },
                { yr: 1960, subject: 'Peace', winner: 'Albert Lutuli' },
                { yr: 1960, subject: 'Physics', winner: 'Donald A. Glaser' }
              ]);
        });
    });

    describe('prizes_from_1950', function () {
        it('selects nobel prizes from 1950', async function () {
            let result = await prizes_from_1950();
            assert.deepEqual(result, [
                { yr: 1950, subject: 'Chemistry', winner: 'Kurt Alder' },
                { yr: 1950, subject: 'Chemistry', winner: 'Otto Diels' },
                { yr: 1950, subject: 'Literature', winner: 'Bertrand Russell' },
                { yr: 1950, subject: 'Medicine', winner: 'Philip S. Hench' },
                { yr: 1950, subject: 'Medicine', winner: 'Edward C. Kendall' },
                { yr: 1950, subject: 'Medicine', winner: 'Tadeus Reichstein' },
                { yr: 1950, subject: 'Peace', winner: 'Ralph Bunche' },
                { yr: 1950, subject: 'Physics', winner: 'Cecil Powell' }
              ]);
        });
    });

    describe('literature_1962', function () {
        it('selects the winner of the literature prize in 1962', async function () {
            let result = await literature_1962();
            assert.deepEqual(result, [ { winner: 'John Steinbeck' } ]);
        });
    });

    describe('einstein_prize', function () {
        it('selects the year and subject in which Albert Einstein won his prize', async function () {
            let result = await einstein_prize();
            assert.deepEqual(result, [ { yr: 1921, subject: 'Physics' } ]);
        });
    });

    describe('millennial_peace_prizes', function () {
        it('selects the year and subject in which Albert Einstein won his prize', async function () {
            let result = await millennial_peace_prizes();
            assert.deepEqual(result, [
                { winner: 'Martti Ahtisaari' },
                { winner: 'Intergovernmental Panel on Climate Change' },
                { winner: 'Al Gore' },
                { winner: 'Grameen Bank' },
                { winner: 'Muhammad Yunus' },
                { winner: 'International Atomic Energy Agency' },
                { winner: 'Mohamed ElBaradei' },
                { winner: 'Wangari Maathai' },
                { winner: 'Shirin Ebadi' },
                { winner: 'Jimmy Carter' },
                { winner: 'United Nations' },
                { winner: 'Kofi Annan' },
                { winner: 'Kim Dae-jung' }
            ]);
        });
    });

    describe('eighties_literature', function () {
        it('selects the year and subject in which Albert Einstein won his prize', async function () {
            let result = await eighties_literature();
            assert.deepEqual(result, [
                { yr: 1989, subject: 'Literature', winner: 'Camilo JosÃ© Cela' },
                { yr: 1988, subject: 'Literature', winner: 'Naguib Mahfouz' },
                { yr: 1987, subject: 'Literature', winner: 'Joseph Brodsky' },
                { yr: 1986, subject: 'Literature', winner: 'Wole Soyinka' },
                { yr: 1985, subject: 'Literature', winner: 'Claude Simon' },
                { yr: 1984, subject: 'Literature', winner: 'Jaroslav Seifert' },
                { yr: 1983, subject: 'Literature', winner: 'William Golding' },
                { yr: 1982, subject: 'Literature', winner: 'Gabriel GarcÃ­a MÃ¡rquez'},
                { yr: 1981, subject: 'Literature', winner: 'Elias Canetti' },
                { yr: 1980, subject: 'Literature', winner: 'Czeslaw Milosz' }
              ]);
        });
    });

    describe('presidential_prizes', function () {
        it('selects the year and subject in which Albert Einstein won his prize', async function () {
            let result = await presidential_prizes();
            assert.deepEqual(result, [
                { yr: 2002, subject: 'Peace', winner: 'Jimmy Carter' },
                { yr: 1919, subject: 'Peace', winner: 'Woodrow Wilson' },
                { yr: 1906, subject: 'Peace', winner: 'Theodore Roosevelt' }
            ]);
        });
    });

    describe('nobel_johns', function () {
        it('selects the year and subject in which Albert Einstein won his prize', async function () {
            let result = await nobel_johns();
            assert.deepEqual(result, [
                { winner: 'John C. Mather' },
                { winner: 'John L. Hall' },
                { winner: 'John B. Fenn' },
                { winner: 'John E. Sulston' },
                { winner: 'John Pople' },
                { winner: 'John Hume' },
                { winner: 'John E. Walker' },
                { winner: 'John C. Harsanyi' },
                { winner: 'John F. Nash Jr.' },
                { winner: 'John C. Polanyi' },
                { winner: 'John R. Vane' },
                { winner: 'John H. van Vleck' },
                { winner: 'John Cornforth' },
                { winner: 'John R. Hicks' },
                { winner: 'John Bardeen' },
                { winner: 'John C. Kendrew' },
                { winner: 'John Steinbeck' },
                { winner: 'John Bardeen' },
                { winner: 'John F. Enders' },
                { winner: 'John Cockcroft' },
                { winner: 'John H. Northrop' },
                { winner: 'John R. Mott' },
                { winner: 'John Galsworthy' },
                { winner: 'John Macleod' }
            ]);
        });
    });

    describe('physics_no_chemistry', function () {
        it('selects the year and subject in which Albert Einstein won his prize', async function () {
            let result = await physics_no_chemistry();
            assert.deepEqual(result, [ { yr: 1933 }, { yr: 1919 }, { yr: 1924 }, { yr: 1917 } ]);
        });
    });
});