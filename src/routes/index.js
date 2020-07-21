const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {

    // Rutas para acceso a datos
    const data = {
        contrato_estado_negociacion: '/ComisionesLight-ViewController-context-root-EE/estadoNegociacion/{numeroIdentificacion}/{tipoIdentificacion}',
        contrato_convenio_dias: '/convenios/servicio/producto/nomina/convenioPorFecha/{fecha}'
    };

    res.json(data);
});  

module.exports = router;