const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

describe('return array of airlines', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/airlines').expect(200, done);
    });
});

describe('GET /airlines/:flightNumber', function () {
    it('should return a 200 response after finding vehicle by vin number', function (done) {
        request(app).get('/airlines/0024').expect(200, done);
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
        request(app).put('/flights/0047')
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
            seat: "333A",
        })
        .expect(200, done)
    });
});
describe('DELETE /flights/:flightNumer', function () {
    it('should return a 200 response after deleting the account', function (done) {
        request(app).delete('/flights/0068')
        .expect(200, done)
    });

    it('should return a 404', function (done) {
        request(app).delete('/flights/9999999')
        .expect(404, done)
    });
});