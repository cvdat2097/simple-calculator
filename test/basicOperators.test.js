const request = require('supertest');
const app = require('../app');

describe('Basic Operators', function() {
    it('Add operator: Valid', function(done) {
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

    it('Add operator: Invalid Datatype', function(done) {
        const operand1 = 'kjdfk';
        const operand2 = 43;

        request(app)
            .post('/add')
            .send({ operand1, operand2 })
            .set('Accept', 'application/json')
            .expect(
                200,
                {
                    message: 'Operands are not numbers',
                    returnCode: 0
                },
                done
            );
    });

    it('Subtract operator: Valid', function(done) {
        const operand1 = 50;
        const operand2 = 60;
        const expectedResult = -10;

        request(app)
            .post('/subtract')
            .send({ operand1, operand2 })
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

    it('Subtract operator: Invalid Datatype', function(done) {
        const operand1 = '34';
        const operand2 = '3903d';

        request(app)
            .post('/subtract')
            .send({ operand1, operand2 })
            .set('Accept', 'application/json')
            .expect(
                200,
                {
                    message: 'Operands are not numbers',
                    returnCode: 0
                },
                done
            );
    });

    it('Mutiply operator: Valid', function(done) {
        const operand1 = 3;
        const operand2 = 11;
        const expectedResult = 33;

        request(app)
            .post('/multiply')
            .send({ operand1, operand2 })
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

    it('Mutiply operator: Invalid Datatype', function(done) {
        const operand1 = '5666';
        const operand2 = 'd344';

        request(app)
            .post('/multiply')
            .send({ operand1, operand2 })
            .set('Accept', 'application/json')
            .expect(
                200,
                {
                    message: 'Operands are not numbers',
                    returnCode: 0
                },
                done
            );
    });

    it('Divide operator: Valid', function(done) {
        const operand1 = 6;
        const operand2 = 2;
        const expectedResult = 3;

        request(app)
            .post('/divide')
            .send({ operand1, operand2 })
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

    it('Divide operator: Invalid Datatype', function(done) {
        const operand1 = 'e';
        const operand2 = 'tret';

        request(app)
            .post('/divide')
            .send({ operand1, operand2 })
            .set('Accept', 'application/json')
            .expect(
                200,
                {
                    message: 'Operands are not numbers',
                    returnCode: 0
                },
                done
            );
    });

    it('Divide operator: Divide by 0', function(done) {
        const operand1 = 18;
        const operand2 = 0;
        const expectedResult = 'Infinity';

        request(app)
            .post('/divide')
            .send({ operand1, operand2 })
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
});
