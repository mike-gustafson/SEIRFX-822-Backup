// const expect = require('chai').expect;
// const request = require('supertest');
// const app = require('../index');

// describe('GET /accounts', function () {
//     it('should return a 200 response', function (done) {
//         request(app).get('/accounts').expect(200, done);
//     });
// });

// describe('GET /accounts/:accountNumber', function () {
//     it('should return a 200 response', function (done) {
//         request(app).get('/accounts/15938314').expect(200, done);
//     });
// });

// describe('POST /accounts', function () {
//     it('should return a 200 response after creating an account', function (done) {
//         request(app).post('/accounts')
//         .set("content-type", "application/x-www-form-urlencoded")
//         .send({
//             amount: 25000,
//         })
//         .expect(200, done)
//     });
// });

// describe('PUT /accounts/:accountNumber', function () {
//     it('should return a 200 response after editing the account', function (done) {
//         request(app).put('/accounts/85516086')
//         .set("content-type", "application/x-www-form-urlencoded")
//         .send({
//             amount: 25000,
//         })
//         .expect(200, done)
//     });
// });
// describe('DELETE /accounts/:accountNumber', function () {
//     it('should return a 200 response after deleting the account', function (done) {
//         request(app).delete('/accounts/15938314')
//         .expect(200, done)
//     });

//     it('should return a 404', function (done) {
//         request(app).delete('/accounts/9999999')
//         .expect(404, done)
//     });
// });