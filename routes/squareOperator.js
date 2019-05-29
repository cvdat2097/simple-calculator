const router = require('express').Router();

router.post('/square', (req, res) => {
    const { operand } = req.body;

    if (operand === undefined) {
        return res.json({
            returnCode: 0,
            message: 'Operands are missing'
        });
    }

    const a = Number(operand);

    if (Number.isNaN(a)) {
        return res.json({
            returnCode: 0,
            message: 'Operand is not number'
        });
    }

    const results = a * a;

    return res.json({
        returnCode: 1,
        message: 'Calculation is successful',
        results
    });
});

module.exports = router;
