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

    const result = a + b;

    return res.json({
        returnCode: 1,
        message: 'Calculation is successful',
        result
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

    const result = a - b;

    return res.json({
        returnCode: 1,
        message: 'Calculation is successful',
        result
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

    const result = a * b;

    return res.json({
        returnCode: 1,
        message: 'Calculation is successful',
        result
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

    let result = a / b;

    if (!Number.isFinite(result)) {
        result = result.toString();
    }

    return res.json({
        returnCode: 1,
        message: 'Calculation is successful',
        result
    });
});

module.exports = router;
