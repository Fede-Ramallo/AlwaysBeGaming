"use strict";

module.exports = function (sequelize, type) {
  return sequelize.define('game', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: type.STRING,
    genre: type.STRING,
    platform: type.STRING
  });
};