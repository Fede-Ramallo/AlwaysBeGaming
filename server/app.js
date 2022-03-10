//'use strict';

const {app} = require('./server/server');

// acuerdense de agregar su router o cualquier middleware que necesiten aca

// el condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent) app.listen(3000);


module.exports = app; // esto es solo para testear mas facil