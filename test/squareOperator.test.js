const request = require('supertest');
const app = require('../app');

describe('Advacned Operators', function() {
    it('Square operator: Valid', function(done) {
        const operand = 11;
        const expectedResult = 11;

        request(app)
            .post('/square')
            .send({ operand })
            .set('Accept', 'application/json')
            .expect(
                200,
                {
                    message: 'Calculation is successful',
                    returnCode: 1,
                    result: expectedResult
                },
                done
            );
    });

    it('Square operator: Invalid Datatype', function(done) {
        const operand = 'kjdfk';

        request(app)
            .post('/square')
            .send({ operand })
            .set('Accept', 'application/json')
            .expect(
                200,
                {
                    message: 'Operand is not number',
                    returnCode: 0
                },
                done
            );
    });
});
