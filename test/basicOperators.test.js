const request = require('supertest');
const app = require('../app');

describe('Basic Operatiors', function() {
    it('Add operator', function(done) {
        const operand1 = 23;
        const operand2 = 43;
        const expectedResult = 66;

        request(app)
            .post('/add')
            .send({ operand1, operand2 })
            .set('Accept', 'application/json')
            .end(function(err, res) {
                if (err) return done(err);

                const { result } = res.body;

                if (result === expectedResult) {
                    return done();
                }

                done(new Error('Wrong result'));
            });
    });
});
