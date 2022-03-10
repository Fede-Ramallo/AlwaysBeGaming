"use strict";

var Sequelize = require('sequelize');

var newgameModel = require('./models/newgame');

var sequelize = new Sequelize('postgres://Fede-Ramallo:Fede87238@localhost:3000/demo');
var newgame = newgameModel(sequelize, Sequelize);
sequelize.sync({
  force: false
}).then(function () {
  console.log("tablas sincronizadas");
});
module.exports = {
  newgame: newgame
};