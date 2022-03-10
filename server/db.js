const Sequelize = require('sequelize');
const newgameModel = require('./models/newgame')

const sequelize = new Sequelize('postgres://Fede-Ramallo:Fede87238@localhost:3000/demo');

const newgame = newgameModel(sequelize, Sequelize);

sequelize.sync({force: false})
.then(() => {
    console.log("tablas sincronizadas")
})

module.exports = {
    newgame
}