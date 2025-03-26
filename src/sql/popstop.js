'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../sql/index'); // Đảm bảo đường dẫn đúng

const Popstop = sequelize.define('popstop', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING
}, {
    tableName: 'popstop',
    timestamps: false,
});

module.exports = Popstop;
