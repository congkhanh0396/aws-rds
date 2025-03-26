'use strict'
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('popstop', 'jackson', 'MySQL@Be2024', {
    host: 'dbmysql.jacksontran.com',
    port: 2784,
    dialect: 'mysql',
    logging: true,
});

sequelize.authenticate()
    .then(() => console.log('connect db successfully'))
    .catch(() => console.log('connect db unsuccessfully'));


module.exports = sequelize;
