let assert = require('assert');
const {
    null_dept,
    all_teachers_join,
    all_depts_join,
    teachers_and_mobiles,
    teachers_and_depts,
    num_teachers_and_mobiles,
    dept_staff_counts,
    teachers_and_divisions,
    teachers_and_divisions_two,
} = require('../problems/010-using-null');

describe('010 USING NULL', function () {
    
    describe('null_dept', function () {
        it('selects teachers who have NULL as their department', async function () {
            let result = await null_dept();
            assert.deepEqual(result, [ { name: 'Spiregrain' }, { name: 'Deadyawn' } ]);
        });
    });

    describe('all_teachers_join', function () {
        it('displays all of the teachers in a joined table', async function () {
            let result = await all_teachers_join();
            assert.deepEqual(result, [
                { name: 'Computing' },
                { name: 'Computing' },
                { name: 'Computing' },
                { name: 'Spiregrain' },
                { name: 'Design' },
                { name: 'Deadyawn' }
            ]);
        });
    });

    describe('all_depts_join', function () {
        it('displays all of the departments in a joined table', async function () {
            let result = await all_depts_join();
            assert.deepEqual(result, [
                { name: 'Computing' },
                { name: 'Computing' },
                { name: 'Computing' },
                { name: 'Design' },
                { name: 'Engineering' }
            ]);
        });
    });

    describe('teachers_and_mobiles', function () {
        it("displays teachers' mobile numbers, or a default if none exists", async function () {
            let result = await teachers_and_mobiles();
            assert.deepEqual(result, [
                { name: 'Shrivell', coalesce: '07966 555 1234' },
                { name: 'Throd', coalesce: '07122 555 1920' },
                { name: 'Splint', coalesce: '07986 444 2266' },
                { name: 'Spiregrain', coalesce: '07986 444 2266' },
                { name: 'Cutflower', coalesce: '07966 555 6574' },
                { name: 'Deadyawn', coalesce: '07986 444 2266' }
            ]);
        });
    });

    describe('teachers_and_depts', function () {
        it("displays teachers and their departments, or 'None' if they have none", async function () {
            let result = await teachers_and_depts();
            assert.deepEqual(result, [
                { name: 'Shrivell', coalesce: 'Computing' },
                { name: 'Throd', coalesce: 'Computing' },
                { name: 'Splint', coalesce: 'Computing' },
                { name: 'Spiregrain', coalesce: 'None' },
                { name: 'Cutflower', coalesce: 'Design' },
                { name: 'Deadyawn', coalesce: 'None' }
            ]);
        });
    });

    describe('num_teachers_and_mobiles', function () {
        it('shows the number of teachers and the number of mobile numbers', async function () {
            let result = await num_teachers_and_mobiles();
            assert.deepEqual(result, [ { count: '3' } ]);
        });
    });

    describe('dept_staff_counts', function () {
        it('shows the name and number of staff of each department', async function () {
            let result = await dept_staff_counts();
            assert.deepEqual(result, [
                { name: 'Engineering', count: '0' },
                { name: 'Design', count: '1' },
                { name: 'Computing', count: '3' }
            ]);
        });
    });

    describe('teachers_and_divisions', function () {
        it('shows the name and division of teachers', async function () {
            let result = await teachers_and_divisions();
            assert.deepEqual(result, [
                { name: 'Shrivell', dept_name: 'Sci' },
                { name: 'Throd', dept_name: 'Sci' },
                { name: 'Splint', dept_name: 'Sci' },
                { name: 'Spiregrain', dept_name: 'Art' },
                { name: 'Cutflower', dept_name: 'Sci' },
                { name: 'Deadyawn', dept_name: 'Art' }
            ]);
        });
    });

    describe('teachers_and_divisions_two', function () {
        it("shows the name and division of teachers, or 'None' if they have none", async function () {
            let result = await teachers_and_divisions_two();
            assert.deepEqual(result, [
                { name: 'Shrivell', dept_name: 'Sci' },
                { name: 'Throd', dept_name: 'Sci' },
                { name: 'Splint', dept_name: 'Sci' },
                { name: 'Spiregrain', dept_name: 'None' },
                { name: 'Cutflower', dept_name: 'Sci' },
                { name: 'Deadyawn', dept_name: 'None' }
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