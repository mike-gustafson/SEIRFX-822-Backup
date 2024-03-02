let assert = require('assert');
const {
    num_stops,
    craiglockhart_id,
    lrt_stops,
    connecting_routes,
    cl_to_lr,
    cl_to_lr_by_name,
    haymarket_and_leith,
    craiglockhart_and_tollcross,
    start_at_craiglockhart,
    craiglockhart_to_sighthill, 
    craiglockhart_to_sighthill_subqueries,
} = require('../problems/011-self-joins');

describe('011 SELF JOINS', function () {

    describe('num_stops', function () {
        it('shows the number of stops in the table', async function () {
            let result = await num_stops();
            assert.deepEqual(result, [ { count: '246' } ]);
        });
    });

    describe('craiglockhart_id', function () {
        it('shows the ID of the stop Craiglockhart', async function () {
            let result = await craiglockhart_id();
            assert.deepEqual(result, [ { id: 53 } ]);
        });
    });

    describe('lrt_stops', function () {
        it('shows the ids and names of stops on the 4 LRT service', async function () {
            let result = await lrt_stops();
            assert.deepEqual(result, [
                { stop_id: 19, name: 'Bingham' },
                { stop_id: 53, name: 'Craiglockhart' },
                { stop_id: 85, name: 'Fairmilehead' },
                { stop_id: 115, name: 'Haymarket' },
                { stop_id: 117, name: 'Hillend' },
                { stop_id: 149, name: 'London Road' },
                { stop_id: 177, name: 'Northfield' },
                { stop_id: 179, name: 'Oxgangs' },
                { stop_id: 194, name: 'Princes Street' }
            ]);
        });
    });

    describe('connecting_routes', function () {
        it('shows the routes that connect London Road with Craiglockhart', async function () {
            let result = await connecting_routes();
            assert.deepEqual(result, [
                { company: 'LRT', num: '4', count: '2' },
                { company: 'LRT', num: '45', count: '2' }
            ]);
        });
    });

    describe('cl_to_lr', function () {
        it('shows routes from Craiglockhart to London Road', async function () {
            let result = await cl_to_lr();
            assert.deepEqual(result, [
                { company: 'LRT', num: '4', stop_id: 149 },
                { company: 'LRT', num: '45', stop_id: 149 }
            ]);
        });
    });

    describe('cl_to_lr_by_name', function () {
        it('shows routes from Craiglockhart to London Road', async function () {
            let result = await cl_to_lr_by_name();
            assert.deepEqual(result, [
                { company: 'LRT', num: '4', name: 'London Road' },
                { company: 'LRT', num: '45', name: 'London Road' }
            ]);
        });
    });

    describe('haymarket_and_leith', function () {
        it('shows services connecting Haymarket and Leith', async function () {
            let result = await haymarket_and_leith();
            assert.deepEqual(result, [
                { company: 'LRT', num: '12' },
                { company: 'LRT', num: '2' },
                { company: 'LRT', num: '22' },
                { company: 'LRT', num: '25' },
                { company: 'LRT', num: '2A' },
                { company: 'SMT', num: 'C5' }
              ]);
        });
    });

    describe('craiglockhart_and_tollcross', function () {
        it('shows services connecting Craiglockhart and Tollcross', async function () {
            let result = await craiglockhart_and_tollcross();
            assert.deepEqual(result, [
                { company: 'LRT', num: '10' },
                { company: 'LRT', num: '27' },
                { company: 'LRT', num: '45' },
                { company: 'LRT', num: '47' }
            ]);
        });
    });

    describe('start_at_craiglockhart', function () {
        it('shows stops that can be reached by taking one bus from Craiglockhart', async function () {
            let result = await start_at_craiglockhart();
            assert.deepEqual(result, [
                { name: 'Bingham', company: 'LRT', num: '4' },
                { name: 'Northfield', company: 'LRT', num: '4' },
                { name: 'London Road', company: 'LRT', num: '4' },
                { name: 'Princes Street', company: 'LRT', num: '4' },
                { name: 'Haymarket', company: 'LRT', num: '4' },
                { name: 'Craiglockhart', company: 'LRT', num: '4' },
                { name: 'Oxgangs', company: 'LRT', num: '4' },
                { name: 'Fairmilehead', company: 'LRT', num: '4' },
                { name: 'Hillend', company: 'LRT', num: '4' },
                { name: 'Silverknowes', company: 'LRT', num: '10' },
                { name: 'Muirhouse', company: 'LRT', num: '10' },
                { name: 'Newhaven', company: 'LRT', num: '10' },
                { name: 'Leith', company: 'LRT', num: '10' },
                { name: 'Leith Walk', company: 'LRT', num: '10' },
                { name: 'Princes Street', company: 'LRT', num: '10' },
                { name: 'Tollcross', company: 'LRT', num: '10' },
                { name: 'Craiglockhart', company: 'LRT', num: '10' },
                { name: 'Colinton', company: 'LRT', num: '10' },
                { name: 'Torphin', company: 'LRT', num: '10' },
                { name: 'Silverknowes', company: 'LRT', num: '27' },
                { name: 'Crewe Toll', company: 'LRT', num: '27' },
                { name: 'Canonmills', company: 'LRT', num: '27' },
                { name: 'Hanover Street', company: 'LRT', num: '27' },
                { name: 'Tollcross', company: 'LRT', num: '27' },
                { name: 'Craiglockhart', company: 'LRT', num: '27' },
                { name: 'Oxgangs', company: 'LRT', num: '27' },
                { name: 'Hunters Tryst', company: 'LRT', num: '27' },
                { name: 'Brunstane', company: 'LRT', num: '45' },
                { name: 'Duddingston', company: 'LRT', num: '45' },
                { name: 'Northfield', company: 'LRT', num: '45' },
                { name: 'London Road', company: 'LRT', num: '45' },
                { name: 'Hanover Street', company: 'LRT', num: '45' },
                { name: 'Tollcross', company: 'LRT', num: '45' },
                { name: 'Craiglockhart', company: 'LRT', num: '45' },
                { name: 'Colinton', company: 'LRT', num: '45' },
                { name: 'Currie', company: 'LRT', num: '45' },
                { name: 'Riccarton Campus', company: 'LRT', num: '45' },
                { name: 'Canonmills', company: 'LRT', num: '47' },
                { name: 'Hanover Street', company: 'LRT', num: '47' },
                { name: 'Tollcross', company: 'LRT', num: '47' },
                { name: 'Craiglockhart', company: 'LRT', num: '47' },
                { name: 'Colinton', company: 'LRT', num: '47' },
                { name: 'Currie', company: 'LRT', num: '47' },
                { name: 'Balerno', company: 'LRT', num: '47' },
                { name: 'Cockburn Crescent', company: 'LRT', num: '47' },
                { name: 'Balerno Church', company: 'LRT', num: '47' }
            ]);
        });
    });

    describe('(joins version): craiglockhart_to_sighthill', function () {
        it('shows routes involving two buses from Craiglockhart to Sighthill', async function () {
            let result = await craiglockhart_to_sighthill();
            assert.deepEqual(result, [
                { num: '32', company: 'LRT', name: 'Colinton' },
                { num: '52', company: 'LRT', name: 'Colinton' },
                { num: '22', company: 'LRT', name: 'Leith' },
                { num: '25', company: 'LRT', name: 'Leith' },
                { num: '32', company: 'LRT', name: 'Leith' },
                { num: '34', company: 'LRT', name: 'Leith' },
                { num: '35', company: 'LRT', name: 'Leith' },
                { num: '52', company: 'LRT', name: 'Leith' },
                { num: 'C5', company: 'SMT', name: 'Leith' },
                { num: '22', company: 'LRT', name: 'Leith Walk' },
                { num: '22A', company: 'LRT', name: 'Leith Walk' },
                { num: '25', company: 'LRT', name: 'Leith Walk' },
                { num: '32', company: 'LRT', name: 'Muirhouse' },
                { num: '52', company: 'LRT', name: 'Muirhouse' },
                { num: '22', company: 'LRT', name: 'Newhaven' },
                { num: '25', company: 'LRT', name: 'Newhaven' },
                { num: '32', company: 'LRT', name: 'Newhaven' },
                { num: '52', company: 'LRT', name: 'Newhaven' },
                { num: '3', company: 'LRT', name: 'Princes Street' },
                { num: '30', company: 'LRT', name: 'Princes Street' },
                { num: '3A', company: 'LRJ', name: 'Princes Street' },
                { num: '65', company: 'LRT', name: 'Princes Street' },
                { num: 'C5', company: 'SMT', name: 'Princes Street' },
                { num: 'C70', company: 'SMT', name: 'Princes Street' },
                { num: '34', company: 'LRT', name: 'Canonmills' },
                { num: '35', company: 'LRT', name: 'Canonmills' },
                { num: '32', company: 'LRT', name: 'Oxgangs' },
                { num: '52', company: 'LRT', name: 'Oxgangs' },
                { num: '32', company: 'LRT', name: 'Fairmilehead' },
                { num: '52', company: 'LRT', name: 'Fairmilehead' },
                { num: '22', company: 'LRT', name: 'Haymarket' },
                { num: '22A', company: 'LRT', name: 'Haymarket' },
                { num: '25', company: 'LRT', name: 'Haymarket' },
                { num: '3', company: 'LRT', name: 'Haymarket' },
                { num: '30', company: 'LRT', name: 'Haymarket' },
                { num: '3A', company: 'LRJ', name: 'Haymarket' },
                { num: '61', company: 'LRT', name: 'Haymarket' },
                { num: '61', company: 'SMT', name: 'Haymarket' },
                { num: '65', company: 'LRT', name: 'Haymarket' },
                { num: 'C5', company: 'SMT', name: 'Haymarket' },
                { num: 'C70', company: 'SMT', name: 'Haymarket' },
                { num: '34', company: 'LRT', name: 'London Road' },
                { num: '35', company: 'LRT', name: 'London Road' },
                { num: '65', company: 'LRT', name: 'London Road' },
                { num: 'C5', company: 'SMT', name: 'London Road' },
                { num: '32', company: 'LRT', name: 'Oxgangs' },
                { num: '52', company: 'LRT', name: 'Oxgangs' },
                { num: '3', company: 'LRT', name: 'Princes Street' },
                { num: '30', company: 'LRT', name: 'Princes Street' },
                { num: '3A', company: 'LRJ', name: 'Princes Street' },
                { num: '65', company: 'LRT', name: 'Princes Street' },
                { num: 'C5', company: 'SMT', name: 'Princes Street' },
                { num: 'C70', company: 'SMT', name: 'Princes Street' },
                { num: '32', company: 'LRT', name: 'Brunstane' },
                { num: '52', company: 'LRT', name: 'Brunstane' },
                { num: '32', company: 'LRT', name: 'Colinton' },
                { num: '52', company: 'LRT', name: 'Colinton' },
                { num: '61', company: 'LRT', name: 'Currie' },
                { num: '34', company: 'LRT', name: 'London Road' },
                { num: '35', company: 'LRT', name: 'London Road' },
                { num: '65', company: 'LRT', name: 'London Road' },
                { num: 'C5', company: 'SMT', name: 'London Road' },
                { num: '22A', company: 'LRT', name: 'Riccarton Campus' },
                { num: '61', company: 'SMT', name: 'Riccarton Campus' },
                { num: '65', company: 'LRT', name: 'Riccarton Campus' },
                { num: '34', company: 'LRT', name: 'Canonmills' },
                { num: '35', company: 'LRT', name: 'Canonmills' },
                { num: '32', company: 'LRT', name: 'Colinton' },
                { num: '52', company: 'LRT', name: 'Colinton' },
                { num: '61', company: 'LRT', name: 'Currie' }
            ]);
        });
    });

    describe('(subquery version): craiglockhart_to_sighthill_subqueries', function () {
        it('shows routes involving two buses from Craiglockhart to Sighthill', async function () {
            let result = await craiglockhart_to_sighthill_subqueries();
            assert.deepEqual(result, [
                { num: '32', company: 'LRT', name: 'Colinton' },
                { num: '52', company: 'LRT', name: 'Colinton' },
                { num: '22', company: 'LRT', name: 'Leith' },
                { num: '25', company: 'LRT', name: 'Leith' },
                { num: '32', company: 'LRT', name: 'Leith' },
                { num: '34', company: 'LRT', name: 'Leith' },
                { num: '35', company: 'LRT', name: 'Leith' },
                { num: '52', company: 'LRT', name: 'Leith' },
                { num: 'C5', company: 'SMT', name: 'Leith' },
                { num: '22', company: 'LRT', name: 'Leith Walk' },
                { num: '22A', company: 'LRT', name: 'Leith Walk' },
                { num: '25', company: 'LRT', name: 'Leith Walk' },
                { num: '32', company: 'LRT', name: 'Muirhouse' },
                { num: '52', company: 'LRT', name: 'Muirhouse' },
                { num: '22', company: 'LRT', name: 'Newhaven' },
                { num: '25', company: 'LRT', name: 'Newhaven' },
                { num: '32', company: 'LRT', name: 'Newhaven' },
                { num: '52', company: 'LRT', name: 'Newhaven' },
                { num: '3', company: 'LRT', name: 'Princes Street' },
                { num: '30', company: 'LRT', name: 'Princes Street' },
                { num: '3A', company: 'LRJ', name: 'Princes Street' },
                { num: '65', company: 'LRT', name: 'Princes Street' },
                { num: 'C5', company: 'SMT', name: 'Princes Street' },
                { num: 'C70', company: 'SMT', name: 'Princes Street' },
                { num: '34', company: 'LRT', name: 'Canonmills' },
                { num: '35', company: 'LRT', name: 'Canonmills' },
                { num: '32', company: 'LRT', name: 'Oxgangs' },
                { num: '52', company: 'LRT', name: 'Oxgangs' },
                { num: '32', company: 'LRT', name: 'Fairmilehead' },
                { num: '52', company: 'LRT', name: 'Fairmilehead' },
                { num: '22', company: 'LRT', name: 'Haymarket' },
                { num: '22A', company: 'LRT', name: 'Haymarket' },
                { num: '25', company: 'LRT', name: 'Haymarket' },
                { num: '3', company: 'LRT', name: 'Haymarket' },
                { num: '30', company: 'LRT', name: 'Haymarket' },
                { num: '3A', company: 'LRJ', name: 'Haymarket' },
                { num: '61', company: 'LRT', name: 'Haymarket' },
                { num: '61', company: 'SMT', name: 'Haymarket' },
                { num: '65', company: 'LRT', name: 'Haymarket' },
                { num: 'C5', company: 'SMT', name: 'Haymarket' },
                { num: 'C70', company: 'SMT', name: 'Haymarket' },
                { num: '34', company: 'LRT', name: 'London Road' },
                { num: '35', company: 'LRT', name: 'London Road' },
                { num: '65', company: 'LRT', name: 'London Road' },
                { num: 'C5', company: 'SMT', name: 'London Road' },
                { num: '32', company: 'LRT', name: 'Oxgangs' },
                { num: '52', company: 'LRT', name: 'Oxgangs' },
                { num: '3', company: 'LRT', name: 'Princes Street' },
                { num: '30', company: 'LRT', name: 'Princes Street' },
                { num: '3A', company: 'LRJ', name: 'Princes Street' },
                { num: '65', company: 'LRT', name: 'Princes Street' },
                { num: 'C5', company: 'SMT', name: 'Princes Street' },
                { num: 'C70', company: 'SMT', name: 'Princes Street' },
                { num: '32', company: 'LRT', name: 'Brunstane' },
                { num: '52', company: 'LRT', name: 'Brunstane' },
                { num: '32', company: 'LRT', name: 'Colinton' },
                { num: '52', company: 'LRT', name: 'Colinton' },
                { num: '61', company: 'LRT', name: 'Currie' },
                { num: '34', company: 'LRT', name: 'London Road' },
                { num: '35', company: 'LRT', name: 'London Road' },
                { num: '65', company: 'LRT', name: 'London Road' },
                { num: 'C5', company: 'SMT', name: 'London Road' },
                { num: '22A', company: 'LRT', name: 'Riccarton Campus' },
                { num: '61', company: 'SMT', name: 'Riccarton Campus' },
                { num: '65', company: 'LRT', name: 'Riccarton Campus' },
                { num: '34', company: 'LRT', name: 'Canonmills' },
                { num: '35', company: 'LRT', name: 'Canonmills' },
                { num: '32', company: 'LRT', name: 'Colinton' },
                { num: '52', company: 'LRT', name: 'Colinton' },
                { num: '61', company: 'LRT', name: 'Currie' }
            ]);
        });
    });

});
