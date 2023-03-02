const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: "toDoList",
    port:5432,
    host: "localhost",
    username: "postgres",
    password: "ruth",
    dialect:"postgres"
});

module.exports= db;