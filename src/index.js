const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 4000);


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes'));

//Contrato Servicio Consulta Estado de Negociacion
app.use('/ComisionesLight-ViewController-context-root-EE/estadoNegociacion', require('./routes/contrato-estado-negociacion'));
//Contrato Servicio Consulta Convenio Por Fecha
app.use('/convenios/servicio/producto/nomina/convenioPorFecha', require('./routes/contrato-convenio-dias'));
//Mocks
app.use('/ComisionesLight-ViewController-context-root/aprobadorescenarios', require('./routes/mock'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});