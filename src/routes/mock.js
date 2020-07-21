const { Router } = require('express');
const router = new Router();

const data = require('../data/contrato-convenio-dias.json');

router.post('/', (req, res) => {

    const { fecha } = req.body;
    res.status(200);
        res.json({
            "mensaje": "Token no valido"
        });
});

module.exports = router;