const router = require('express').Router();

router.post('/add', (req, res) => {
    const { operand1, operand2 } = req.body;

    if (operand1 === undefined || operand2 === undefined) {
        return res.json({
            returnCode: 0,
            message: 'Operands are missing'
        });
    }

    const a = Number(operand1);
    const b = Number(operand2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        return res.json({
            returnCode: 0,
            message: 'Operands are not numbers'
        });
    }

    const results = a + b;

    return res.json({
        returnCode: 1,
        message: 'Calculation is successful',
        results
    });
});

router.post('/subtract', (req, res) => {
    const { operand1, operand2 } = req.body;

    if (operand1 === undefined || operand2 === undefined) {
        return res.json({
            returnCode: 0,
            message: 'Operands are missing'
        });
    }

    const a = Number(operand1);
    const b = Number(operand2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        return res.json({
            returnCode: 0,
            message: 'Operands are not numbers'
        });
    }

    const results = a - b;

    return res.json({
        returnCode: 1,
        message: 'Calculation is successful',
        results
    });
});

router.post('/multiply', (req, res) => {
    const { operand1, operand2 } = req.body;

    if (operand1 === undefined || operand2 === undefined) {
        return res.json({
            returnCode: 0,
            message: 'Operands are missing'
        });
    }

    const a = Number(operand1);
    const b = Number(operand2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        return res.json({
            returnCode: 0,
            message: 'Operands are not numbers'
        });
    }

    const results = a * b;

    return res.json({
        returnCode: 1,
        message: 'Calculation is successful',
        results
    });
});

router.post('/divide', (req, res) => {
    const { operand1, operand2 } = req.body;

    if (operand1 === undefined || operand2 === undefined) {
        return res.json({
            returnCode: 0,
            message: 'Operands are missing'
        });
    }

    const a = Number(operand1);
    const b = Number(operand2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        return res.json({
            returnCode: 0,
            message: 'Operands are not numbers'
        });
    }

    let results = a / b;

    if (!Number.isFinite(results)) {
        results = results.toString();
    }

    return res.json({
        returnCode: 1,
        message: 'Calculation is successful',
        results
    });
});

module.exports = router;
