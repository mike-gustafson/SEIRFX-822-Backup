const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

describe('return array of vehicles', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/vehicles').expect(200, done);
    });
});

describe('GET /vehicles/:vin', function () {
    it('should return a 200 response after finding vehicle by vin number', function (done) {
        request(app).get('/vehicles/5FT1SRABLYZ942439').expect(200, done);
    });
});

describe('POST /vehicles', function () {
    it('should return a 200 response after creating vehicle', function (done) {
        request(app).post('/vehicles')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
            manufacturer: 'Rolls Royce',
            color: 'Black',
            vehicle: 'Cullinan',
            model: 'Cullinan'
        })
        .expect(200, done);
    });
});

describe('PUT /vehicles/:vin', function () {
    it('should return a 200 response after updating vehicle', function (done) {
        request(app).put('/vehicles/3TZSA7GPEVVP61620')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
            manufacturer: 'Rolls Royce',
            color: 'Black',
            vehicle: 'Cullinan',
            model: 'Cullinan'
        })
        .expect(200, done);
    });
});

describe('DELETE /vehicles/:vin', function () {
    it('should return a 200 response after updating vehicle', function (done) {
        request(app).put('/vehicles/3TZSA7GPEVVP61620')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
            manufacturer: 'Rolls Royce',
            color: 'Black',
            vehicle: 'Cullinan',
            model: 'Cullinan'
        })
        .expect(200, done);
    });
});