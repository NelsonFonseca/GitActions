const { Router } = require('express');
const router = new Router();

const data = require('../data/contrato-estado-negociacion.json');

router.get('/:numeroIdentificacion/:tipoIdentificacion', (req, res) => {

    const { numeroIdentificacion } = req.params;
    const { tipoIdentificacion } = req.params;

    //res.json({"id":numeroIdentificacion, "tipo":tipoIdentificacion});
    
        // Respuesta para todas las peticiones
        res.json(data);
});

module.exports = router;