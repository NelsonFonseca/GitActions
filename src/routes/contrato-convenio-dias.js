const { Router } = require('express');
const router = new Router();

const data = require('../data/contrato-convenio-dias.json');

router.get('/:fecha', (req, res) => {

    const { fecha } = req.params;

    if (fecha == '00000000') {
        res.json({
            "conveniosInfo": [],
            "statusCode": "200",
            "descripcion": "No se encontraron Convenios con el parametro enviado"
        });
    } else {
        res.json(data);
    }
});

module.exports = router;