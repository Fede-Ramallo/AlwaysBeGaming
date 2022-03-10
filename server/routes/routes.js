const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
    res.send("hola mundo mirame como cambio xddd");
  })

  router.post('/', function (req, res) {
      res.send("Capo esto es otra cosa")
  })

  module.exports = router;