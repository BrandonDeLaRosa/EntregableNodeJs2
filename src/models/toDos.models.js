const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const ToDos = db.define('toDo', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type: DataTypes.STRING(40),
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    },
});

module.exports= ToDos;