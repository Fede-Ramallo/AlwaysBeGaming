"use strict";

//'use strict';
var _require = require('./server/server'),
    app = _require.app; // acuerdense de agregar su router o cualquier middleware que necesiten aca
// el condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.


if (!module.parent) app.listen(3000, function () {
  console.log("Server is running!");
});
module.exports = app; // esto es solo para testear mas facil