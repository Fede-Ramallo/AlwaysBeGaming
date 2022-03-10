"use strict";

var express = require("express");

var router = express.Router();

var _require = require('../db'),
    newgame = _require.newgame;

router.get('/', function _callee(req, res) {
  var games;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(newgame.findAll());

        case 2:
          games = _context.sent;
          res.json(games);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post('/', function _callee2(req, res) {
  var game;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(newgame.create(req.body));

        case 2:
          game = _context2.sent;
          res.json(game);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;