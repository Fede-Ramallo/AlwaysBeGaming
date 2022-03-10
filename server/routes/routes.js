const express = require("express");
const router = express.Router();

const {newgame} = require('../db')

router.get('/', async (req, res) => {
    const games = await newgame.findAll();
    res.json(games);
  })

  router.post('/', async (req, res) => {
    const game = await newgame.create(req.body);
    res.json(game);
  })

  module.exports = router;