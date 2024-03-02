const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

describe('GET /vehicles', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/vehicles').expect(200, done);
    });
});

describe('GET /vehicles/:vin', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/vehicles/LeBaron').expect(200, done);
    });
});

describe('POST /vehicles', function () {
    it('should return a 200 response after creating an account', function (done) {
        request(app).post('/vehicles')
        .set("content-type", "application/x-www-form-urlencoded")
        .expect(200, done)
    });
});

describe('PUT /vehicles/:vin', function () {
    it('should return a 200 response after editing the account', function (done) {
        request(app).put('/vehicles/HNAKFS4XV9TV14655')
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
            color: "navy-blue",
        })
        .expect(200, done)
    });
});
describe('DELETE /vehicles/:vin', function () {
    it('should return a 200 response after deleting the account', function (done) {
        request(app).delete('/vehicles/N99KE6M73CXK43386')
        .expect(200, done)
    });

    it('should return a 404', function (done) {
        request(app).delete('/vehicles/9999999')
        .expect(404, done)
    });
});