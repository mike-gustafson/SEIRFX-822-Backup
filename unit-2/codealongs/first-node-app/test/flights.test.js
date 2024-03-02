const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

describe('GET /flights', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/flights').expect(200, done);
    });
});

describe('GET /flights/:flightNumer', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/flights/8184').expect(200, done);
    });
});

describe('POST /flights', function () {
    it('should return a 200 response after creating an account', function (done) {
        request(app).post('/flights')
        .set("content-type", "application/x-www-form-urlencoded")
        .expect(200, done)
    });
});

describe('PUT /flights/:flightNumer', function () {
    it('should return a 200 response after editing the account', function (done) {
        request(app).put('/flights/HNAKFS4XV9TV14655')
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
            seat: "333A",
        })
        .expect(200, done)
    });
});
describe('DELETE /flights/:flightNumer', function () {
    it('should return a 200 response after deleting the account', function (done) {
        request(app).delete('/flights/438')
        .expect(200, done)
    });

    it('should return a 404', function (done) {
        request(app).delete('/flights/9999999')
        .expect(404, done)
    });
});